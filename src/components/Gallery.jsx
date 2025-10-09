import React, { useEffect, useState, useMemo } from 'react'
import { getMainImageForModel } from '../utils/images'

export default function Gallery({ models, onSelect, lang = 'ru' }) {
  const [thumbs, setThumbs] = useState({})
  const [sortBy, setSortBy] = useState('name')
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('created')

  useEffect(() => {
    let mounted = true
    
    const loadThumbnails = async () => {
      setLoading(true)
      const thumbnailsMap = {}
      
      // Создаем карту миниатюр используя основные изображения моделей
      await Promise.all(models.map(async model => {
        try {
          const mainImage = await getMainImageForModel(model.id)
          thumbnailsMap[model.id] = mainImage
        } catch (error) {
          console.warn(`Failed to load thumbnail for model ${model.id}:`, error)
          thumbnailsMap[model.id] = `/src/img/models/${model.id}/image.jpg`
        }
      }))
      
      if (!mounted) return
      
      setThumbs(thumbnailsMap)
      setLoading(false)
    }
    
    loadThumbnails()
    return () => { mounted = false }
  }, [models])

  const labels = {
    en: { 
      age: 'Age', 
      country: 'Country', 
      sortBy: 'Sort by',
      name: 'Name',
      countrySort: 'Country',
      loading: 'Loading...',
      totalModels: 'Total models',
      created: 'Created',
      notCreated: 'Not created'
    },
    ru: { 
      age: 'Возрасту', 
      country: 'Страна', 
      sortBy: 'Сортировать по',
      name: 'Имени',
      countrySort: 'Стране',
      loading: 'Загрузка...',
      totalModels: 'Всего моделей',
      created: 'Создано',
      notCreated: 'Не создано'
    }
  }

  // Мемоизированная фильтрация и сортировка моделей
  const filteredAndSortedModels = useMemo(() => {
    // Сначала фильтруем модели по активной вкладке
    const filteredModels = models.filter(model => {
      if (activeTab === 'created') {
        return model.created === 'yes'
      } else if (activeTab === 'notCreated') {
        return model.created === 'no'
      }
      return true
    })

    // Затем сортируем отфильтрованные модели
    return filteredModels.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'age':
          return a.age - b.age
        case 'country':
          const aNat = lang === 'ru' ? (a.countryRU || a.country || '') : (a.country || '')
          const bNat = lang === 'ru' ? (b.countryRU || b.country || '') : (b.country || '')
          return aNat.localeCompare(bNat)
        default:
          return 0
      }
    })
  }, [models, sortBy, lang, activeTab])

  // Функция для получения флага страны с правильным базовым путем
  const getCountryFlag = (country) => {
    const flagMap = {
      'China': 'china.svg',
      'South Korea': 'south-korea.svg', 
      'Brazil': 'brazil.svg',
      'Jamaica': 'jamaica.svg',
      'USA': 'usa.svg',
      'Germany': 'germany.svg',
      'Italy': 'italy.svg',
      'Ukraine': 'ukraine.svg',
      'France': 'france.svg',
      'Japan': 'japan.svg',
      'Australia': 'australia.svg',
      'Mexico': 'mexico.svg',
      'Lebanon': 'lebanon.svg',
      'Great Britain': 'united-kingdom.svg',
      'Iceland': 'iceland.svg',
      'Czech': 'czech.svg',
      'Spain': 'spain.svg',
      'Finland': 'finland.svg',
      'Greece': 'greece.svg'
    }
    
    const flagFile = flagMap[country]
    if (flagFile) {
      // Импортируем флаг из src
      const flagSrc = new URL(`../img/icons/country/${flagFile}`, import.meta.url).href
      return (
        <img 
          src={flagSrc} 
          alt={`${country} flag`}
          className="country-flag"
          loading="lazy"
        />
      )
    }
    return <span className="default-flag">🏳️</span>
  }

  if (loading) {
    return (
      <div className="gallery-loading">
        <div className="loading-spinner"></div>
        <p>{labels[lang].loading}</p>
      </div>
    )
  }

  return (
    <div className="gallery">
      <div className="gallery-header">
        <div className="gallery-stats">
          <h2 className="gallery-title">
            {lang === 'ru' ? 'Галерея моделей' : 'Models Gallery'}
          </h2>
          <p className="gallery-count">
            {labels[lang].totalModels}: <span className="count-number">{filteredAndSortedModels.length}</span>
          </p>
        </div>
        
        <div className="gallery-controls">
          <div className="sort-control">
            <label className="sort-label">{labels[lang].sortBy}:</label>
            <select 
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">{labels[lang].name}</option>
              <option value="age">{labels[lang].age}</option>
              <option value="country">{labels[lang].countrySort}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="gallery-tabs">
        <button 
          className={`tab-button ${activeTab === 'created' ? 'active' : ''}`}
          onClick={() => setActiveTab('created')}
        >
          {labels[lang].created}
        </button>
        <button 
          className={`tab-button ${activeTab === 'notCreated' ? 'active' : ''}`}
          onClick={() => setActiveTab('notCreated')}
        >
          {labels[lang].notCreated}
        </button>
      </div>

      <div className="gallery-grid">
        {filteredAndSortedModels.map((model) => {
          const thumb = thumbs[model.id]
          const stageName = lang === 'ru' ? (model.stageNameRU || model.stageName) : model.stageName
          const countryName = lang === 'ru' ? (model.countryRU || model.country) : model.country
          const flag = getCountryFlag(model.country)
          
          return (
            <div 
              key={model.id} 
              className="model-card"
              onClick={() => onSelect(model.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelect(model.id)
                }
              }}
            >
              <div className="card-image">
                {thumb ? (
                  <img 
                    src={thumb} 
                    alt={`${model.name} ${model.surname}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div className="card-placeholder" style={{display: thumb ? 'none' : 'flex'}}>
                  <div className="placeholder-content">
                    {flag}
                    <span className="placeholder-name">{model.name}</span>
                  </div>
                </div>
                <div className="card-overlay">
                  <div className="card-gradient"></div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-name">
                        {flag}
                        <span className="name-text">{model.name} {model.surname}</span>
                      </h3>
                      {stageName && <p className="card-stage">{stageName}</p>}
                    </div>
                    <div className="card-info">
                      <div className="info-item">
                        <span className="info-text">{countryName}</span>
                      </div>
                      <div className="card-stats">
                        <span className="stat">{model.age} {lang === 'ru' ? 'лет' : 'yrs'}</span>
                        <span className="stat-divider">•</span>
                        <span className="stat">{model.height} см</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}