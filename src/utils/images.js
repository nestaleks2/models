// Функция для получения основного изображения модели (для галереи/превью)
export async function getMainImageForModel(id) {
    try {
        // Получаем первое доступное изображение из списка
        const availableImages = await getAvailableImages(id)
        
        if (availableImages.length > 0) {
            return availableImages[0]
        }
        
        // Fallback к прямому импорту
        return await getFirstAvailableImageDirect(id)
        
    } catch (error) {
        console.warn(`Failed to get main image for model ${id}:`, error)
        // Последний fallback к статическому пути
        return `/src/img/models/${id}/image.jpg`
    }
}

// Функция для прямого импорта основного изображения
async function getFirstAvailableImageDirect(modelId) {
    const standardNames = [
        'image.jpg', 'image (1).jpg', 'img.jpg', 'photo.jpg',
        'image.png', 'image (1).png', 'img.png', 'photo.png',
        'image.webp', 'image (1).webp', 'img.webp', 'photo.webp'
    ]
    
    for (const imageName of standardNames) {
        try {
            const imagePath = `/src/img/models/${modelId}/${imageName}`
            // Используем vite-ignore чтобы подавить предупреждения
            const imageModule = await import(/* @vite-ignore */ imagePath)
            return imageModule.default || imageModule
        } catch (error) {
            // Файл не существует, пробуем следующий
            continue
        }
    }
    
    // Если ничего не нашли, возвращаем placeholder
    return `/src/img/models/${modelId}/image.jpg`
}

// Функция для получения всех возможных изображений модели (для детальной страницы)
export function getAllPossibleImagesForModel(id) {
    // Получаем базовый путь из конфигурации Vite
    const basePath = import.meta.env.BASE_URL || '/models/'
    
    // Генерируем исчерпывающий список возможных имен файлов
    const possibleNames = generatePossibleImageNames()
    
    // Создаем полные пути к изображениям
    const possibleImages = possibleNames.map(name => `${basePath}img/models/${id}/${name}`)
    
    return possibleImages
}

// Функция для получения изображений модели (обратная совместимость)
export function getImagesForModel(id) {
    // Для обратной совместимости возвращаем только основное изображение
    return [getMainImageForModel(id)]
}

// Кеш для найденных файлов по моделям
const discoveredFilesCache = new Map()

// Функция для создания API endpoint для получения списка файлов
async function fetchDirectoryContents(modelId) {
    try {
        // Пробуем получить список файлов через JSON файл
        const basePath = import.meta.env.BASE_URL || '/models/'
        const response = await fetch(`${basePath}api/models/${modelId}/images.json`)
        if (response.ok) {
            const fileList = await response.json()
            return fileList.map(filename => `${basePath}img/models/${modelId}/${filename}`)
        }
    } catch (error) {
        // JSON файл не найден, используем брутфорс поиск
    }
    
    // Fallback: пробуем стандартные API endpoints
    try {
        const response = await fetch(`/api/models/${modelId}/images`)
        if (response.ok) {
            const fileList = await response.json()
            return fileList.map(filename => {
                const basePath = import.meta.env.BASE_URL || '/models/'
                return `${basePath}img/models/${modelId}/${filename}`
            })
        }
    } catch (error) {
        // API не доступно, используем брутфорс поиск
    }
    return null
}

// Универсальная функция поиска всех изображений
async function discoverAllImages(modelId) {
    const cacheKey = `discovered_${modelId}`
    
    // Проверяем кеш
    if (discoveredFilesCache.has(cacheKey)) {
        return discoveredFilesCache.get(cacheKey)
    }

    // Сначала пробуем API
    const apiResults = await fetchDirectoryContents(modelId)
    if (apiResults && apiResults.length > 0) {
        // Проверяем доступность файлов из API
        const validFiles = []
        for (const filePath of apiResults) {
            if (await checkImageExists(filePath)) {
                validFiles.push(filePath)
            }
        }
        if (validFiles.length > 0) {
            discoveredFilesCache.set(cacheKey, validFiles)
            return validFiles
        }
    }

    // Fallback: брутфорс поиск
    return await bruteForceScan(modelId)
}

