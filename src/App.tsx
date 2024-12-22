import React, { useEffect } from 'react';
import { WebApp } from '@twa-dev/sdk';
import { CategoryList } from './components/CategoryList';
import { MenuList } from './components/MenuList';
import { OrderStatus } from './components/OrderStatus';
import { useStore } from './store/useStore';

function App() {
  useEffect(() => {
    // Initialize Telegram Web App
    WebApp.ready();
    
    // Set up the main button
    WebApp.MainButton.setText('View Cart');
    WebApp.MainButton.onClick(() => {
      // Handle cart view
    });
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