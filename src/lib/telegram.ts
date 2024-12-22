import { WebApp } from '@twa-dev/sdk';

export function initTelegramWebApp() {
  WebApp.ready();
  
  // تهيئة زر السلة الرئيسي
  WebApp.MainButton.setText('عرض السلة');
  WebApp.MainButton.show();
  
  return WebApp;
}

export function showMainButton() {
  WebApp.MainButton.show();
}

export function hideMainButton() {
  WebApp.MainButton.hide();
}

export function setMainButtonText(text: string) {
  WebApp.MainButton.setText(text);
}