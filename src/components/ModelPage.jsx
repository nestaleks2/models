import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import { getAvailableImages, getMainImageForModel } from '../utils/images'
// Импорты иконок соцсетей
import instagramIcon from '../img/icons/instagram.svg'
import facebookIcon from '../img/icons/facebook.svg'
import xIcon from '../img/icons/x.svg'
import youtubeIcon from '../img/icons/youtube.svg'
import dropboxIcon from '../img/icons/dropbox.svg'
import websiteIcon from '../img/icons/website.svg'
import onlyfansIcon from '../img/icons/onlyfans.svg'
import linkmeIcon from '../img/icons/linkme.png'

export default function ModelPage({ model, onBack, lang = 'ru' }) {
  if (!model) return null

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [designMode, setDesignMode] = useState('classic') // 'classic' или 'models-de'
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true)
        // Получаем только реально существующие изображения
        let availableImages = await getAvailableImages(model.id)
        
        // Fallback: если не найдено ни одного изображения, используем основное
        if (availableImages.length === 0) {
          const mainImage = getMainImageForModel(model.id)
          availableImages = [mainImage]
        }
        
        setImages(availableImages)
      } catch (e) {
        console.error('Failed to load images', e)
        // В случае ошибки используем основное изображение
        const mainImage = getMainImageForModel(model.id)
        setImages([mainImage])
      } finally {
        setLoading(false)
      }
    }
    loadImages()
  }, [model.id])

  const labels = {
    en: {
      back: 'Back to Gallery',
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
      back: 'Назад к галерее',
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

  // Объект с иконками социальных сетей
  const socialIcons = {
    instagram: instagramIcon,
    facebook: facebookIcon,
    x: xIcon,
    youtube: youtubeIcon,
    dropbox: dropboxIcon,
    website: websiteIcon,
    onlyfans: onlyfansIcon,
    linkme: linkmeIcon
  }

  // Отладка для проверки загрузки иконки LinkMe
  console.log('LinkMe icon:', linkmeIcon)

  const getField = (key) => (lang === 'ru' ? (model[key + 'RU'] || model[key]) : model[key])
  const flag = getCountryFlag(model.country)

  // Функции для lightbox
  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
    // Предотвращаем скролл body при открытом lightbox
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage('')
    // Восстанавливаем скролл body
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    const currentIndex = images.indexOf(lightboxImage)
    const nextIndex = (currentIndex + 1) % images.length
    setLightboxImage(images[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = images.indexOf(lightboxImage)
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setLightboxImage(images[prevIndex])
  }

  // Обработка клавиш для lightbox
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return
      
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [lightboxOpen, lightboxImage, images])

  // Cleanup при размонтировании компонента
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // Отслеживание изменения размера окна
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (loading) {
    return (
      <div className="model-page-loading">
        <div className="loading-spinner"></div>
        <p>{labels[lang].loading}</p>
      </div>
    )
  }

  const renderClassicDesign = () => {
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

  const renderModelsDeDesign = () => {
    return (
      <div className="model-page-modern">
        <div className="modern-header">
          <button className="back-button-modern" onClick={onBack}>
            ← {labels[lang].back}
          </button>
        </div>

        {/* Header section - always on top */}
        <div className="model-header-section">
          <div className="model-name-section">
            {/* Фото модели для мобильной версии (<768px) */}
            <div className="mobile-model-photo">
              {images.length > 0 && (
                <img 
                  src={images[0]} 
                  alt={`${model.name} ${model.surname}`}
                  className="mobile-photo"
                />
              )}
            </div>
            <div className="name-content">
              <h1 className="modern-name">
                {model.name}{getField('stageName') && ` "${getField('stageName')}"`} {model.surname}
                {flag && <span className="flag-wrapper">{flag}</span>}
              </h1>
            </div>
          </div>
        </div>

        <div className="modern-layout">
          {/* Left sidebar with model info */}
          <div className="modern-sidebar">
            <div className="model-info-card">

              <div className="model-stats-grid">
                <div className="stat-row">
                  <span className="stat-label">{labels[lang].age}</span>
                  <span className="stat-value">{model.age}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">{labels[lang].height}</span>
                  <span className="stat-value">{model.height} cm</span>
                </div>
                {model.measurements && (
                  <div className="stat-row">
                    <span className="stat-label">{labels[lang].measurements}</span>
                    <span className="stat-value">{model.measurements}</span>
                  </div>
                )}
                {getField('bodyType') && (
                  <div className="stat-row">
                    <span className="stat-label">{labels[lang].bodyType}</span>
                    <span className="stat-value">{getField('bodyType')}</span>
                  </div>
                )}
                {getField('hairColor') && (
                  <div className="stat-row">
                    <span className="stat-label">{labels[lang].hairColor}</span>
                    <span className="stat-value">{getField('hairColor')}</span>
                  </div>
                )}
                {getField('skinColor') && (
                  <div className="stat-row">
                    <span className="stat-label">{labels[lang].skinColor}</span>
                    <span className="stat-value">{getField('skinColor')}</span>
                  </div>
                )}
                {getField('country') && (
                  <div className="stat-row">
                    <span className="stat-label">{labels[lang].country}</span>
                    <span className="stat-value">{getField('country')}</span>
                  </div>
                )}
              </div>

              {/* Additional info */}
              {(getField('style') || getField('hobbies') || getField('features')) && (
                <div className="additional-info">
                  {getField('style') && (
                    <div className="info-block">
                      <h4 className="info-title">{labels[lang].style}</h4>
                      <p className="info-text">{getField('style')}</p>
                    </div>
                  )}
                  {getField('hobbies') && (
                    <div className="info-block">
                      <h4 className="info-title">{labels[lang].hobbies}</h4>
                      <p className="info-text">{getField('hobbies')}</p>
                    </div>
                  )}
                  {getField('features') && (
                    <div className="info-block">
                      <h4 className="info-title">{labels[lang].features}</h4>
                      <p className="info-text">{getField('features')}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Biography */}
              {(model.bioRU || model.bioEN) && (
                <div className="bio-section">
                  <h4 className="bio-title">{labels[lang].about}</h4>
                  <p className="bio-text-modern">
                    {lang === 'ru' ? (model.bioRU || model.bioEN) : (model.bioEN || model.bioRU)}
                  </p>
                </div>
              )}

              {/* Social Media */}
              {model.social && (
                <div className="social-section-modern">
                  <h4 className="social-title-modern">{labels[lang].socialMedia}</h4>
                  <div className="social-links-modern">
                    {Object.entries(model.social).map(([platform, url]) => {
                      if (!url) return null
                      const iconSrc = socialIcons[platform]
                      return (
                        <a 
                          key={platform} 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="social-link-modern"
                          title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                        >
                          {iconSrc && (
                            <img 
                              src={iconSrc} 
                              alt={platform} 
                              className="social-icon-modern"
                            />
                          )}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side with photos - Masonry Grid */}
          <div className="modern-gallery">
            {images.length > 0 ? (
              <div 
                className="masonry-grid"
                style={{
                  columns: Math.min(images.length, windowWidth <= 480 ? 1 : 2),
                  columnGap: windowWidth <= 480 ? '0.5rem' : '1rem'
                }}
              >
                {images.map((img, index) => (
                  <div 
                    key={index}
                    className="masonry-item"
                    onClick={() => openLightbox(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${model.name} ${index + 1}`}
                      className="masonry-image"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none'
                      }}
                    />
                    <div className="image-overlay">
                      <div className="zoom-icon">🔍</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="photo-placeholder">
                <span className="placeholder-icon">📷</span>
                <span className="placeholder-text">No photos available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Используем только современный дизайн */}
      {renderModelsDeDesign()}
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container">
            <button 
              className="lightbox-close" 
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Close lightbox"
            >
              ×
            </button>
            
            {images.length > 1 && (
              <>
                <button 
                  className="lightbox-nav lightbox-prev" 
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button 
                  className="lightbox-nav lightbox-next" 
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
            
            <img 
              src={lightboxImage} 
              alt={`${model.name} full size`}
              className="lightbox-image"
              loading="eager"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                console.warn('Failed to load lightbox image:', lightboxImage)
                e.target.style.display = 'none'
              }}
            />
            
            <div 
              className="lightbox-counter"
              onClick={(e) => e.stopPropagation()}
            >
              {images.indexOf(lightboxImage) + 1} / {images.length}
            </div>
            
            {/* Предзагрузка соседних изображений */}
            {images.length > 1 && (
              <>
                <link 
                  rel="preload" 
                  as="image" 
                  href={images[(images.indexOf(lightboxImage) + 1) % images.length]} 
                />
                <link 
                  rel="preload" 
                  as="image" 
                  href={images[(images.indexOf(lightboxImage) - 1 + images.length) % images.length]} 
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}