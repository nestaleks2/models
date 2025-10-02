import React, { useEffect, useState } from 'react'
import Slider from './Slider'
// Импорты иконок соцсетей из src/img/icons
import instagramIcon from '../img/icons/instagram.svg'
import facebookIcon from '../img/icons/facebook.svg'
import xIcon from '../img/icons/x.svg'
import youtubeIcon from '../img/icons/youtube.svg'
import dropboxIcon from '../img/icons/dropbox.svg'
import websiteIcon from '../img/icons/website.svg'
import onlyfansIcon from '../img/icons/onlyfans.svg'

export default function ModelPage({ model, onBack, lang = 'ru' }) {
  if (!model) return null

  const [images, setImages] = useState([])
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ ...model })
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/models/${model.id}/images`)
        if (res.ok) {
          const list = await res.json()
          const base = import.meta.env.DEV ? 'http://localhost:3000' : ''
          const normalized = list.map(u => (u && u.startsWith('/') ? base + u : u))
          setImages(Array.from(new Set(normalized)))
        } else {
          setImages([])
        }
      } catch (e) {
        console.error('Failed to load images', e)
        setImages([])
      }
    }
    load()
  }, [model.id])

  useEffect(() => {
    setForm({ ...model })
  }, [model])

  // Используем form как источник отображаемых данных — после сохранения form содержит новые значения
  const displayModel = form || model

  const icons = { 
    instagram: instagramIcon, 
    facebook: facebookIcon, 
    x: xIcon, 
    youtube: youtubeIcon, 
    dropbox: dropboxIcon,
    website: websiteIcon,
    onlyfans: onlyfansIcon
  }

  const labels = {
    en: {
      edit: 'Edit', save: 'Save', cancel: 'Cancel', upload: 'Upload photos', back: '← Back to gallery', age: 'Age', height: 'Height', bodyType: 'Body type', measurements: 'Measurements', features: 'Features', style: 'Style', hobbies: 'Hobbies', faceStyle: 'Face style', bio: 'Bio', sexualPreferences: 'Sexual preferences', country: 'Country'
    },
    ru: {
      edit: 'Редактировать', save: 'Сохранить', cancel: 'Отменить', upload: 'Загрузить фото', back: '← Назад к галерее', age: 'Возраст', height: 'Рост', bodyType: 'Тип фигуры', measurements: 'Замеры (Г/Т/Б)', features: 'Особенности', style: 'Стиль', hobbies: 'Хобби', faceStyle: 'Черты лица', bio: 'Биография', sexualPreferences: 'Сексуальные предпочтения', country: 'Страна'
    }
  }

  async function saveModel() {
    try {
      const res = await fetch(`/api/models/${model.id}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('save failed')
      // Попробуем получить обновлённую модель из тела ответа и обновить локальную форму
      let data = null
      try { data = await res.json() } catch (e) { /* no json */ }
      const updated = data && (data.model || data) ? (data.model || data) : null
      if (updated && updated.id) {
        setForm({ ...updated })
      }
      setEditing(false)
    } catch (e) {
      console.error('Error saving model', e)
      alert(lang === 'ru' ? 'Ошибка при сохранении модели' : 'Error saving model')
    }
  }

  async function handleUpload(ev) {
    const files = ev.target.files
    if (!files || files.length === 0) return
    const fd = new FormData()
    for (const f of files) fd.append('photos', f)
    setUploading(true)
    try {
      const res = await fetch(`/api/models/${model.id}/upload`, { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok && data.files) {
        const base = import.meta.env.DEV ? 'http://localhost:3000' : ''
        const normalized = data.files.map(u => (u && u.startsWith('/') ? base + u : u))
        setImages(prev => Array.from(new Set([...prev, ...normalized])))
      } else {
        console.error('Upload failed', data)
        alert(lang === 'ru' ? 'Ошибка загрузки' : 'Upload error')
      }
    } catch (e) {
      console.error('Upload error', e)
      alert(lang === 'ru' ? 'Ошибка загрузки' : 'Upload error')
    } finally {
      setUploading(false)
      ev.target.value = null
    }
  }

  const getField = (key) => (lang === 'ru' ? (displayModel[key + 'RU'] || displayModel[key]) : displayModel[key])

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

  const flag = getCountryFlag(displayModel.country)

  return (
    <div className="premium-model-page">
      <button className="premium-back-button" onClick={onBack}>{labels[lang].back}</button>

      <div className="slider-container" style={{ marginTop: 12 }}>
        <Slider images={images} />
      </div>

      {/* Панель управления скрыта */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <button className="back-button" onClick={() => setEditing(v => !v)}>{editing ? labels[lang].cancel : labels[lang].edit}</button>
        <label style={{ alignSelf: 'center', cursor: 'pointer', background: '#667eea', color: 'white', padding: '8px 12px', borderRadius: 8 }}>
          {uploading ? (lang === 'ru' ? 'Загрузка...' : 'Uploading...') : labels[lang].upload}
          <input type="file" multiple style={{ display: 'none' }} onChange={handleUpload} />
        </label>
      </div>

      {editing ? (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['name', 'Name'], ['surname', 'Surname'], ['stageName', 'Stage name'], ['country', 'Country'], ['hairColor', 'Hair color'], ['skinColor', 'Skin color'], ['age', labels[lang].age], ['height', labels[lang].height], ['bodyType', labels[lang].bodyType], ['measurements', labels[lang].measurements], ['features', labels[lang].features], ['style', labels[lang].style], ['hobbies', labels[lang].hobbies], ['faceStyle', labels[lang].faceStyle],
              ['sexualPreferences', 'Sexual preferences'], ['sexualPreferencesRU', 'Sexual preferences (RU)']
            ].map(([key, label]) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontWeight: 'bold', marginBottom: 6 }}>{lang === 'ru' ? (model[key + 'RU'] ? label + ' (RU)' : label) : label}</label>
                <input value={form[key] ?? ''} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} />
              </div>
            ))}
          </div>

          {/* Редактирование ссылок соцсетей */}
          <div style={{ marginTop: 12 }}>
            <h4 style={{ margin: '6px 0' }}>{lang === 'ru' ? 'Социальные сети' : 'Social links'}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {['instagram', 'facebook', 'x', 'youtube', 'dropbox', 'website', 'onlyfans'].map(k => (
                <div key={k} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontWeight: 'bold', marginBottom: 6 }}>{k.charAt(0).toUpperCase() + k.slice(1)}</label>
                  <input value={form.social?.[k] ?? ''} onChange={e => setForm(f => ({ ...f, social: { ...(f.social || {}), [k]: e.target.value } }))} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <button className="back-button" onClick={saveModel}>{labels[lang].save}</button>
          </div>
        </div>
      ) : (
        <div className="premium-model-profile" style={{ marginTop: 20 }}>
          {/* Профильная карточка с градиентом */}
          <div className="profile-hero">
            <div className="profile-header">
              <div className="name-block">
                <h1 className="profile-name">
                  {flag} 
                  <span className="name-text">{displayModel.name} {displayModel.surname}</span>
                </h1>
                {getField('stageName') && (
                  <div className="profile-stage-name">{getField('stageName')}</div>
                )}
              </div>
              <div className="profile-stats">
                <div className="big-stat">
                  <div className="big-number">{displayModel.age}</div>
                  <div className="big-label">{lang === 'ru' ? 'лет' : 'years'}</div>
                </div>
                <div className="big-stat">
                  <div className="big-number">{displayModel.height}</div>
                  <div className="big-label">{lang === 'ru' ? 'см' : 'cm'}</div>
                </div>
                {displayModel.measurements && (
                  <div className="big-stat">
                    <div className="big-number">{displayModel.measurements}</div>
                    <div className="big-label">{lang === 'ru' ? 'параметры' : 'parameters'}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Характеристики */}
          <div className="characteristics-section">
            <h3 className="section-title">{lang === 'ru' ? 'Характеристики' : 'Characteristics'}</h3>
            <div className="characteristics-list">
              {getField('country') && (
                <div className="char-item">
                  <span className="char-label">{labels[lang].country}</span>
                  <span className="char-value">{getField('country')}</span>
                </div>
              )}
              {getField('hairColor') && (
                <div className="char-item">
                  <span className="char-label">{lang === 'ru' ? 'Цвет волос' : 'Hair color'}</span>
                  <span className="char-value">{getField('hairColor')}</span>
                </div>
              )}
              {getField('skinColor') && (
                <div className="char-item">
                  <span className="char-label">{lang === 'ru' ? 'Цвет кожи' : 'Skin color'}</span>
                  <span className="char-value">{getField('skinColor')}</span>
                </div>
              )}
              {getField('bodyType') && (
                <div className="char-item">
                  <span className="char-label">{labels[lang].bodyType}</span>
                  <span className="char-value">{getField('bodyType')}</span>
                </div>
              )}
              {getField('features') && (
                <div className="char-item">
                  <span className="char-label">{labels[lang].features}</span>
                  <span className="char-value">{getField('features')}</span>
                </div>
              )}
              {getField('faceStyle') && (
                <div className="char-item">
                  <span className="char-label">{labels[lang].faceStyle}</span>
                  <span className="char-value">{getField('faceStyle')}</span>
                </div>
              )}
            </div>
          </div>

          {/* Интересы и стиль */}
          <div className="interests-section">
            <h3 className="section-title">{lang === 'ru' ? 'Интересы и стиль' : 'Interests & Style'}</h3>
            <div className="interests-grid">
              {getField('style') && (
                <div className="interest-item style-item">
                  <div className="interest-icon">🎨</div>
                  <div className="interest-content">
                    <div className="interest-label">{labels[lang].style}</div>
                    <div className="interest-value">{getField('style')}</div>
                  </div>
                </div>
              )}
              {getField('hobbies') && (
                <div className="interest-item hobbies-item">
                  <div className="interest-icon">🎭</div>
                  <div className="interest-content">
                    <div className="interest-label">{labels[lang].hobbies}</div>
                    <div className="interest-value">{getField('hobbies')}</div>
                  </div>
                </div>
              )}
              {getField('sexualPreferences') && (
                <div className="interest-item preferences-item">
                  <div className="interest-icon">💖</div>
                  <div className="interest-content">
                    <div className="interest-label">{labels[lang].sexualPreferences}</div>
                    <div className="interest-value">{getField('sexualPreferences')}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Биография */}
          <div className="bio-section">
            <h3 className="section-title">{lang === 'ru' ? 'О себе' : 'About'}</h3>
            <div className="bio-content">
              <p className="bio-text-modern">
                {lang === 'ru' ? (displayModel.bioRU || displayModel.bioEN) : (displayModel.bioEN || displayModel.bioRU)}
              </p>
              
              {/* Соцсети в современном стиле */}
              {displayModel.social && (
                <div className="social-section-modern">
                  <h4 className="social-subtitle">{lang === 'ru' ? 'Найти в соцсетях' : 'Find me on'}</h4>
                  <div className="social-grid-modern">
                    {['instagram', 'facebook', 'x', 'youtube', 'dropbox', 'website', 'onlyfans'].map((key) => {
                      const url = displayModel.social[key]
                      if (!url) return null
                      return (
                        <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="social-button-modern">
                          <img src={icons[key]} alt={key} />
                          <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