// Брутфорс сканирование всех возможных комбинаций
async function bruteForceScan(modelId) {
    const basePath = import.meta.env.BASE_URL || '/models/'
    const extensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'svg', 'avif', 'tiff']
    const foundFiles = []
    
    const isDev = import.meta.env.DEV
    // Starting comprehensive scan for model in development
    
    // Генерируем максимально полный список возможных имен
    const allPossibleNames = generateComprehensivePatterns()
    
    // Проверяем пакетами для оптимизации
    const batchSize = 50
    let checkedCount = 0
    
    for (let i = 0; i < allPossibleNames.length; i += batchSize) {
        const batch = allPossibleNames.slice(i, i + batchSize)
        
        const batchPromises = []
        for (const pattern of batch) {
            for (const ext of extensions) {
                const fileName = `${pattern}.${ext}`
                const fullPath = `${basePath}img/models/${modelId}/${fileName}`
                batchPromises.push(
                    checkImageExists(fullPath).then(exists => ({ fullPath, exists }))
                )
            }
        }
        
        const batchResults = await Promise.allSettled(batchPromises)
        
        batchResults.forEach(result => {
            if (result.status === 'fulfilled' && result.value.exists) {
                foundFiles.push(result.value.fullPath)
                // Found image file
            }
        })
        
        checkedCount += batchPromises.length
        
        // Progress tracking for development
        
        // Если нашли достаточно изображений, останавливаемся
        if (foundFiles.length >= 50) {
            // Found enough images, stopping scan
            break
        }
    }
    
    // Кешируем результат
    discoveredFilesCache.set(`discovered_${modelId}`, foundFiles)
    
    // Scan complete
    
    return foundFiles
}

// Обновленная функция для создания псевдонима
async function discoverActualFiles(modelId) {
    return await discoverAllImages(modelId)
}

// Функция для генерации базовых паттернов (быстрая проверка)
function generateQuickPatterns() {
    const patterns = []
    
    // Самые частые варианты
    patterns.push('image', 'image (1)', 'image (2)', 'image (3)')
    patterns.push('image (1) — копия', 'image (1) - копия', 'image (1) copy')
    
    // Простые числа
    for (let i = 1; i <= 20; i++) {
        patterns.push(i.toString())
        patterns.push(i.toString().padStart(2, '0'))
        patterns.push(`image_${i}`)
        patterns.push(`img_${i}`)
    }
    
    return patterns
}

// Функция для генерации расширенных паттернов на основе известных форматов
function generateExtendedPatterns() {
    const patterns = []
    
    // Известные конкретные файлы (добавляем без расширения)
    const knownFiles = [
        '00015_2990612882_0000',
        '00016_2933211970_by_sakol2529_dincco4-414w-2x',
        '00017_607029838_by_sakol2529_dinccm4-414w-2x',
        '00051_2547125212',
        '00055_2547125211',
        '65e1aa000c41f7a335080c1e',
        '65ec74f4494c1',
        '65ecbc96c9b3b',
        'girl_in_swimsuit_3_by_gentlemars_dgejs06-414w-2x'
    ]
    
    patterns.push(...knownFiles)
    
    // Числовые варианты с ведущими нулями
    for (let i = 1; i <= 99999; i++) {
        patterns.push(i.toString().padStart(5, '0'))
    }
    
    // Генерируем паттерны на основе найденных файлов
    // Паттерн: 00XXX_XXXXXXXXXX_XXXX
    for (let i = 1; i <= 100; i++) {
        const num = i.toString().padStart(5, '0')
        // Используем известные числа из реальных файлов
        const knownNumbers = [
            '2990612882_0000',
            '2933211970_by_sakol2529_dincco4-414w-2x',
            '607029838_by_sakol2529_dinccm4-414w-2x',
            '2547125212',
            '2547125211'
        ]
        
        knownNumbers.forEach(suffix => {
            patterns.push(`${num}_${suffix}`)
        })
    }
    
    // Hex-подобные строки фиксированной длины
    const hexPatterns = [
        '65e1aa000c41f7a335080c1e',
        '65ec74f4494c1',
        '65ecbc96c9b3b'
    ]
    
    // Генерируем похожие hex-строки
    hexPatterns.forEach(baseHex => {
        patterns.push(baseHex)
        
        // Варианты с измененными последними символами
        for (let i = 0; i < 10; i++) {
            const modified = baseHex.slice(0, -1) + i.toString(16)
            patterns.push(modified)
        }
        
        // Варианты с измененными первыми символами после 65
        if (baseHex.startsWith('65')) {
            for (let i = 0; i < 16; i++) {
                const char = i.toString(16)
                const modified = '65' + char + baseHex.substring(3)
                patterns.push(modified)
            }
        }
    })
    
    // Варианты с image в скобках
    for (let i = 4; i <= 50; i++) {
        patterns.push(`image (${i})`)
        patterns.push(`image(${i})`)
    }
    
    return patterns
}

