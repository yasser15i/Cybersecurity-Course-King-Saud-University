import { Award, CheckCircle, Mail, Phone, Shield, HelpCircle } from 'lucide-react';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] mb-4 leading-tight">
              الشهادات والدعم
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4">
              احصل على شهادة معتمدة من جامعة الملك سعود بعد إتمام البرنامج بنجاح
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-[#003366] to-[#0059b3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-200" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">الشهادات المعتمدة</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-200" />
                    شهادة الحضور
                  </h4>
                  <p className="text-cyan-50 leading-relaxed">
                    تُمنح لجميع المشاركين الذين حضروا البرنامج بشكل كامل وتفاعلوا مع الأنشطة المقدمة
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-200" />
                    شهادة الإنجاز
                  </h4>
                  <p className="text-cyan-50 leading-relaxed">
                    تُمنح للمشاركين الذين اجتازوا التقييمات والاختبارات بنجاح وأكملوا المشاريع التطبيقية
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-200" />
                    شهادة التميز
                  </h4>
                  <p className="text-cyan-50 leading-relaxed">
                    تُمنح للمشاركين المتميزين الذين حققوا أعلى الدرجات وأظهروا تفوقاً استثنائياً
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <h4 className="text-lg font-bold mb-3">مميزات الشهادة</h4>
                <ul className="space-y-2 text-cyan-50">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>موثقة ومعتمدة من جامعة الملك سعود</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>تحتوي على رمز QR للتحقق من صحتها</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>يمكن إضافتها للسيرة الذاتية والملف الشخصي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>متاحة بصيغة رقمية عالية الجودة</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-t-4 border-cyan-500">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003366] leading-tight">الدعم الفني</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  نوفر دعماً فنياً شاملاً لجميع المشاركين طوال فترة البرنامج وبعده
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <Mail className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#003366] mb-1">البريد الإلكتروني</h4>
                      <p className="text-gray-600 text-sm">aalyausi.c@ksu.sa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <Phone className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#003366] mb-1">الهاتف</h4>
                      <p className="text-gray-600 text-sm">515151</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-[#003366]">
                <h3 className="text-2xl font-bold text-[#003366] mb-6">خدمات الدعم</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">دعم فني متواصل</h4>
                      <p className="text-gray-600 text-sm">متاح طوال أيام الأسبوع للإجابة على استفساراتك</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">استشارات تخصصية</h4>
                      <p className="text-gray-600 text-sm">جلسات استشارية مع خبراء الأمن السيبراني</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">موارد تعليمية</h4>
                      <p className="text-gray-600 text-sm">مكتبة شاملة من المراجع والمواد التعليمية</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">متابعة مستمرة</h4>
                      <p className="text-gray-600 text-sm">متابعة تقدمك وتقديم التوجيه اللازم</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
