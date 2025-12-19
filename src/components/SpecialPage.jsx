import React, { useState, useEffect } from 'react'
import { getAshleyMedia, getAthenaMedia } from '../utils/mediaLoader'
import './SpecialPage.css'

export default function SpecialPage({ lang = 'ru', onBack }) {
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
  }

  const t = {
    ru: {
      title: 'Специальная страница',
      backButton: 'Назад',
      reportTitle: 'Отчет о проделанной работе',
      reportContent: `
        Первостепенной задачей было создать качественные прототипы девушек, которые будут использоваться в качестве исходного материала для генерации материала.

        Изначальные предположения о возможностях быстрой и несложной генерации оказались ложными.

        Тестировали разные модели генерации контента. Анатолий наверное сбился со счету, сколько раз он скачивал и настраивал модели))
        
        Но одной модели недостаточно, нужны еще дополнительные учебники для модели, которые показывают ей, как должна та или иная деталь. 
        В зависимости от того, что нам требуется получить на фото, необходимо для каждой модели создать процесс и подключить такие определенные учебники:
            - под конкретные типы одежды: lingerie, bikini, stockings, latex outfits, school uniform, maid outfit и т.д.;
            - под реалистичные обнажённые тела, естественную кожу, грудь разных размеров, позы. Не добавляют одежду, но отлично детализируют тело;
            - под динамичные сексуальные позы, проникновение, взаимодействие с партнёром. Часто разделены по конкретным позам или актам.
        Найти подходящий для нашей модели учебник, его подключение и настройка - это тоже достаточно долгий процесс, поскольку как правило они занимают большой объем памяти, а после установки и настройки выясняется, что он не подходит, поскольку выдает плохое качество и возникают ошибки при взаимодействии с другими элементами процесса.

        Для генерации оптимального качества контента нужно провести не менее 10 итераций, чтобы из этих 10 фото отобрать 1-2 единицы приемлемого качества.
        Отдельных трудов стоит настройка и написание промтов для использования прототипа девушки в другой одежде или позе. Даже при соблюдении все рекомендаций и настройках согласно инструкции, в корзину отправляется большая часть сгенерированного материала, поскольку очень заметны отличия от прототипа девушки.

        Для тестирования генерации изображений были взяты модели Ashley и Athena.

        Из небольшого фрагмента созданы девушки в полный рост и с этими фото уже проводим манипуляции с одеждой, позами.
        
        Видео сейчас можем создавать длительностью 5 секунд. Генерация такого видео занимает от 2 до 4 часов, в виду недостаточной мощности компьютера. Если в высоком качестве, то еще дольше.

        Работать можно, только нужен компьютер помощнее. Сейчас много времени теряется на ожидание готового контента, из которого после сортировки остается лишь малая доля.
      `,
      conclusion: ''
    },
    en: {
      title: 'Special Page',
      backButton: 'Back',
      reportTitle: 'Arbeitsfortschrittsbericht',
      reportContent: `
        Die vorrangige Aufgabe bestand darin, qualitativ hochwertige Prototypen von Frauen zu erstellen, die als Ausgangsmaterial für die Content-Generierung dienen.

        Die anfänglichen Annahmen über die Möglichkeiten einer schnellen und einfachen Generierung erwiesen sich als falsch.

        Es wurden verschiedene Modelle zur Content-Generierung getestet. Anatolij hat vermutlich den Überblick verloren, wie oft er die Modelle heruntergeladen und neu konfiguriert hat 🙂
        
        Ein einzelnes Modell reicht jedoch nicht aus; wir benötigen zusätzliche Tutorials, die ihr zeigen, wie jedes Detail aussehen soll.

        Je nachdem, was wir mit dem Foto erreichen wollen, müssen wir für jedes Modell einen Prozess erstellen und die folgenden spezifischen Tutorials verknüpfen:
            – für bestimmte Kleidungsstücke: Dessous, Bikinis, Strümpfe, Latex-Outfits, Schuluniformen, Dienstmädchen-Outfits usw.;
            – für realistische Aktaufnahmen, natürliche Haut, Brüste unterschiedlicher Größe und Posen. Diese fügen keine Kleidung hinzu, bieten aber exzellente Körperdetails;
            – für dynamische Sexstellungen, Penetration und Interaktion mit einem Partner. Diese werden oft in spezifische Stellungen oder Handlungen unterteilt.
        Das Finden, Verknüpfen und Einrichten eines geeigneten Tutorials für unser Modell ist ebenfalls ein recht zeitaufwändiger Prozess, da diese Tutorials in der Regel viel Speicherplatz benötigen. Nach der Installation und Konfiguration stellt sich heraus, dass es ungeeignet ist, schlechte Qualität liefert und Fehler bei der Interaktion mit anderen Elementen des Prozesses auftreten.

        Um eine optimale Content-Qualität zu erreichen, sind mindestens 10 Iterationen erforderlich, aus denen in der Regel nur 1–2 Bilder von akzeptabler Qualität ausgewählt werden können.
        Ein zusätzlicher und nicht unerheblicher Aufwand entsteht durch die Erstellung und Feinabstimmung von Prompts, um denselben weiblichen Prototyp in anderer Kleidung oder Pose zu verwenden. Selbst bei Einhaltung aller Empfehlungen und Einstellungen gemäß Anleitung wird ein Großteil des generierten Materials verworfen, da die Abweichungen vom ursprünglichen Prototyp deutlich sichtbar bleiben.

        Für die Tests der Bildgenerierung wurden die Modelle Ashley und Athena verwendet.

        Aus einem kleinen Bildausschnitt wurden Ganzkörperdarstellungen der Frauen erstellt, die anschließend für weitere Manipulationen wie Kleidung und Posen genutzt werden.

        Derzeit können Videos mit einer Länge von bis zu 5 Sekunden erstellt werden. Aufgrund der begrenzten Rechnerleistung dauert die Generierung eines solchen Videos zwischen 2 und 4 Stunden; bei höherer Qualität entsprechend länger.

        Grundsätzlich ist ein Weiterarbeiten möglich, jedoch wird dafür ein leistungsstärkerer Computer benötigt. Aktuell geht viel Zeit durch das Warten auf fertig generierten Content verloren, von dem nach der anschließenden Sortierung nur ein kleiner Teil tatsächlich verwendbar ist.
      `,
      conclusion: ''
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
              <div className="media-grid">
                {block.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="media-tile"
                    onClick={() => openLightbox(item, blockIndex, itemIndex)}
                  >
                    <div className="media-tile-content">
                      {item.type === 'image' ? (
                        <img src={item.src} alt={item.alt} className="media-tile-image" />
                      ) : (
                        <video 
                          className="media-tile-video"
                          poster={item.poster}
                        >
                          <source src={item.src} type="video/mp4" />
                          Ваш браузер не поддерживает видео.
                        </video>
                      )}
                      <div className="media-tile-overlay">
                        <span className="media-tile-icon">
                          {item.type === 'image' ? '🖼️' : '🎥'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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