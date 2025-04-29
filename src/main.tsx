
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Добавляем защиту от утечки localStorage в режиме SSR
const isLocalStorageAvailable = () => {
  try {
    const testKey = '__test_storage__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

// Инициализируем localStorage для отзывов, если он пуст
if (isLocalStorageAvailable() && !localStorage.getItem('feedbacks')) {
  localStorage.setItem('feedbacks', '[]');
  console.log('Initialized empty feedbacks array in localStorage');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
