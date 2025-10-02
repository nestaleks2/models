// Функция для получения изображений модели по ID с правильными путями для GitHub Pages
export function getImagesForModel(id) {
    // Получаем базовый путь из конфигурации Vite
    const basePath = import.meta.env.BASE_URL || '/models/'
    
    // Базовые варианты имен файлов изображений
    let possibleNames = ['image.jpg', 'image (1).jpg']
    
    // Специальные случаи для конкретных моделей на основе реально существующих файлов
    const specialCases = {
        3: ['girl_in_swimsuit_3_by_gentlemars_dgejs06-414w-2x.jpg'],
        12: ['image (1).jpg'],
        14: ['image (1).jpg'],
        15: ['image (1).jpg', 'image.jpg'], // у модели 15 есть оба файла
        16: ['image (1).jpg'],
        18: ['image (1).jpg'],
        19: ['image (1).jpg'],
        22: ['image (1).jpg'],
        24: ['image (1).jpg'],
        4: ['image (1).jpg'],
        6: ['image (1).jpg'],
        8: ['image (1).jpg'],
        9: ['image (1).jpg']
    }
    
    // Если есть специальный случай для этой модели, используем его
    if (specialCases[id]) {
        possibleNames = specialCases[id]
    } else {
        // Для остальных моделей используем стандартный image.jpg
        possibleNames = ['image.jpg']
    }
    
    // Создаем полные пути к изображениям
    const possibleImages = possibleNames.map(name => `${basePath}img/models/${id}/${name}`)
    
    return possibleImages
}

// Функция для получения карты всех изображений
export function getAllImagesMap() {
    const imagesByModel = new Map()
    
    // Создаем карту для всех известных моделей (ID от 1 до 24)
    for (let id = 1; id <= 24; id++) {
        imagesByModel.set(id, getImagesForModel(id))
    }
    
    return imagesByModel
}

// Функция для проверки существования изображения
export async function checkImageExists(imagePath) {
    try {
        const response = await fetch(imagePath, { method: 'HEAD' })
        return response.ok
    } catch (error) {
        return false
    }
}

// Функция для получения первого доступного изображения модели
export async function getFirstAvailableImage(modelId) {
    const possibleImages = getImagesForModel(modelId)
    
    for (const imagePath of possibleImages) {
        const exists = await checkImageExists(imagePath)
        if (exists) {
            return imagePath
        }
    }
    
    return null
}

// Функция для получения всех доступных изображений модели
export async function getAvailableImages(modelId) {
    const possibleImages = getImagesForModel(modelId)
    const availableImages = []
    
    // Используем Promise.allSettled для параллельной проверки всех изображений
    const results = await Promise.allSettled(
        possibleImages.map(async (imagePath) => {
            const exists = await checkImageExists(imagePath)
            return { imagePath, exists }
        })
    )
    
    // Фильтруем только существующие изображения
    results.forEach(result => {
        if (result.status === 'fulfilled' && result.value.exists) {
            availableImages.push(result.value.imagePath)
        }
    })
    
    return availableImages
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