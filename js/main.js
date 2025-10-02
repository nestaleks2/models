const models = [
    {
        id: 1,
        name: "Mei",
        surname: "Zhang",
        stageName: "Mei Lotus",
        nationality: "Chinese",
        hairColor: "Black, straight",
        skinColor: "Light yellowish",
        age: 23,
        height: 170,
        bodyType: "Slim",
        measurements: "98/60/88",
        features: "Freckles on the nose",
        style: "Minimalism",
        hobbies: "Calligraphy, yoga",
        faceStyle: "Minimalist style, almond-shaped eyes"
      },
      {
        id: 2,
        name: "Hana",
        surname: "Kim",
        stageName: "Hana Bloom",
        nationality: "Korean",
        hairColor: "Dark brown, wavy",
        skinColor: "Fair",
        age: 21,
        height: 168,
        bodyType: "Hourglass",
        measurements: "85/59/90",
        features: "Small wrist tattoo",
        style: "K-pop, street fashion",
        hobbies: "K-pop dance, photography",
        faceStyle: "K-pop style, soft facial features"
      },
      {
        id: 3,
        name: "Isabella",
        surname: "Santos",
        stageName: "Bella Spice",
        nationality: "Brazilian (mulatto)",
        hairColor: "Chestnut, curly",
        skinColor: "Bronze",
        age: 26,
        height: 175,
        bodyType: "Athletic",
        measurements: "92/62/92",
        features: "Eyebrow piercing",
        style: "Exotic, boho",
        hobbies: "Samba dancing, traveling",
        faceStyle: "Exotic style, full lips"
      },
      {
        id: 4,
        name: "Nia",
        surname: "Jackson",
        stageName: "Nia Ember",
        nationality: "Jamaican (mulatto)",
        hairColor: "Black, afro",
        skinColor: "Medium brown",
        age: 24,
        height: 172,
        bodyType: "Hourglass",
        measurements: "86/61/91",
        features: "Mole on the cheek",
        style: "Streetwear, sports",
        hobbies: "Skateboarding, music",
        faceStyle: "Street style, defined cheekbones"
      },
      {
        id: 5,
        name: "Emily",
        surname: "Davis",
        stageName: "Emily Dawn",
        nationality: "American",
        hairColor: "Blonde, straight",
        skinColor: "Fair",
        age: 27,
        height: 178,
        bodyType: "Slim",
        measurements: "80/58/86",
        features: "Light freckles",
        style: "Classic, preppy",
        hobbies: "Horse riding, reading",
        faceStyle: "Classic style, blue eyes"
      },
      {
        id: 6,
        name: "Sofia",
        surname: "Martinez",
        stageName: "Sofia Ray",
        nationality: "American (Latina)",
        hairColor: "Dark blonde, wavy",
        skinColor: "Olive",
        age: 25,
        height: 174,
        bodyType: "Hourglass",
        measurements: "93/63/93",
        features: "Long eyelashes",
        style: "Glamour, evening fashion",
        hobbies: "Latin dances, cooking",
        faceStyle: "Glamorous style, long eyelashes"
      },
      {
        id: 7,
        name: "Clara",
        surname: "Müller",
        stageName: "Clara Mist",
        nationality: "German",
        hairColor: "Light brown, straight",
        skinColor: "Fair",
        age: 22,
        height: 176,
        bodyType: "Slim",
        measurements: "91/59/87",
        features: "High cheekbones",
        style: "Scandinavian minimalism",
        hobbies: "Cycling, interior design",
        faceStyle: "Scandinavian style, light eyebrows"
      },
      {
        id: 8,
        name: "Olivia",
        surname: "Rossi",
        stageName: "Olivia Shine",
        nationality: "Italian",
        hairColor: "Black, glossy",
        skinColor: "Light olive",
        age: 28,
        height: 171,
        bodyType: "Athletic",
        measurements: "84/61/89",
        features: "Shoulder tattoo",
        style: "Elegant, haute couture",
        hobbies: "Winemaking, painting",
        faceStyle: "Elegant style, expressive eyes"
      },
      {
        id: 9,
        name: "Eva",
        surname: "Kozlova",
        stageName: "Eva Star",
        nationality: "Ukrainian",
        hairColor: "Light blonde, wavy",
        skinColor: "Fair",
        age: 20,
        height: 173,
        bodyType: "Slim",
        measurements: "83/60/88",
        features: "Dimples on cheeks",
        style: "Romantic, boho",
        hobbies: "Embroidery, ballroom dancing",
        faceStyle: "Romantic style, delicate facial features"
      },
      {
        id: 10,
        name: "Lily",
        surname: "Dupont",
        stageName: "Lily Rose",
        nationality: "French",
        hairColor: "Chestnut, straight",
        skinColor: "Fair",
        age: 29,
        height: 177,
        bodyType: "Hourglass",
        measurements: "85/62/90",
        features: "Mole above the lip",
        style: "Parisian chic, classic",
        hobbies: "Perfumery, ballet",
        faceStyle: "Parisian chic, graceful oval face"
      }
];

