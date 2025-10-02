// Функция для получения изображений модели по ID
export function getImagesForModel(id) {
    // В production используем прямые пути к файлам в public/img/models/
    const possibleImages = [
        `/img/models/${id}/image.jpg`,
        `/img/models/${id}/image (1).jpg`,
        `/img/models/${id}/image.jpeg`,
        `/img/models/${id}/image (1).jpeg`,
        `/img/models/${id}/image.png`,
        `/img/models/${id}/image (1).png`,
        `/img/models/${id}/girl_in_swimsuit_3_by_gentlemars_dgejs06-414w-2x.jpg` // специальный случай для модели 3
    ];
    
    // Возвращаем все возможные пути - браузер сам определит какие существуют
    return possibleImages;
}

export function getAllImagesMap() {
    const imagesByModel = {};
    // Создаем карту для всех известных моделей (ID от 1 до 24)
    for (let id = 1; id <= 24; id++) {
        imagesByModel[id] = getImagesForModel(id);
    }
    return imagesByModel;
}
