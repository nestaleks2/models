// Собираем все изображения из папок img/models/* при сборке (Vite)
const modules = import.meta.glob('/img/models/*/*.{jpg,jpeg,png,webp,gif}', { eager: true, as: 'url' });

const imagesByModel = {};

for (const path in modules) {
    // path пример: '/img/models/1/filename.jpg'
    const m = path.match(/\/img\/models\/(\d+)\/(.+)$/);
    if (!m) continue;
    const id = Number(m[1]);
    const name = m[2];
    imagesByModel[id] = imagesByModel[id] || [];
    imagesByModel[id].push(modules[path]);
}

export function getImagesForModel(id) {
    return imagesByModel[id] ? [...imagesByModel[id]] : [];
}

export function getAllImagesMap() {
    return imagesByModel;
}
