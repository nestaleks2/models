import React, { useState } from 'react'
import models from './data/models'
import Gallery from './components/Gallery'
import ModelPage from './components/ModelPage'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [lang, setLang] = useState('ru')

  const handleSelect = (id) => setSelectedId(id)
  const handleBack = () => setSelectedId(null)

  const t = {
    en: { title: 'Models', subtitle: 'Models gallery' },
    ru: { title: 'Модели', subtitle: 'Галерея моделей' }
  }

  // стили для переключателя языка
  const toggleWrapStyle = {
    display: 'inline-flex',
    background: '#eef2ff',
    padding: 4,
    borderRadius: 9999,
    gap: 4,
    boxShadow: '0 2px 6px rgba(16,24,40,0.06)'
  }

  const btnStyle = {
    border: 'none',
    background: 'transparent',
    padding: '6px 12px',
    borderRadius: 9999,
    cursor: 'pointer',
    color: '#374151',
    fontWeight: 600,
    transition: 'all 180ms ease'
  }

  const activeStyle = {
    ...btnStyle,
    background: 'linear-gradient(90deg,#6366f1,#8b5cf6)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(99,102,241,0.18)'
  }

  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>{t[lang].title}</h1>
          <div className="subtitle">{t[lang].subtitle}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={toggleWrapStyle} role="tablist" aria-label="Language switcher">
            <button
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              style={lang === 'en' ? activeStyle : btnStyle}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ru')}
              aria-pressed={lang === 'ru'}
              style={lang === 'ru' ? activeStyle : btnStyle}
            >
              RU
            </button>
          </div>
        </div>
      </header>

      {!selectedId && (
        <Gallery models={models} onSelect={handleSelect} lang={lang} />
      )}

      {selectedId && (
        <ModelPage model={models.find(m => m.id === selectedId)} onBack={handleBack} lang={lang} />
      )}
    </div>
  )
}
