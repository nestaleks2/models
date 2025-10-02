import React, { useEffect, useState } from 'react'

export default function Gallery({ models, onSelect, lang = 'ru' }) {
  const [thumbs, setThumbs] = useState({})

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
    en: { age: 'Age', height: 'Height', country: 'Nationality', sexualPreferences: 'Sexual preferences' },
    ru: { age: 'Возраст', height: 'Рост', country: 'Национальность', sexualPreferences: 'Сексуальные предпочтения' }
  }

  return (
    <div id="gallery" className="gallery">
      {models.map(model => {
        const thumb = thumbs[model.id]
        const stage = lang === 'ru' ? (model.stageNameRU || model.stageName) : model.stageName
        const country = lang === 'ru' ? (model.countryRU || model.country) : model.country
        const sexualPref = lang === 'ru' ? (model.sexualPreferencesRU || model.sexualPreferences) : model.sexualPreferences

        return (
          <div className="model-card" key={model.id} onClick={() => onSelect(model.id)}>
            <div className="model-image">
              {thumb ? (
                <img src={thumb} alt={`${model.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', background: '#f6f6f6' }} />
              ) : (
                <div className="photo-placeholder">
                  <div>{lang === 'ru' ? 'Фото' : 'Photo'} {model.name}</div>
                </div>
              )}
            </div>

            <div className="model-info">
              <div className="model-name">{model.name} {model.surname}</div>
              <div className="model-stage-name">{stage}</div>
              <div className="model-details">
                <div><strong>{labels[lang].age}:</strong> {model.age}</div>
                <div><strong>{labels[lang].height}:</strong> {model.height} см</div>
                <div><strong>{labels[lang].country}:</strong> {country}</div>
                <div><strong>{labels[lang].sexualPreferences}:</strong> {sexualPref}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
