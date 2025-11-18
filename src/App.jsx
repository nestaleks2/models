import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import models from './data/models'
import Gallery from './components/Gallery'
import ModelPage from './components/ModelPage'
import EventsPage from './components/EventsPage'
import './App.css'

function ModelPageWrapper({ lang }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const model = models.find(m => m.id === parseInt(id))

  const handleBack = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!model) {
    return (
      <div className="error-page">
        <h2>Модель не найдена</h2>
        <button onClick={handleBack} className="back-button">
          Вернуться к галерее
        </button>
      </div>
    )
  }

  return <ModelPage model={model} onBack={handleBack} lang={lang} />
}

function GalleryWrapper({ lang }) {
  const navigate = useNavigate()

  const handleSelect = (id) => {
    navigate(`/model/${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <Gallery models={models} onSelect={handleSelect} lang={lang} />
}

function EventsPageWrapper({ lang }) {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <EventsPage lang={lang} onBack={handleBack} />
}

export default function App() {
  const [lang, setLang] = useState('ru')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки для плавного появления
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

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
    <Router basename="/models">
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
            <Routes>
              <Route path="/" element={<GalleryWrapper lang={lang} />} />
              <Route path="/model/:id" element={<ModelPageWrapper lang={lang} />} />
              <Route path="/events" element={<EventsPageWrapper lang={lang} />} />
            </Routes>
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
    </Router>
  )
}