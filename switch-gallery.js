#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const galleryVariants = {
  original: {
    name: 'Оригинальный дизайн галереи',
    galleryFile: 'Gallery-original.jsx',
    appFile: 'App-original.jsx'
  },
  premium: {
    name: 'Премиум портфолио (темная тема)',
    galleryFile: 'Gallery.jsx',
    appFile: 'App.jsx'
  }
};

function switchGallery(variant) {
  const srcDir = path.join(__dirname, 'src');
  const componentsDir = path.join(srcDir, 'components');
  
  const currentGalleryPath = path.join(componentsDir, 'Gallery.jsx');
  const currentAppPath = path.join(srcDir, 'App.jsx');
  
  const targetGalleryPath = path.join(componentsDir, galleryVariants[variant].galleryFile);
  const targetAppPath = path.join(srcDir, galleryVariants[variant].appFile);
  
  // Проверяем существование файлов
  if (!fs.existsSync(targetGalleryPath)) {
    console.error(`❌ Файл Gallery не найден: ${targetGalleryPath}`);
    return;
  }
  
  if (!fs.existsSync(targetAppPath)) {
    console.error(`❌ Файл App не найден: ${targetAppPath}`);
    return;
  }
  
  try {
    // Создаем временные копии
    const tempGallery = path.join(componentsDir, 'Gallery-temp.jsx');
    const tempApp = path.join(srcDir, 'App-temp.jsx');
    
    fs.copyFileSync(currentGalleryPath, tempGallery);
    fs.copyFileSync(currentAppPath, tempApp);
    
    // Копируем выбранные варианты
    fs.copyFileSync(targetGalleryPath, currentGalleryPath);
    fs.copyFileSync(targetAppPath, currentAppPath);
    
    console.log(`✅ Дизайн галереи переключен на: ${galleryVariants[variant].name}`);
    console.log(`📁 Резервные копии: Gallery-temp.jsx, App-temp.jsx`);
    
  } catch (error) {
    console.error('❌ Ошибка при переключении дизайна галереи:', error.message);
  }
}

function showHelp() {
  console.log('🎨 Переключатель дизайна галереи\n');
  console.log('Использование: node switch-gallery.js [вариант]\n');
  console.log('Доступные варианты:');
  Object.entries(galleryVariants).forEach(([key, variant]) => {
    console.log(`  ${key.padEnd(10)} - ${variant.name}`);
  });
  console.log('\nПримеры:');
  console.log('  node switch-gallery.js original  # Вернуться к оригинальному дизайну');
  console.log('  node switch-gallery.js premium   # Применить премиум дизайн');
}

// Получаем аргумент командной строки
const variant = process.argv[2];

if (!variant || variant === '--help' || variant === '-h') {
  showHelp();
} else if (galleryVariants[variant]) {
  switchGallery(variant);
} else {
  console.error(`❌ Неизвестный вариант: ${variant}`);
  console.log('\nДоступные варианты:', Object.keys(galleryVariants).join(', '));
}