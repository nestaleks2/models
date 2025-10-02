import React, { useEffect, useState } from 'react'

export default function Gallery({ models, onSelect, lang = 'ru' }) {
  const [thumbs, setThumbs] = useState({})
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const base = import.meta.env.DEV ? 'http://localhost:3000' : ''
      const entries = await Promise.all(models.map(async m => {
        try {
          const res = await fetch(`/api/models/${m.id}/images`)
          if (!res.ok) return [m.id, null]
          const list = await res.json()
          const url = list && list.length ? (list[0].startsWith('/') ? base + list[0] : list[0]) : null
          return [m.id, url]
        } catch (e) {
          return [m.id, null]
        }
      }))
      if (!mounted) return
      const map = Object.fromEntries(entries)
      setThumbs(map)
    })()
    return () => { mounted = false }
  }, [models])

  const labels = {
    en: { 
      age: '🎂 Age', 
      height: 'Height', 
      country: 'Country', 
      sexualPreferences: 'Sexual preferences',
      sortBy: 'Sort by',
      name: '👤 Name',
      countrySort: '🌍 Country'
    },
    ru: { 
      age: '🎂 Возрасту', 
      height: 'Рост', 
      country: 'Страна', 
      sexualPreferences: 'Сексуальные предпочтения',
      sortBy: 'Сортировать по',
      name: '👤 Имени',
      countrySort: '🌍 Стране'
    }
  }

  // Функция сортировки моделей
  const sortModels = (models, criteria) => {
    return [...models].sort((a, b) => {
      switch (criteria) {
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
  }

  const sortedModels = sortModels(models, sortBy)

  // Функция для получения флага страны
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
      return (
        <img 
          src={`/src/img/icons/country/${flagFile}`} 
          alt={`${country} flag`}
          className="country-flag"
        />
      )
    }
    return <span className="default-flag">🏳️</span>
  }

  return (
    <div className="premium-gallery">
      {/* Галерея всех моделей в стиле hero */}
      <div className="models-section">
        <div className="section-header">
          <h2 className="section-title">
            {lang === 'ru' ? 'Модели' : 'Models'}
          </h2>
          <div className="sort-controls">
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
        <div className="hero-slides">
          {sortedModels.map((model, index) => {
            const thumb = thumbs[model.id]
            const stage = lang === 'ru' ? (model.stageNameRU || model.stageName) : model.stageName
            const countryName = lang === 'ru' ? (model.countryRU || model.country) : model.country
            const flag = getCountryFlag(model.country)
            
            
            return (
              <div 
                key={model.id} 
                className="hero-slide"
                onClick={() => onSelect(model.id)}
              >
                <div className="hero-image">
                  {thumb ? (
                    <img src={thumb} alt={`${model.name}`} />
                  ) : (
                    <div className="hero-placeholder">
                      <div className="placeholder-content">
                        {flag} 
                        <span className="model-name">{model.name}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="hero-overlay">
                  <div className="hero-model-info">
                    <h3 className="hero-model-name">
                      {flag} 
                      <span className="name-text">{model.name} {model.surname}</span>
                    </h3>
                    {stage && <p className="hero-stage-name">{stage}</p>}
                    <div className="hero-stats">
                      <span>{model.age} {lang === 'ru' ? 'лет' : 'yrs'}</span>
                      <span>•</span>
                      <span>{model.height} см</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
