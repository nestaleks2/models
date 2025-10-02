import React, { useEffect, useState, useRef } from 'react'

export default function Slider({ images = [] }) {
  const [index, setIndex] = useState(0)
  const count = Math.max(images.length, 1)
  const timerRef = useRef(null)

  useEffect(() => {
    // Автослайд
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % count)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [count])

  useEffect(() => {
    // Если images меняются, сбросим индекс
    setIndex(0)
  }, [images])

  const goTo = (i) => {
    clearInterval(timerRef.current)
    setIndex(i)
  }

  const prev = () => {
    clearInterval(timerRef.current)
    setIndex(prev => (prev - 1 + count) % count)
  }

  const next = () => {
    clearInterval(timerRef.current)
    setIndex(prev => (prev + 1) % count)
  }

  // inline-стили для адаптивного слайдера
  const sliderStyle = {
    width: '100%',
    transform: `translateX(-${index * 100}%)`,
    transition: 'transform 0.5s ease',
    display: 'flex',
    height: '100%'
  }

  const slideStyle = {
    minWidth: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className="slider" style={sliderStyle}>
        {images.length ? images.map((src, idx) => (
          <div className="slide" style={slideStyle} key={idx}>
            <img src={src} alt={`Фото ${idx + 1}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        )) : (
          // заглушки
          Array.from({ length: 5 }).map((_, i) => (
            <div className="slide photo-placeholder" style={slideStyle} key={i}>
              <div>Фото {i + 1}</div>
            </div>
          ))
        )}
      </div>

      {/* Навигация */}
      <div className="slider-nav" style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10 }}>
        {Array.from({ length: images.length || 1 }).map((_, i) => (
          <div key={i} className={`nav-dot ${i === index ? 'active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>

      {/* Стрелки */}
      <button onClick={prev} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', padding: '8px 10px', borderRadius: 6, cursor: 'pointer' }}>{'<'}</button>
      <button onClick={next} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', padding: '8px 10px', borderRadius: 6, cursor: 'pointer' }}>{'>'}</button>
    </div>
  )
}
