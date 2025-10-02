import React, { useState, useEffect } from 'react'
import models from './data/models'
import Gallery from './components/Gallery'
import ModelPage from './components/ModelPage'
import './App.css'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [lang, setLang] = useState('ru')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки для плавного появления
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleSelect = (id) => {
    setSelectedId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setSelectedId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const t = {
    en: { 
      title: 'Models'
    },
    ru: { 
      title: 'Модели'
    }
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h1 className="loading-title">{t[lang].title}</h1>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="brand">
            <h1 className="brand-title">{t[lang].title}</h1>
          </div>

          <div className="controls">
            <div className="lang-switcher">
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
                aria-label="Переключить на русский"
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="main-content">
          {!selectedId && (
            <Gallery models={models} onSelect={handleSelect} lang={lang} />
          )}

          {selectedId && (
            <ModelPage 
              model={models.find(m => m.id === selectedId)} 
              onBack={handleBack} 
              lang={lang} 
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025
          </p>
        </div>
      </footer>
    </div>
  )
}