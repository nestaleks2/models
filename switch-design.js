#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const designVariants = {
  original: {
    name: 'Оригинальный дизайн',
    file: 'style-original.css'
  },
  variant1: {
    name: 'Вариант 1: Карточки с группировкой',
    file: 'style-backup.css'
  },
  variant2: {
    name: 'Вариант 2: Современный с тегами',
    file: 'style-variant2.css'
  }
};

function switchDesign(variant) {
  const cssDir = path.join(__dirname, 'css');
  const currentStylePath = path.join(cssDir, 'style.css');
  const targetStylePath = path.join(cssDir, designVariants[variant].file);
  
  if (!fs.existsSync(targetStylePath)) {
    console.error(`❌ Файл ${targetStylePath} не найден!`);
    return;
  }
  
  try {
    // Создаем временную копию текущего дизайна
    const tempBackup = path.join(cssDir, 'style-temp.css');
    fs.copyFileSync(currentStylePath, tempBackup);
    
    // Копируем выбранный дизайн
    fs.copyFileSync(targetStylePath, currentStylePath);
    
    console.log(`✅ Дизайн переключен на: ${designVariants[variant].name}`);
    console.log(`📁 Резервная копия: css/style-temp.css`);
    
  } catch (error) {
    console.error('❌ Ошибка при переключении дизайна:', error.message);
  }
}

function showHelp() {
  console.log('🎨 Переключатель дизайна страницы модели\n');
  console.log('Использование: node switch-design.js [вариант]\n');
  console.log('Доступные варианты:');
  Object.entries(designVariants).forEach(([key, variant]) => {
    console.log(`  ${key.padEnd(10)} - ${variant.name}`);
  });
  console.log('\nПримеры:');
  console.log('  node switch-design.js original   # Вернуться к оригинальному дизайну');
  console.log('  node switch-design.js variant1   # Применить карточный дизайн');
  console.log('  node switch-design.js variant2   # Применить современный дизайн с тегами');
}

// Получаем аргумент командной строки
const variant = process.argv[2];

if (!variant || variant === '--help' || variant === '-h') {
  showHelp();
} else if (designVariants[variant]) {
  switchDesign(variant);
} else {
  console.error(`❌ Неизвестный вариант: ${variant}`);
  console.log('\nДоступные варианты:', Object.keys(designVariants).join(', '));
}