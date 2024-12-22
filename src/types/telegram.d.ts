interface TelegramWebApp {
    ready: () => void;
    MainButton: {
      text: string;
      setText: (text: string) => void;
      show: () => void;
      hide: () => void;
      onClick: (callback: () => void) => void;
    };
  }
  
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }