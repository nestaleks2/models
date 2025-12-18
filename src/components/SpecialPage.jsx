import React, { useState, useEffect } from 'react'
import { getAshleyMedia, getAthenaMedia } from '../utils/mediaLoader'
import './SpecialPage.css'

export default function SpecialPage({ lang = 'ru', onBack }) {
  const [currentSlide, setCurrentSlide] = useState({})
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxContent, setLightboxContent] = useState(null)
  const [lightboxBlockIndex, setLightboxBlockIndex] = useState(null)
  const [lightboxItemIndex, setLightboxItemIndex] = useState(null)
  const [mediaBlocks, setMediaBlocks] = useState([])
  const [currentVideoRef, setCurrentVideoRef] = useState(null)

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const ashleyMedia = await getAshleyMedia()
        const athenaMedia = await getAthenaMedia()

        setMediaBlocks([
          {
            title: "Ashley",
            items: ashleyMedia
          },
          {
            title: "Athena", 
            items: athenaMedia
          }
        ])
      } catch (error) {
        console.error('Ошибка загрузки медиа:', error)
        setMediaBlocks([
          { title: "Ashley", items: [] },
          { title: "Athena", items: [] }
        ])
      }
    }

    loadMedia()
  }, [])

  const nextSlide = (blockIndex) => {
    const block = mediaBlocks[blockIndex]
    if (!block || !block.items.length) return
    setCurrentSlide(prev => ({
      ...prev,
      [blockIndex]: ((prev[blockIndex] || 0) + 1) % block.items.length
    }))
  }

  const prevSlide = (blockIndex) => {
    const block = mediaBlocks[blockIndex]
    if (!block || !block.items.length) return
    setCurrentSlide(prev => ({
      ...prev,
      [blockIndex]: ((prev[blockIndex] || 0) - 1 + block.items.length) % block.items.length
    }))
  }

  const openLightbox = (item, blockIndex, itemIndex) => {
    setLightboxContent(item)
    setLightboxBlockIndex(blockIndex)
    setLightboxItemIndex(itemIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    stopCurrentVideo() // Останавливаем видео при закрытии
    setLightboxOpen(false)
    setLightboxContent(null)
    setLightboxBlockIndex(null)
    setLightboxItemIndex(null)
    setCurrentVideoRef(null)
  }

  const stopCurrentVideo = () => {
    if (currentVideoRef) {
      currentVideoRef.pause()
      currentVideoRef.currentTime = 0
    }
  }

  const nextLightboxSlide = () => {
    if (lightboxBlockIndex === null || !mediaBlocks[lightboxBlockIndex]) return
    
    stopCurrentVideo() // Останавливаем текущее видео
    
    const block = mediaBlocks[lightboxBlockIndex]
    const nextIndex = (lightboxItemIndex + 1) % block.items.length
    const nextItem = block.items[nextIndex]
    
    console.log('Next slide:', { nextIndex, nextItem, blockIndex: lightboxBlockIndex })
    
    setLightboxItemIndex(nextIndex)
    setLightboxContent({ ...nextItem })
    setCurrentSlide(prev => ({ ...prev, [lightboxBlockIndex]: nextIndex }))
  }

  const prevLightboxSlide = () => {
    if (lightboxBlockIndex === null || !mediaBlocks[lightboxBlockIndex]) return
    
    stopCurrentVideo() // Останавливаем текущее видео
    
    const block = mediaBlocks[lightboxBlockIndex]
    const prevIndex = (lightboxItemIndex - 1 + block.items.length) % block.items.length
    const prevItem = block.items[prevIndex]
    
    console.log('Prev slide:', { prevIndex, prevItem, blockIndex: lightboxBlockIndex })
    
    setLightboxItemIndex(prevIndex)
    setLightboxContent({ ...prevItem })
    setCurrentSlide(prev => ({ ...prev, [lightboxBlockIndex]: prevIndex }))
  }

  const t = {
    ru: {
      title: 'Специальная страница',
      backButton: 'Назад',
      reportTitle: 'Отчет о проделанной работе',
      reportContent: `
        Данный отчет содержит подробную информацию о выполненных задачах и достигнутых результатах.
        
        В ходе работы были реализованы следующие ключевые функции:
        • Система управления контентом
        • Интерактивные элементы интерфейса
        • Оптимизация производительности
        • Адаптивный дизайн для различных устройств
        
        Особое внимание было уделено пользовательскому опыту и современным стандартам веб-разработки.
        Все компоненты прошли тщательное тестирование и соответствуют требованиям безопасности.
      `,
      conclusion: 'Все поставленные цели были успешно достигнуты в установленные сроки.'
    },
    en: {
      title: 'Special Page',
      backButton: 'Back',
      reportTitle: 'Work Progress Report',
      reportContent: `
        This report contains detailed information about completed tasks and achieved results.
        
        The following key functions were implemented during the work:
        • Content management system
        • Interactive interface elements
        • Performance optimization
        • Responsive design for various devices
        
        Special attention was paid to user experience and modern web development standards.
        All components have been thoroughly tested and meet security requirements.
      `,
      conclusion: 'All set goals were successfully achieved within the established timeframe.'
    }
  }

  return (
    <div className="special-page-container">
      <div className="special-header">
        <button onClick={onBack} className="back-button">
          ← {t[lang].backButton}
        </button>
        <h1 className="special-title">{t[lang].title}</h1>
      </div>

      <div className="special-content">
        <section className="report-section">
          <h2>{t[lang].reportTitle}</h2>
          <div className="report-text">
            {t[lang].reportContent.split('\n').map((paragraph, index) => 
              paragraph.trim() && (
                <p key={index}>{paragraph.trim()}</p>
              )
            )}
          </div>
        </section>

        {mediaBlocks.map((block, blockIndex) => (
          <section key={blockIndex} className="special-media-section">
            <h3>{block.title}</h3>
            {block.items.length > 0 ? (
              <div className="special-fullscreen-slider">
                <button 
                  className="special-nav-btn prev-btn"
                  onClick={() => prevSlide(blockIndex)}
                  disabled={block.items.length <= 1}
                >
                  ‹
                </button>
                
                <div className="special-viewer">
                  <div className="special-page-counter">
                    {(currentSlide[blockIndex] || 0) + 1} / {block.items.length}
                  </div>
                  {block.items.map((item, itemIndex) => {
                    const isActive = (currentSlide[blockIndex] || 0) === itemIndex
                    return (
                      <div 
                        key={itemIndex}
                        className={`special-slide ${isActive ? 'active' : ''}`}
                        onClick={() => openLightbox(item, blockIndex, itemIndex)}
                      >
                        {item.type === 'image' ? (
                          <img src={item.src} alt={item.alt} className="special-page-media" />
                        ) : (
                          <video 
                            className="special-page-media"
                            controls
                            loop
                            playsInline
                            poster={item.poster}
                          >
                            <source src={item.src} type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                          </video>
                        )}
                      </div>
                    )
                  })}
                </div>

                <button 
                  className="special-nav-btn next-btn"
                  onClick={() => nextSlide(blockIndex)}
                  disabled={block.items.length <= 1}
                >
                  ›
                </button>
              </div>
            ) : (
              <div className="empty-media">
                <p>Нет доступного контента</p>
              </div>
            )}
          </section>
        ))}

        <section className="conclusion-section">
          <p className="conclusion-text">{t[lang].conclusion}</p>
        </section>
      </div>

      {lightboxOpen && lightboxContent && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            
            {lightboxBlockIndex !== null && mediaBlocks[lightboxBlockIndex] && mediaBlocks[lightboxBlockIndex].items.length > 1 && (
              <>
                <button className="lightbox-nav-btn lightbox-prev" onClick={prevLightboxSlide}>
                  ‹
                </button>
                <button className="lightbox-nav-btn lightbox-next" onClick={nextLightboxSlide}>
                  ›
                </button>
              </>
            )}
            
            <div className="lightbox-media-container">
              {lightboxContent.type === 'image' ? (
                <img 
                  key={`${lightboxBlockIndex}-${lightboxItemIndex}`}
                  src={lightboxContent.src} 
                  alt={lightboxContent.alt} 
                />
              ) : (
                <video 
                  key={`${lightboxBlockIndex}-${lightboxItemIndex}`}
                  ref={setCurrentVideoRef}
                  controls 
                  autoPlay 
                  loop 
                  playsInline
                >
                  <source src={lightboxContent.src} type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              )}
            </div>
            
            {lightboxBlockIndex !== null && mediaBlocks[lightboxBlockIndex] && mediaBlocks[lightboxBlockIndex].items.length > 1 && (
              <div className="lightbox-counter">
                {lightboxItemIndex + 1} / {mediaBlocks[lightboxBlockIndex].items.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}