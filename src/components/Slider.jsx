import React, { useEffect, useState, useRef, useCallback } from 'react'

export default function Slider({ images = [] }) {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const count = Math.max(images.length, 1)
  
  const timerRef = useRef(null)
  const touchStartRef = useRef(null)
  const touchEndRef = useRef(null)

  // Функция для следующего слайда
  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex(prev => (prev + 1) % count)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [count, isTransitioning])

  // Функция для предыдущего слайда
  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex(prev => (prev - 1 + count) % count)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [count, isTransitioning])

  // Функция для перехода к конкретному слайду
  const goToSlide = useCallback((slideIndex) => {
    if (isTransitioning || slideIndex === index) return
    setIsTransitioning(true)
    setIndex(slideIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [index, isTransitioning])

  // Автослайд
  useEffect(() => {
    if (!isPlaying || count <= 1) return

    timerRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [nextSlide, isPlaying, count])

  // Сброс индекса при изменении изображений
  useEffect(() => {
    setIndex(0)
    setIsTransitioning(false)
  }, [images])

  // Обработка касаний для мобильных устройств
  const handleTouchStart = (e) => {
    touchStartRef.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return
    
    const distance = touchStartRef.current - touchEndRef.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    touchStartRef.current = null
    touchEndRef.current = null
  }

  // Обработка клавиш
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextSlide()
          break
        case ' ':
          e.preventDefault()
          setIsPlaying(prev => !prev)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Пауза автослайда при наведении
  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (isPlaying && count > 1) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }
  }

  if (images.length === 0) {
    return (
      <div className="slider-container">
        <div className="slider-placeholder">
          <div className="placeholder-icon">📷</div>
          <p className="placeholder-text">Нет изображений</p>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-viewport">
        <div 
          className="slider-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="slider-slide">
              <img 
                src={src} 
                alt={`Slide ${idx + 1}`}
                className="slider-image"
                loading={idx === 0 ? 'eager' : 'lazy'}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling?.style.setProperty('display', 'flex')
                }}
              />
              <div className="image-error-placeholder" style={{display: 'none'}}>
                <div className="error-icon">⚠️</div>
                <p>Изображение не загрузилось</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигационные точки */}
      {images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === index ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Перейти к слайду ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Кнопки навигации */}
      {images.length > 1 && (
        <>
          <button 
            className="slider-nav slider-nav-prev"
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Предыдущий слайд"
          >
            ❮
          </button>
          <button 
            className="slider-nav slider-nav-next"
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Следующий слайд"
          >
            ❯
          </button>
        </>
      )}

      {/* Элементы управления */}
      {images.length > 1 && (
        <div className="slider-controls">
          <button
            className={`control-btn ${isPlaying ? 'playing' : 'paused'}`}
            onClick={() => setIsPlaying(prev => !prev)}
            aria-label={isPlaying ? 'Пауза' : 'Воспроизведение'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <div className="slide-counter">
            {index + 1} / {images.length}
          </div>
        </div>
      )}

      {/* Индикатор загрузки */}
      {isPlaying && images.length > 1 && (
        <div className="slider-progress">
          <div 
            className="progress-bar"
            style={{
              animation: 'slideProgress 5s linear infinite',
              animationPlayState: isTransitioning ? 'paused' : 'running'
            }}
          />
        </div>
      )}
    </div>
  )
}