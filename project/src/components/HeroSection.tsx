import { Shield, Sparkles, Award } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-12 sm:pt-14 md:pt-16 lg:pt-18 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden flex items-center">
      {/* King Saud University Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://www.rowadalaamal.com/wp-content/uploads/2023/12/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D9%83-%D8%B3%D8%B9%D9%88%D8%AF.jpg)'
        }}
      ></div>
      
      {/* Blue overlay with transparency */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/80 via-[#004080]/75 to-[#0059b3]/80"></div>
      
      {/* Subtle background shapes - reduced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-16 h-16 border border-white/5 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-10 w-12 h-12 border border-cyan-200/10 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Subtle background effects for image overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-cyan-300/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-blue-300/15 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center text-white">
          
          {/* Clean Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/30 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span className="text-sm font-medium">الإدارة العامة للأمن السيبراني</span>
          </div>

          {/* Clean Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slideUp">
            <span className="block mb-3 text-white">
              مبادرة الأمن السيبراني
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl text-cyan-200 font-light animate-fadeIn delay-1000">
              لتمكين الكوادر الوطنية
            </span>
          </h1>

          {/* Clean Description */}
          <div className="max-w-4xl mx-auto mb-12 animate-fadeIn delay-1500">
            <p className="text-lg md:text-xl text-cyan-50 leading-relaxed px-4">
              نسعى لدعم الابتكار ورفع كفاءة الكوادر الوطنية في مجال الأمن السيبراني من خلال برامج تدريبية متقدمة وورش عمل تفاعلية
            </p>
          </div>

          {/* Clean Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 animate-scaleIn delay-2000">
            
            {/* Primary Action Button */}
            <button
              onClick={() => onNavigate('register')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:scale-105 min-w-[250px]"
            >
              <span className="flex items-center justify-center gap-2">
                التسجيل في المبادرة
                <Sparkles className="w-5 h-5" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-2">
                التعريف بالمبادرة
                <Shield className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('certificates')}
              className="w-full sm:w-auto px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-2">
                الشهادات والدعم
                <Award className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Simple Trust Indicators */}
          <div className="mt-16 animate-fadeIn delay-3000">
            <div className="flex flex-wrap justify-center items-center gap-6 text-cyan-200/80">
              <span className="text-sm">جامعة الملك سعود</span>
              <span className="text-sm">شهادات معتمدة</span>
              <span className="text-sm">خبراء متخصصون</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
    </section>
  );
}
