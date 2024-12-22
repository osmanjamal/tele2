import React, { useEffect } from 'react';
import { CategoryList } from './components/CategoryList';
import { MenuList } from './components/MenuList';
import { OrderStatus } from './components/OrderStatus';
import { useStore } from './store/useStore';
import { initTelegramWebApp } from './lib/telegram';

function App() {
  useEffect(() => {
    // تأخير تهيئة تيليجرام حتى يتم تحميل المكونات
    const timeoutId = setTimeout(() => {
      try {
        initTelegramWebApp();
      } catch (error) {
        console.error('Error initializing Telegram WebApp in App:', error);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl font-bold text-center">
          Beit Al Mahashi / بيت المحاشي
        </h1>
      </header>

      <main className="container mx-auto max-w-4xl">
        <CategoryList categories={[]} />
        <MenuList items={[]} />
      </main>
    </div>
  );
}

export default App;