function createGallery() {
    const gallery = document.getElementById('gallery');
    
    models.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.onclick = () => showModelPage(model.id);
        
        card.innerHTML = `
            <div class="model-image photo-placeholder">
                <div>Фото ${model.name}</div>
            </div>
            <div class="model-info">
                <div class="model-name">${model.name} ${model.surname}</div>
                <div class="model-stage-name">${model.stageName}</div>
                <div class="model-details">
                    <div><strong>Возраст:</strong> ${model.age}</div>
                    <div><strong>Рост:</strong> ${model.height} см</div>
                    <div><strong>Национальность:</strong> ${model.nationality}</div>
                </div>
            </div>
        `;
        
        gallery.appendChild(card);
    });
}

function createModelPages() {
    const container = document.getElementById('model-pages');
    
    models.forEach(model => {
        const page = document.createElement('div');
        page.className = 'model-page';
        page.id = `model-${model.id}`;
        
        page.innerHTML = `
            <button class="back-button" onclick="showGallery()">← Назад к галерее</button>
            
            <div class="slider-container">
                <div class="slider" id="slider-${model.id}">
                    <!-- Слайды будут загружены динамически при открытии страницы модели -->
                </div>
                <div class="slider-nav" id="slider-nav-${model.id}">
                    <!-- Точки навигации будут добавлены динамически -->
                </div>
            </div>
            
            <div class="model-details-full">
                <div class="detail-column">
                    <div class="detail-item">
                        <div class="detail-label">Имя:</div>
                        <div class="detail-value">${model.name}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Фамилия:</div>
                        <div class="detail-value">${model.surname}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Сценический псевдоним:</div>
                        <div class="detail-value">${model.stageName}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Национальность:</div>
                        <div class="detail-value">${model.nationality}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Цвет волос:</div>
                        <div class="detail-value">${model.hairColor}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Цвет кожи:</div>
                        <div class="detail-value">${model.skinColor}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Возраст:</div>
                        <div class="detail-value">${model.age} лет</div>
                    </div>
                </div>
                <div class="detail-column">
                    <div class="detail-item">
                        <div class="detail-label">Рост (см):</div>
                        <div class="detail-value">${model.height} см</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Тип фигуры:</div>
                        <div class="detail-value">${model.bodyType}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Размер частей тела (Г/Т/Б, см):</div>
                        <div class="detail-value">${model.measurements}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Особенности внешности:</div>
                        <div class="detail-value">${model.features}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Предпочитаемый стиль одежды:</div>
                        <div class="detail-value">${model.style}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Хобби:</div>
                        <div class="detail-value">${model.hobbies}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Стиль/Черты лица:</div>
                        <div class="detail-value">${model.faceStyle}</div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(page);
    });
}

// Проверяет существование изображения по URL (пытается HEAD, если не сработает — GET)
async function checkImageExists(url) {
    try {
        // Попробуем HEAD — быстрее при поддержке сервера
        const res = await fetch(url, { method: 'HEAD' });
        if (res.ok) return true;
        // Если сервер не поддерживает HEAD корректно, попробуем GET, но не загружаем тело
        const resGet = await fetch(url, { method: 'GET' });
        return resGet.ok;
    } catch (e) {
        return false;
    }
}

// Загружает изображения для модели из папки img/models/NN
async function loadModelImages(modelId) {
    const pad = String(modelId); // Папки в проекте называются '1', '2', '10' и т.д.
    const folder = `./img/models/${pad}/`;
    const extensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    const images = [];

    console.debug(`loadModelImages: проверка папки ${folder}`);

    // Попробуем сначала загрузить manifest с именами файлов
    try {
        const manifestUrl = `${folder}index.json`;
        const res = await fetch(manifestUrl, { cache: 'no-store' });
        if (res.ok) {
            const list = await res.json();
            if (Array.isArray(list) && list.length) {
                console.debug(`loadModelImages: найден manifest в ${manifestUrl}, ${list.length} файлов`);
                for (const name of list) {
                    // безопасность: игнорируем абсолютные URL'ы и ..
                    if (typeof name === 'string' && !name.includes('..') && !/^https?:\/\//.test(name)) {
                        images.push(folder + name);
                    }
                }
            }
        }
    } catch (e) {
        // manifest отсутствует или невалидный — просто продолжим fallback
        console.debug('loadModelImages: manifest не найден или ошибочный, используем fallback', e);
    }

    // Если manifest не дал результатов — используем старый числовой поиск
    if (images.length === 0) {
        let consecutiveMisses = 0;
        const maxConsecutiveMisses = 3; // остановка после N подряд пропущенных индексов
        const maxIndex = 100; // увеличим поиск до 100 на случай, если много файлов с последовательными именами

        for (let i = 1; i <= maxIndex; i++) {
            let foundThisIndex = false;
            for (const ext of extensions) {
                const url = `${folder}${i}.${ext}`;
                // eslint-disable-next-line no-await-in-loop
                if (await checkImageExists(url)) {
                    images.push(url);
                    foundThisIndex = true;
                    break;
                }
            }

            if (foundThisIndex) {
                consecutiveMisses = 0;
            } else {
                consecutiveMisses++;
                if (consecutiveMisses >= maxConsecutiveMisses) break;
            }
        }
    }

    const slider = document.getElementById(`slider-${modelId}`);
    const nav = document.getElementById(`slider-nav-${modelId}`);

    // Очистим старое содержимое
    slider.innerHTML = '';
    nav.innerHTML = '';

    if (images.length === 0) {
        console.warn(`loadModelImages: не найдено изображений в ${folder}. Проверьте название папки, наличие index.json или имён файлов; также убедитесь, что сайт запущен через http(s), а не file://`);
        // Если не найдено ни одной фотографии, показать заполнители
        for (let i = 1; i <= 5; i++) {
            const slide = document.createElement('div');
            slide.className = 'slide photo-placeholder';
            slide.textContent = `Фото ${i}`;
            slider.appendChild(slide);

            const dot = document.createElement('div');
            dot.className = `nav-dot ${i === 1 ? 'active' : ''}`;
            // Используем привязку через замыкание
            dot.addEventListener('click', () => showSlide(modelId, i - 1));
            nav.appendChild(dot);
        }
        currentSlides[modelId] = 0;
        showSlide(modelId, 0);
        return;
    }

    console.debug(`loadModelImages: найдено ${images.length} изображений в ${folder}`);

    // Добавим найденные изображения в слайдер
    images.forEach((src, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Фото ${idx + 1}`;
        img.loading = 'lazy';
        slide.appendChild(img);
        slider.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `nav-dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => showSlide(modelId, idx));
        nav.appendChild(dot);
    });

    currentSlides[modelId] = 0;
    showSlide(modelId, 0);
}

