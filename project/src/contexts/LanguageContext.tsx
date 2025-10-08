import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ترجمات الموقع
const translations = {
  ar: {
    // Header
    'header.title': 'مبادرة الأمن السيبراني',
    'header.subtitle': 'جامعة الملك سعود',

    // Hero Section
    'hero.badge': 'الإدارة العامة للأمن السيبراني',
    'hero.title': 'مبادرة الأمن السيبراني',
    'hero.subtitle': 'لتمكين الكوادر الوطنية',
    'hero.description': 'نسعى لدعم الابتكار ورفع كفاءة الكوادر الوطنية في مجال الأمن السيبراني من خلال برامج تدريبية متقدمة وورش عمل تفاعلية',
    'hero.registerButton': 'التسجيل في المبادرة',
    'hero.aboutButton': 'التعريف بالمبادرة',
    'hero.certificatesButton': 'الشهادات والدعم',
    'hero.trust.university': 'جامعة الملك سعود',
    'hero.trust.certificates': 'شهادات معتمدة',
    'hero.trust.experts': 'خبراء متخصصون',

    // About Section
    'about.title': 'عن المبادرة',
    'about.subtitle': 'مبادرة رائدة تهدف إلى تطوير الكفاءات الوطنية في مجال الأمن السيبراني وتعزيز الوعاء بأهمية حماية المعلومات',
    'about.goal.title': 'الهدف',
    'about.goal.description': 'تطوير الكفاءات الوطنية وتأهيلها للعمل في مجال الأمن السيبراني من خلال برامج تدريبية متخصصة',
    'about.vision.title': 'الرؤية',
    'about.vision.description': 'أن نكون المرجع الأول في تطوير وتأهيل الكوادر الوطنية في مجال الأمن السيبراني',

    // Register Section
    'register.title': 'التسجيل في المبادرة',
    'register.subtitle': 'انضم إلى مبادرة الأمن السيبراني وكن جزءاً من المستقبل الرقمي الآمن',

    // Certificates Section
    'certificates.title': 'الشهادات والدعم',
    'certificates.subtitle': 'احصل على شهادة معتمدة من جامعة الملك سعود بعد إتمام البرنامج بنجاح',
    'certificates.certified.title': 'الشهادات المعتمدة',
    'certificates.certified.attendance': 'شهادة الحضور',
    'certificates.certified.attendance.desc': 'تُمنح لجميع المشاركين الذين حضروا البرنامج بشكل كامل وتفاعلوا مع الأنشطة المقدمة',
    'certificates.certified.achievement': 'شهادة الإنجاز',
    'certificates.certified.achievement.desc': 'تُمنح للمشاركين الذين اجتازوا التقييمات والاختبارات بنجاح وأكملوا المشاريع التطبيقية',
    'certificates.certified.excellence': 'شهادة التميز',
    'certificates.certified.excellence.desc': 'تُمنح للمشاركين المتميزين الذين أظهروا إنجازات استثنائية ومهارات متقدمة',
    'certificates.support.title': 'الدعم والمتابعة',
    'certificates.support.description': 'نقدم الدعم المستمر للمشاركين من خلال فريق متخصص',
    'certificates.support.technical': 'دعم فني',
    'certificates.support.technical.desc': 'مساعدة في حل المشاكل التقنية والاستفسارات',
    'certificates.support.career': 'التوجيه المهني',
    'certificates.support.career.desc': 'إرشاد حول الفرص الوظيفية في مجال الأمن السيبراني',
    'certificates.support.followup': 'متابعة مستمرة',
    'certificates.support.followup.desc': 'متابعة تقدمك وتقديم التوجيه اللازم',
    'certificates.contact.title': 'تواصل معنا',
    'certificates.contact.description': 'للحصول على الدعم أو الاستفسارات',
    'certificates.contact.email': 'البريد الإلكتروني',
    'certificates.contact.phone': 'الهاتف',

    // Language Switcher
    'language.arabic': 'العربية',
    'language.english': 'English'
  },
  en: {
    // Header
    'header.title': 'Cybersecurity Initiative',
    'header.subtitle': 'King Saud University',

    // Hero Section
    'hero.badge': 'General Directorate of Cybersecurity',
    'hero.title': 'Cybersecurity Initiative',
    'hero.subtitle': 'Empowering National Cadres',
    'hero.description': 'We seek to support innovation and raise the efficiency of national cadres in the field of cybersecurity through advanced training programs and interactive workshops',
    'hero.registerButton': 'Register in the Initiative',
    'hero.aboutButton': 'About the Initiative',
    'hero.certificatesButton': 'Certificates and Support',
    'hero.trust.university': 'King Saud University',
    'hero.trust.certificates': 'Certified Certificates',
    'hero.trust.experts': 'Specialized Experts',

    // About Section
    'about.title': 'About the Initiative',
    'about.subtitle': 'A pioneering initiative aimed at developing national competencies in cybersecurity and raising awareness of the importance of information protection',
    'about.goal.title': 'Goal',
    'about.goal.description': 'Develop and qualify national competencies to work in the cybersecurity field through specialized training programs',
    'about.vision.title': 'Vision',
    'about.vision.description': 'To be the first reference in developing and qualifying national cadres in cybersecurity',

    // Register Section
    'register.title': 'Register in the Initiative',
    'register.subtitle': 'Join the Cybersecurity Initiative and be part of the secure digital future',

    // Certificates Section
    'certificates.title': 'Certificates and Support',
    'certificates.subtitle': 'Get a certified certificate from King Saud University after successfully completing the program',
    'certificates.certified.title': 'Certified Certificates',
    'certificates.certified.attendance': 'Attendance Certificate',
    'certificates.certified.attendance.desc': 'Awarded to all participants who attended the program completely and interacted with the activities provided',
    'certificates.certified.achievement': 'Achievement Certificate',
    'certificates.certified.achievement.desc': 'Awarded to participants who successfully passed assessments and tests and completed practical projects',
    'certificates.certified.excellence': 'Excellence Certificate',
    'certificates.certified.excellence.desc': 'Awarded to outstanding participants who demonstrated exceptional achievements and advanced skills',
    'certificates.support.title': 'Support and Follow-up',
    'certificates.support.description': 'We provide continuous support to participants through a specialized team',
    'certificates.support.technical': 'Technical Support',
    'certificates.support.technical.desc': 'Help with technical problems and inquiries',
    'certificates.support.career': 'Career Guidance',
    'certificates.support.career.desc': 'Guidance on career opportunities in cybersecurity',
    'certificates.support.followup': 'Continuous Follow-up',
    'certificates.support.followup.desc': 'Follow up on your progress and provide necessary guidance',
    'certificates.contact.title': 'Contact Us',
    'certificates.contact.description': 'For support or inquiries',
    'certificates.contact.email': 'Email',
    'certificates.contact.phone': 'Phone',

    // Language Switcher
    'language.arabic': 'العربية',
    'language.english': 'English'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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
