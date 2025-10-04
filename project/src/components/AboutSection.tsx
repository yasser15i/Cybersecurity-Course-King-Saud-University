import { BookOpen, Target, Lightbulb, Users, Award, Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] mb-4 leading-tight">
              عن المبادرة
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              مبادرة رائدة تهدف إلى تطوير الكفاءات الوطنية في مجال الأمن السيبراني وتعزيز الوعي بأهمية حماية المعلومات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#003366]">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#003366] to-[#0059b3] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-3 leading-tight">أهداف المبادرة</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                      <span>دعم الابتكار في مجال الأمن السيبراني</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                      <span>رفع كفاءة الكوادر الوطنية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                      <span>تمكين المشاركين من تطوير مهاراتهم التقنية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                      <span>بناء مجتمع متخصص في الأمن السيبراني</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-cyan-500">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-3 leading-tight">رؤيتنا</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    أن نكون المبادرة الرائدة في المملكة لتطوير وتأهيل الكفاءات الوطنية في مجال الأمن السيبراني، والمساهمة في تحقيق رؤية المملكة 2030 لبناء مجتمع رقمي آمن.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#003366] to-[#0059b3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white mb-12 sm:mb-16 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center leading-tight">محاور المبادرة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-200 mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2 leading-tight">محتوى علمي وتطبيقي</h4>
                <p className="text-cyan-50 text-sm leading-relaxed">
                  دورات متخصصة تجمع بين النظرية والتطبيق العملي
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-200 mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2 leading-tight">ورش عمل تفاعلية</h4>
                <p className="text-cyan-50 text-sm leading-relaxed">
                  جلسات تدريبية عملية مع خبراء في المجال
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-200 mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2 leading-tight">موارد مرجعية</h4>
                <p className="text-cyan-50 text-sm leading-relaxed">
                  عروض تقديمية، كتيبات، ومراجع علمية متخصصة
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-200 mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2 leading-tight">برامج تمكين</h4>
                <p className="text-cyan-50 text-sm leading-relaxed">
                  برامج تدريبية متقدمة لتطوير المهارات المهنية
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-6 sm:mb-8 text-center leading-tight">المخرجات المتوقعة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#003366] mb-2 leading-tight">كوادر مؤهلة</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  تخريج كوادر وطنية مؤهلة في الأمن السيبراني
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#003366] mb-2 leading-tight">شهادات معتمدة</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  منح شهادات موثقة من الجامعة للمشاركين
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#003366] mb-2 leading-tight">شبكة تواصل</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  بناء مجتمع احترافي متخصص في المجال
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