function showModelPage(modelId) {
    document.getElementById('gallery-view').style.display = 'none';
    const pages = document.querySelectorAll('.model-page');
    pages.forEach(page => page.classList.remove('active'));
    const target = document.getElementById(`model-${modelId}`);
    target.classList.add('active');

    // При открытии страницы модели загружаем её фотографии
    // Не блокируем UI — запускаем асинхронно
    loadModelImages(modelId).catch(err => {
        // В случае ошибок просто оставляем заглушки
        console.error('Ошибка загрузки изображений модели', modelId, err);
    });
}

function showGallery() {
    document.getElementById('gallery-view').style.display = 'block';
    const pages = document.querySelectorAll('.model-page');
    pages.forEach(page => page.classList.remove('active'));
}

let currentSlides = {};

function showSlide(modelId, slideIndex) {
    const slider = document.getElementById(`slider-${modelId}`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const slidesCount = slides.length || 1;
    const nav = document.getElementById(`slider-nav-${modelId}`);
    const dots = nav ? nav.querySelectorAll('.nav-dot') : [];

    // Вычисляем процент сдвига на основе количества слайдов
    const percent = 100 / slidesCount;
    slider.style.transform = `translateX(-${slideIndex * percent}%)`;

    if (dots.length) {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[slideIndex]) dots[slideIndex].classList.add('active');
    }

    currentSlides[modelId] = slideIndex;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    createGallery();
    createModelPages();
    
    // Инициализация слайдеров
    models.forEach(model => {
        currentSlides[model.id] = 0;
    });
});

// Автослайдер (опционально)
setInterval(() => {
    models.forEach(model => {
        if (document.getElementById(`model-${model.id}`).classList.contains('active')) {
            const slider = document.getElementById(`slider-${model.id}`);
            if (!slider) return;
            const slides = slider.querySelectorAll('.slide');
            const count = slides.length || 1;
            const nextSlide = (currentSlides[model.id] + 1) % count;
            showSlide(model.id, nextSlide);
        }
    });
}, 5000);