// Функция для генерации оптимального списка паттернов имен файлов
function generateComprehensivePatterns() {
    const patterns = []
    
    // 1. Базовые варианты
    const baseNames = ['image', 'img', 'photo', 'pic', 'picture', 'фото', 'картинка']
    patterns.push(...baseNames)
    
    // 2. Варианты с числами в скобках (ограничиваем до 50)
    baseNames.forEach(base => {
        for (let i = 1; i <= 50; i++) {
            patterns.push(`${base} (${i})`, `${base}(${i})`)
            patterns.push(`${base}_${i}`, `${base}-${i}`)
        }
    })
    
    // 3. Варианты с копиями
    const copyVariants = ['copy', 'копия', '— копия', '- копия']
    copyVariants.forEach(variant => {
        for (let i = 1; i <= 10; i++) {
            patterns.push(`image (${i}) ${variant}`)
        }
    })
    
    // 4. Простые числовые варианты (ограничиваем до 10000)
    for (let i = 1; i <= 10000; i++) {
        patterns.push(i.toString())
        if (i <= 9999) {
            patterns.push(i.toString().padStart(2, '0'))
            patterns.push(i.toString().padStart(3, '0'))
            patterns.push(i.toString().padStart(4, '0'))
            patterns.push(i.toString().padStart(5, '0'))
        }
    }
    
    // 5. Известные конкретные файлы
    const knownFiles = [
        '00015_2990612882_0000',
        '00016_2933211970_by_sakol2529_dincco4-414w-2x',
        '00017_607029838_by_sakol2529_dinccm4-414w-2x',
        '00051_2547125212',
        '00055_2547125211',
        '65e1aa000c41f7a335080c1e',
        '65ec74f4494c1',
        '65ecbc96c9b3b',
        'girl_in_swimsuit_3_by_gentlemars_dgejs06-414w-2x'
    ]
    patterns.push(...knownFiles)
    
    // 6. Hex-строки систематически (ограниченно)
    const hexChars = '0123456789abcdef'
    
    // Короткие hex-строки
    for (let len = 8; len <= 16; len++) {
        for (let start = 0; start < 16; start++) {
            let hexString = start.toString(16)
            for (let j = 1; j < len; j++) {
                hexString += hexChars[j % 16]
            }
            patterns.push(hexString)
        }
    }
    
    // Длинные hex-строки (как в webp файлах)
    for (let len = 20; len <= 26; len++) {
        // Начинающиеся с 65 (как в webp файлах)
        for (let i = 0; i < 100; i++) {
            let hexString = '65'
            for (let j = 2; j < len; j++) {
                hexString += hexChars[(i + j) % 16]
            }
            patterns.push(hexString)
        }
        
        // Другие варианты
        for (let start = 0; start < 10; start++) {
            let hexString = start.toString(16)
            for (let j = 1; j < len; j++) {
                hexString += hexChars[j % 16]
            }
            patterns.push(hexString)
        }
    }
    
    // 7. Специальные паттерны
    const specialPatterns = [
        'Screenshot', 'Снимок экрана', 'DSC', 'IMG', 'Photo', 'Изображение',
        'untitled', 'Без названия', 'Новый рисунок'
    ]
    
    specialPatterns.forEach(base => {
        patterns.push(base)
        for (let i = 1; i <= 20; i++) {
            patterns.push(`${base}_${i}`)
            patterns.push(`${base}-${i}`)
            patterns.push(`${base} (${i})`)
        }
    })
    
    // 8. Упрощенные варианты с датами (только годы)
    for (let year = 2020; year <= 2025; year++) {
        patterns.push(year.toString())
        patterns.push(`IMG_${year}`)
        patterns.push(`Photo_${year}`)
        
        // Месяцы только для текущих годов
        if (year >= 2023) {
            for (let month = 1; month <= 12; month++) {
                const monthStr = month.toString().padStart(2, '0')
                patterns.push(`${year}_${monthStr}`)
                patterns.push(`IMG_${year}_${monthStr}`)
            }
        }
    }
    
    // Generated comprehensive patterns
    return [...new Set(patterns)]
}

// Обновляем основную функцию для использования нового подхода
function generatePossibleImageNames() {
    // Эта функция теперь используется только как fallback
    // Основная логика перенесена в discoverActualFiles
    return generateQuickPatterns()
}

// Функция для получения карты всех изображений
export function getAllImagesMap() {
    const imagesByModel = new Map()
    
    // Создаем карту для всех известных моделей (ID от 1 до 24)
    for (let id = 1; id <= 24; id++) {
        imagesByModel.set(id, [getMainImageForModel(id)])
    }
    
    return imagesByModel
}

// Функция для быстрой проверки существования изображения
export async function checkImageExists(imagePath) {
    return new Promise((resolve) => {
        const img = new Image()
        
        // Таймаут для зависших изображений
        const timeout = setTimeout(() => {
            // Timeout for image check
            resolve(false)
        }, 3000)
        
        img.onload = () => {
            clearTimeout(timeout)
            // Image exists
            resolve(true)
        }
        
        img.onerror = () => {
            clearTimeout(timeout)
            // Не логируем ошибки для несуществующих файлов
            resolve(false)
        }
        
        img.src = imagePath
    })
}

