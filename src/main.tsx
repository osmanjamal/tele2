import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initTelegramWebApp } from './lib/telegram'

// تأكد من تحميل سكريبت تيليجرام قبل تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initTelegramWebApp();
  }, 1000); // انتظر ثانية واحدة للتأكد من تحميل سكريبت تيليجرام
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)