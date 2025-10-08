import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function RegisterSection() {
  const { t } = useLanguage();

  const handleRegisterClick = () => {
    // رابط Microsoft Forms الرسمي
    const formUrl = 'https://forms.cloud.microsoft/r/JjNYycZiD9';
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] mb-4 leading-tight">
              {t('register.title')}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-4 max-w-3xl mx-auto">
              {t('register.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border-t-4 border-[#003366] text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#0059b3] rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-4">
                انضم إلى المبادرة الآن
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                اضغط على الزر أدناه للتسجيل في مبادرة الأمن السيبراني عبر النموذج الرسمي
              </p>
            </div>

            <button
              onClick={handleRegisterClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#003366] to-[#0059b3] text-white rounded-xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>التسجيل في المبادرة</span>
              <ArrowRight className="w-6 h-6" />
            </button>

            <p className="text-center text-gray-500 text-sm mt-6">
              سيتم فتح النموذج في نافذة جديدة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
