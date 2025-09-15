import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'kz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.marketplace': 'Marketplace',
    'nav.dashboard': 'Dashboard',
    'nav.about': 'About',
    'nav.connectWallet': 'Connect Wallet',
    
    // Hero Section
    'hero.badge': '🏢 Real Estate Tokenization Platform',
    'hero.title1': "Invest in Astana's",
    'hero.title2': 'All New Real Estate',
    'hero.subtitle': 'Invest in new Astana real estate with fractional ownership. Buy, sell, and earn rental income through blockchain tokenization.',
    'hero.tagline': '"Modular ownership. Real estate for everyone."',
    'hero.explore': 'Explore Properties',
    'hero.demo': 'Watch Demo',
    'hero.stats.tokenized': 'Assets Tokenized',
    'hero.stats.investors': 'Active Investors',
    'hero.stats.properties': 'Properties Listed',
    
    // Wallet
    'wallet.welcome': 'Welcome to Modular Real Estate',
    'wallet.connecting': 'Connecting to Phantom...',
    'wallet.connected': 'Wallet Connected!',
    'wallet.tutorial.title': 'First-time Buyer Tutorial',
    'wallet.tutorial.step1': 'Like assembling a yurt, real estate investment is modular',
    'wallet.tutorial.step2': 'Each property is divided into tokens (modules)',
    'wallet.tutorial.step3': 'Collect modules to build your portfolio',
    
    // Transaction
    'transaction.buying': "You're buying {count} modules of {property}",
    'transaction.building': 'Building your yurt...',
    'transaction.success': 'Welcome to the community!',
    'transaction.preview': 'Transaction Preview',
    'transaction.confirm': 'Confirm Purchase',
    
    // Features
    'features.ar': 'View in Augmented Reality',
    'features.social': '{count} other builders own modules here',
    'features.demoMode': 'Demo Mode',
    'features.exportPdf': 'Export Portfolio as PDF',
    
    // Hackathon
    'hackathon.built': 'Built for Solana Day 2025',
    'hackathon.performance': 'Performance Metrics',
  },
  kz: {
    // Navigation
    'nav.marketplace': 'Нарық',
    'nav.dashboard': 'Басқару тақтасы',
    'nav.about': 'Біз туралы',
    'nav.connectWallet': 'Әмиянды қосу',
    
    // Hero Section
    'hero.badge': '🏢 Жылжымайтын мүлік токенизация платформасы',
    'hero.title1': 'Астананың',
    'hero.title2': 'Барлық жаңа жылжымайтын мүлікке инвестиция',
    'hero.subtitle': 'Астананың жаңа жылжымайтын мүлкіне бөлшектеп меншік ету арқылы инвестиция салыңыз. Блокчейн токенизациясы арқылы сатып алыңыз, сатыңыз және жалға беру табысын алыңыз.',
    'hero.tagline': '"Модульдік меншік. Барлығына арналған жылжымайтын мүлік."',
    'hero.explore': 'Мүлікті зерттеу',
    'hero.demo': 'Демо көру',
    'hero.stats.tokenized': 'Токенизацияланған активтер',
    'hero.stats.investors': 'Белсенді инвесторлар',
    'hero.stats.properties': 'Тізімделген мүлік',
    
    // Wallet
    'wallet.welcome': 'Модульдік жылжымайтын мүлікке қош келдіңіз',
    'wallet.connecting': 'Phantom-ға қосылу...',
    'wallet.connected': 'Әмиян қосылды!',
    'wallet.tutorial.title': 'Алғашқы сатып алушы оқулығы',
    'wallet.tutorial.step1': 'Киіз үйді құрастыру сияқты, жылжымайтын мүлікке инвестиция да модульдік',
    'wallet.tutorial.step2': 'Әрбір мүлік токендерге (модульдерге) бөлінеді',
    'wallet.tutorial.step3': 'Портфолионыз құру үшін модульдерді жинаңыз',
    
    // Transaction
    'transaction.buying': 'Сіз {property} жобасының {count} модулін сатып аласыз',
    'transaction.building': 'Киіз үйіңізді құрып жатырмыз...',
    'transaction.success': 'Қауымдастыққа қош келдіңіз!',
    'transaction.preview': 'Транзакцияны алдын ала көру',
    'transaction.confirm': 'Сатып алуды растау',
    
    // Features
    'features.ar': 'Толықтырылған шындықта көру',
    'features.social': 'Мұнда тағы {count} құрушы модульдерге ие',
    'features.demoMode': 'Демо режимі',
    'features.exportPdf': 'Портфолионы PDF-ке экспорттау',
    
    // Hackathon
    'hackathon.built': 'Solana Day 2025 үшін жасалған',
    'hackathon.performance': 'Өнімділік көрсеткіштері',
  },
  ru: {
    // Navigation
    'nav.marketplace': 'Маркетплейс',
    'nav.dashboard': 'Панель управления',
    'nav.about': 'О нас',
    'nav.connectWallet': 'Подключить кошелек',
    
    // Hero Section
    'hero.badge': '🏢 Платформа токенизации недвижимости',
    'hero.title1': 'Инвестируйте в',
    'hero.title2': 'Вся новая недвижимость Астаны',
    'hero.subtitle': 'Инвестируйте в новую недвижимость Астаны с долевым владением. Покупайте, продавайте и получайте доходы от аренды через блокчейн токенизацию.',
    'hero.tagline': '"Модульная собственность. Недвижимость для всех."',
    'hero.explore': 'Исследовать недвижимость',
    'hero.demo': 'Смотреть демо',
    'hero.stats.tokenized': 'Токенизированные активы',
    'hero.stats.investors': 'Активные инвесторы',
    'hero.stats.properties': 'Объекты в списке',
    
    // Wallet
    'wallet.welcome': 'Добро пожаловать в модульную недвижимость',
    'wallet.connecting': 'Подключение к Phantom...',
    'wallet.connected': 'Кошелек подключен!',
    'wallet.tutorial.title': 'Руководство для начинающих',
    'wallet.tutorial.step1': 'Как сборка юрты, инвестиции в недвижимость модульны',
    'wallet.tutorial.step2': 'Каждая недвижимость разделена на токены (модули)',
    'wallet.tutorial.step3': 'Собирайте модули для построения портфолио',
    
    // Transaction
    'transaction.buying': 'Вы покупаете {count} модулей {property}',
    'transaction.building': 'Строим вашу юрту...',
    'transaction.success': 'Добро пожаловать в сообщество!',
    'transaction.preview': 'Предварительный просмотр транзакции',
    'transaction.confirm': 'Подтвердить покупку',
    
    // Features
    'features.ar': 'Просмотр в дополненной реальности',
    'features.social': 'Еще {count} строителей владеют модулями здесь',
    'features.demoMode': 'Демо режим',
    'features.exportPdf': 'Экспорт портфолио в PDF',
    
    // Hackathon
    'hackathon.built': 'Создано для Solana Day 2025',
    'hackathon.performance': 'Метрики производительности',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};