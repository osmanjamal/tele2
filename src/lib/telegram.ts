import { WebApp } from '@twa-dev/sdk';

export function initTelegramWebApp() {
  try {
    if (!window.Telegram?.WebApp) {
      console.warn('Telegram WebApp is not available');
      return null;
    }

    // تهيئة WebApp
    window.Telegram.WebApp.ready();
    
    // تهيئة زر السلة الرئيسي
    window.Telegram.WebApp.MainButton.setText('عرض السلة');
    window.Telegram.WebApp.MainButton.show();
    
    return window.Telegram.WebApp;
  } catch (error) {
    console.error('Error initializing Telegram WebApp:', error);
    return null;
  }
}

export function showMainButton() {
  try {
    window.Telegram?.WebApp?.MainButton?.show();
  } catch (error) {
    console.error('Error showing main button:', error);
  }
}

export function hideMainButton() {
  try {
    window.Telegram?.WebApp?.MainButton?.hide();
  } catch (error) {
    console.error('Error hiding main button:', error);
  }
}

export function setMainButtonText(text: string) {
  try {
    window.Telegram?.WebApp?.MainButton?.setText(text);
  } catch (error) {
    console.error('Error setting main button text:', error);
  }
}