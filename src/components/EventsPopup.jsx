import React from 'react'
import './EventsPopup.css'

export default function EventsPopup({ isOpen, onClose, events, modelName, lang = 'ru' }) {
  if (!isOpen) return null

  const labels = {
    en: {
      eventsTitle: 'Events',
      season: 'Season',
      event: 'Event',
      location: 'Location',
      details: 'Details',
      clothing: 'Clothing',
      photoLocation: 'Photo Location',
      adultIdea: 'Adult Concept',
      close: 'Close',
      noEvents: 'No events available for this model'
    },
    ru: {
      eventsTitle: 'События',
      season: 'Сезон',
      event: 'Событие',
      location: 'Место',
      details: 'Детали',
      clothing: 'Формат одежды',
      photoLocation: 'Локация фото',
      adultIdea: 'Откровенная идея',
      close: 'Закрыть',
      noEvents: 'Для этой модели нет доступных событий'
    }
  }

  const l = labels[lang]

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className="events-popup-overlay" onClick={handleOverlayClick}>
      <div className="events-popup">
        <div className="events-popup-header">
          <h2 className="events-popup-title">
            {l.eventsTitle} - {modelName}
          </h2>
          <button 
            className="events-popup-close" 
            onClick={onClose}
            aria-label={l.close}
          >
            ×
          </button>
        </div>

        <div className="events-popup-content">
          {events && events.length > 0 ? (
            <div className="events-list">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-header">
                    <div className="event-season">
                      📅 {event.season}
                    </div>
                    <div className="event-title">
                      🎪 {event.event}
                    </div>
                  </div>

                  <div className="event-details">
                    <div className="event-detail-item">
                      <span className="detail-icon">📍</span>
                      <div className="detail-content">
                        <span className="detail-label">{l.location}:</span>
                        <span className="detail-value">{event.location}</span>
                      </div>
                    </div>

                    <div className="event-detail-item">
                      <span className="detail-icon">✨</span>
                      <div className="detail-content">
                        <span className="detail-label">{l.details}:</span>
                        <span className="detail-value">{event.details}</span>
                      </div>
                    </div>

                    <div className="event-detail-item">
                      <span className="detail-icon">👗</span>
                      <div className="detail-content">
                        <span className="detail-label">{l.clothing}:</span>
                        <span className="detail-value">{event.clothing}</span>
                      </div>
                    </div>

                    <div className="event-detail-item">
                      <span className="detail-icon">📸</span>
                      <div className="detail-content">
                        <span className="detail-label">{l.photoLocation}:</span>
                        <span className="detail-value">{event.photoLocation}</span>
                      </div>
                    </div>

                    <div className="event-detail-item adult-idea">
                      <span className="detail-icon">🔥</span>
                      <div className="detail-content">
                        <span className="detail-label">{l.adultIdea}:</span>
                        <span className="detail-value">{event.adultIdea}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <span className="no-events-icon">📅</span>
              <p>{l.noEvents}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}