// Функция для получения первого доступного изображения модели
export async function getFirstAvailableImage(modelId) {
    const possibleImages = getAllPossibleImagesForModel(modelId)
    
    for (const imagePath of possibleImages) {
        const exists = await checkImageExists(imagePath)
        if (exists) {
            return imagePath
        }
    }
    
    return null
}

// Современная функция для получения всех изображений модели с Vite
export async function getAvailableImages(modelId) {
    try {
        // Используем Vite's import.meta.glob для динамического импорта
        const images = await getImagesViaViteGlob(modelId)
        
        if (images.length > 0) {
            const isDev = import.meta.env.DEV
            // Vite glob found images
            return images
        }
    } catch (error) {
        console.warn('Vite glob failed, falling back to discovery:', error)
    }
    
    // Fallback к discovery методу если Vite glob не сработал
    return await discoverActualFiles(modelId)
}

// Функция для использования Vite's import.meta.glob
async function getImagesViaViteGlob(modelId) {
    try {
        // Используем import.meta.glob для импорта всех изображений модели
        const imageModules = import.meta.glob(`/src/img/models/**/*.{jpg,jpeg,png,webp,gif,bmp,svg,avif,tiff}`, { 
            query: '?url',
            import: 'default',
            eager: false 
        })
        
        // Фильтруем только изображения для конкретной модели
        const modelPattern = `/src/img/models/${modelId}/`
        const modelImagePaths = Object.keys(imageModules).filter(path => 
            path.startsWith(modelPattern)
        )
        
        // Получаем URL-ы изображений
        const imageUrls = await Promise.all(
            modelImagePaths.map(async (path) => {
                try {
                    const imageUrl = await imageModules[path]()
                    return imageUrl
                } catch (error) {
                    console.warn(`Failed to load image ${path}:`, error)
                    return null
                }
            })
        )
        
        // Фильтруем null значения
        return imageUrls.filter(url => url !== null)
        
    } catch (error) {
        console.warn('Vite glob import failed:', error)
        
        // Альтернативный подход - проверяем файлы напрямую
        return await getImagesByDirectImport(modelId)
    }
}

// Альтернативная функция для прямого импорта изображений
async function getImagesByDirectImport(modelId) {
    const images = []
    const extensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'svg']
    const commonNames = [
        'image', 'image (1)', 'image (2)', 'image (3)', 
        'img', 'photo', 'pic', '1', '2', '3', '4', '5'
    ]
    
    for (const name of commonNames) {
        for (const ext of extensions) {
            try {
                const imagePath = `/src/img/models/${modelId}/${name}.${ext}`
                // Пробуем динамический импорт с vite-ignore
                const imageUrl = await import(/* @vite-ignore */ imagePath)
                images.push(imageUrl.default || imageUrl)
            } catch (error) {
                // Файл не существует, продолжаем
                continue
            }
        }
        
        // Ограничиваем количество для производительности
        if (images.length >= 20) break
    }
    
    return images
}

// Функция для предзагрузки изображений (опционально)
export function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
    })
}

// Функция для предзагрузки всех изображений модели
export async function preloadModelImages(modelId) {
    try {
        const availableImages = await getAvailableImages(modelId)
        const preloadPromises = availableImages.map(src => preloadImage(src))
        
        // Используем Promise.allSettled чтобы не прерывать загрузку если одно изображение не загрузилось
        const results = await Promise.allSettled(preloadPromises)
        
        return results
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value)
    } catch (error) {
        console.warn(`Failed to preload images for model ${modelId}:`, error)
        return []
    }
}

// Кеш для уже проверенных изображений
const imageCache = new Map()

// Функция для получения изображений с кешированием
export async function getCachedAvailableImages(modelId) {
    const cacheKey = `model_${modelId}`
    
    if (imageCache.has(cacheKey)) {
        return imageCache.get(cacheKey)
    }
    
    const availableImages = await getAvailableImages(modelId)
    imageCache.set(cacheKey, availableImages)
    
    return availableImages
}

// Функция для очистки кеша (полезно при обновлении данных)
export function clearImageCache() {
    imageCache.clear()
}

// Функция для создания оптимизированного URL изображения
export function createOptimizedImageUrl(originalUrl, width = null, height = null, quality = 80) {
    // В реальном проекте здесь можно было бы использовать сервис оптимизации изображений
    // Пока возвращаем оригинальный URL
    return originalUrl
}