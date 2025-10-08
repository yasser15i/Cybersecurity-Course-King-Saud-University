import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Language Switcher */}
          <div className="flex-shrink-0">
            <LanguageSwitcher />
          </div>

          {/* King Saud University Official Logo - Centered */}
          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/ar/thumb/6/69/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%84%D9%83_%D8%B3%D8%B9%D9%88%D8%AF.svg/1200px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%84%D9%83_%D8%B3%D8%B9%D9%88%D8%AF.svg.png"
              alt={t('header.subtitle')}
              className="h-16 w-auto sm:h-18 sm:w-auto md:h-20 md:w-auto lg:h-22 lg:w-auto xl:h-24 xl:w-auto object-contain filter drop-shadow-none"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Spacer for balance */}
          <div className="flex-shrink-0 w-[100px]"></div>
        </div>
      </div>
    </header>
  );
}
