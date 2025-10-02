import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Проверяем что корневой элемент существует
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

// Создаем и рендерим приложение
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
