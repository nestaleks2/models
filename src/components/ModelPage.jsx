import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import { getImagesForModel } from '../utils/images'
// Импорты иконок соцсетей
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true)
        // Получаем изображения для модели (теперь функция возвращает только существующие)
        const availableImages = getImagesForModel(model.id)
        setImages(availableImages)
      } catch (e) {
        console.error('Failed to load images', e)
        setImages([])
      } finally {
        setLoading(false)
      }
    }
    loadImages()
  }, [model.id])

  const labels = {
    en: {
      back: '← Back to Gallery',
      age: 'Age',
      height: 'Height',
      bodyType: 'Body Type',
      measurements: 'Measurements',
      features: 'Features',
      style: 'Style',
      hobbies: 'Hobbies',
      faceStyle: 'Face Style',
      bio: 'Biography',
      sexualPreferences: 'Sexual Preferences',
      country: 'Country',
      hairColor: 'Hair Color',
      skinColor: 'Skin Color',
      characteristics: 'Characteristics',
      interests: 'Interests & Style',
      about: 'About',
      socialMedia: 'Find me on',
      loading: 'Loading...'
    },
    ru: {
      back: '← Назад к галерее',
      age: 'Возраст',
      height: 'Рост',
      bodyType: 'Тип фигуры',
      measurements: 'Параметры',
      features: 'Особенности',
      style: 'Стиль',
      hobbies: 'Хобби',
      faceStyle: 'Черты лица',
      bio: 'Биография',
      sexualPreferences: 'Сексуальные предпочтения',
      country: 'Страна',
      hairColor: 'Цвет волос',
      skinColor: 'Цвет кожи',
      characteristics: 'Характеристики',
      interests: 'Интересы и стиль',
      about: 'О себе',
      socialMedia: 'Найти в соцсетях',
      loading: 'Загрузка...'
    }
  }

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
      const basePath = import.meta.env.BASE_URL || '/models/'
      return (
        <img 
          src={`${basePath}img/icons/country/${flagFile}`} 
          alt={`${country} flag`}
          className="country-flag"
          loading="lazy"
        />
      )
    }
    return <span className="default-flag">🏳️</span>
  }

  // Объект с иконками социальных сетей
  const socialIcons = {
    instagram: instagramIcon,
    facebook: facebookIcon,
    x: xIcon,
    youtube: youtubeIcon,
    dropbox: dropboxIcon,
    website: websiteIcon,
    onlyfans: onlyfansIcon
  }

  const getField = (key) => (lang === 'ru' ? (model[key + 'RU'] || model[key]) : model[key])
  const flag = getCountryFlag(model.country)

  if (loading) {
    return (
      <div className="model-page-loading">
        <div className="loading-spinner"></div>
        <p>{labels[lang].loading}</p>
      </div>
    )
  }

  return (
    <div className="model-page">
      <button className="back-button" onClick={onBack}>
        {labels[lang].back}
      </button>

      <div className="model-page-content">
        {/* Hero section with slider */}
        <div className="model-hero">
          <div className="hero-slider">
            <Slider images={images} />
          </div>
          
          <div className="hero-info">
            <div className="hero-header">
              <div className="hero-name-section">
                <h1 className="hero-name">
                  {flag}
                  <span className="name-text">{model.name} {model.surname}</span>
                </h1>
                {getField('stageName') && (
                  <div className="hero-stage-name">{getField('stageName')}</div>
                )}
              </div>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">{model.age}</div>
                  <div className="stat-label">{lang === 'ru' ? 'лет' : 'years'}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{model.height}</div>
                  <div className="stat-label">{lang === 'ru' ? 'см' : 'cm'}</div>
                </div>
                {model.measurements && (
                  <div className="stat-item">
                    <div className="stat-number">{model.measurements}</div>
                    <div className="stat-label">{labels[lang].measurements}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="model-content">
          {/* Characteristics */}
          <div className="content-section">
            <h3 className="section-title">{labels[lang].characteristics}</h3>
            <div className="characteristics-grid">
              {getField('country') && (
                <div className="char-item">
                  <span className="char-icon">🌍</span>
                  <div className="char-content">
                    <span className="char-label">{labels[lang].country}</span>
                    <span className="char-value">{getField('country')}</span>
                  </div>
                </div>
              )}
              {getField('hairColor') && (
                <div className="char-item">
                  <span className="char-icon">💇‍♀️</span>
                  <div className="char-content">
                    <span className="char-label">{labels[lang].hairColor}</span>
                    <span className="char-value">{getField('hairColor')}</span>
                  </div>
                </div>
              )}
              {getField('skinColor') && (
                <div className="char-item">
                  <span className="char-icon">✨</span>
                  <div className="char-content">
                    <span className="char-label">{labels[lang].skinColor}</span>
                    <span className="char-value">{getField('skinColor')}</span>
                  </div>
                </div>
              )}
              {getField('bodyType') && (
                <div className="char-item">
                  <span className="char-icon">👤</span>
                  <div className="char-content">
                    <span className="char-label">{labels[lang].bodyType}</span>
                    <span className="char-value">{getField('bodyType')}</span>
                  </div>
                </div>
              )}
              {getField('features') && (
                <div className="char-item">
                  <span className="char-icon">⭐</span>
                  <div className="char-content">
                    <span className="char-label">{labels[lang].features}</span>
                    <span className="char-value">{getField('features')}</span>
                  </div>
                </div>
              )}
              {getField('faceStyle') && (
                <div className="char-item">
                  <span className="char-icon">😊</span>
                  <div className="char-content">
                    <span className="char-label">{labels[lang].faceStyle}</span>
                    <span className="char-value">{getField('faceStyle')}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interests & Style */}
          <div className="content-section">
            <h3 className="section-title">{labels[lang].interests}</h3>
            <div className="interests-grid">
              {getField('style') && (
                <div className="interest-card">
                  <div className="interest-icon">🎨</div>
                  <div className="interest-content">
                    <div className="interest-label">{labels[lang].style}</div>
                    <div className="interest-value">{getField('style')}</div>
                  </div>
                </div>
              )}
              {getField('hobbies') && (
                <div className="interest-card">
                  <div className="interest-icon">🎭</div>
                  <div className="interest-content">
                    <div className="interest-label">{labels[lang].hobbies}</div>
                    <div className="interest-value">{getField('hobbies')}</div>
                  </div>
                </div>
              )}
              {getField('sexualPreferences') && (
                <div className="interest-card">
                  <div className="interest-icon">💖</div>
                  <div className="interest-content">
                    <div className="interest-label">{labels[lang].sexualPreferences}</div>
                    <div className="interest-value">{getField('sexualPreferences')}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Biography */}
          <div className="content-section">
            <h3 className="section-title">{labels[lang].about}</h3>
            <div className="bio-content">
              <p className="bio-text">
                {lang === 'ru' ? (model.bioRU || model.bioEN) : (model.bioEN || model.bioRU)}
              </p>
              
              {/* Social Media */}
              {model.social && (
                <div className="social-section">
                  <h4 className="social-title">{labels[lang].socialMedia}</h4>
                  <div className="social-links">
                    {Object.entries(model.social).map(([platform, url]) => {
                      if (!url) return null
                      const iconSrc = socialIcons[platform]
                      return (
                        <a 
                          key={platform} 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="social-link"
                          title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                        >
                          {iconSrc && (
                            <img 
                              src={iconSrc} 
                              alt={platform} 
                              className="social-icon"
                            />
                          )}
                          <span className="social-label">
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}