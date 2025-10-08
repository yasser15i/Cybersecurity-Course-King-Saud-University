import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium"
      title={t('language.arabic') === language ? 'Switch to English' : 'التبديل للعربية'}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'ar' ? 'EN' : 'عر'}</span>
    </button>
  );
}
