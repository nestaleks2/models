import React, { useState } from 'react'
import events from '../../events'
import './EventsPage.css'

export default function EventsPage({ lang = 'ru', onBack }) {
  const [selectedSeason, setSelectedSeason] = useState('all')

  const t = {
    en: {
      title: 'Model Events',
      backToGallery: 'Back to Gallery',
      filterBySeason: 'Filter by Season',
      allSeasons: 'All Seasons',
      location: 'Location',
      details: 'Details',
      clothing: 'Clothing',
      photoLocation: 'Photo Location',
      adultContent: 'Adult Content',
      noEvents: 'No events found for the selected season'
    },
    ru: {
      title: 'События Моделей',
      backToGallery: 'Вернуться в галерею',
      filterBySeason: 'Фильтр по сезону',
      allSeasons: 'Все сезоны',
      location: 'Локация',
      details: 'Детали',
      clothing: 'Одежда',
      photoLocation: 'Место фотосессии',
      adultContent: 'Контент 18+',
      noEvents: 'События не найдены для выбранного сезона'
    }
  }

  // Get unique seasons from events
  const seasons = [...new Set(events.map(event => event.season))].sort()

  // Filter events by season only
  const filteredEvents = events.filter(event => {
    return selectedSeason === 'all' || event.season === selectedSeason
  })

  return (
    <div className="events-page">
      <div className="events-header">
        <div className="events-header-content">
          <button onClick={onBack} className="back-button">
            ← {t[lang].backToGallery}
          </button>
          <h1 className="events-title">{t[lang].title}</h1>
        </div>
      </div>

      <div className="events-filters">
        <div className="filter-group">
          <label htmlFor="season-filter">{t[lang].filterBySeason}:</label>
          <select 
            id="season-filter"
            value={selectedSeason} 
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="filter-select"
          >
            <option value="all">{t[lang].allSeasons}</option>
            {seasons.map(season => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3 className="event-title">
                  {event.event}
                </h3>
                <span className="event-season">
                  {event.season}
                </span>
              </div>

              <div className="event-location">
                <strong>{t[lang].location}:</strong>{' '}
                {event.location}
              </div>

              <div className="event-details">
                <strong>{t[lang].details}:</strong>{' '}
                {event.details}
              </div>

              <div className="event-clothing">
                <strong>{t[lang].clothing}:</strong>{' '}
                {event.clothing}
              </div>

              <div className="event-photo-location">
                <strong>{t[lang].photoLocation}:</strong>{' '}
                {event.photoLocation}
              </div>

              {event.adultIdea && (
                <div className="event-adult">
                  <strong>{t[lang].adultContent}:</strong>{' '}
                  {event.adultIdea}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-events">
            <p>{t[lang].noEvents}</p>
          </div>
        )}
      </div>
    </div>
  )
}