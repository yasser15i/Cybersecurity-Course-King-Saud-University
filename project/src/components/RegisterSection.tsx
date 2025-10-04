import { useState } from 'react';
import { UserPlus, Mail, Phone, GraduationCap, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, type Registration } from '../lib/supabase';

export default function RegisterSection() {
  const [formData, setFormData] = useState<Registration>({
    full_name: '',
    email: '',
    phone: '',
    specialization: '',
    experience_level: 'beginner',
    motivation: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('registrations')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        specialization: '',
        experience_level: 'beginner',
        motivation: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="register" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] mb-4 leading-tight">
              التسجيل في المبادرة
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-4">
              سجل الآن للانضمام إلى مبادرة الأمن السيبراني وكن جزءاً من المستقبل الرقمي الآمن
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-green-50 border-r-4 border-green-500 rounded-lg flex items-start gap-4 animate-fadeIn">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-green-900 mb-1">تم التسجيل بنجاح!</h4>
                <p className="text-green-700">شكراً لتسجيلك. سنتواصل معك قريباً عبر البريد الإلكتروني.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 p-6 bg-red-50 border-r-4 border-red-500 rounded-lg flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-900 mb-1">خطأ في التسجيل</h4>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-t-4 border-[#003366]">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="full_name" className="flex items-center gap-2 text-lg font-bold text-[#003366] mb-2">
                    <UserPlus className="w-5 h-5" />
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#003366] focus:outline-none transition-colors text-lg"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-lg font-bold text-[#003366] mb-2">
                    <Mail className="w-5 h-5" />
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#003366] focus:outline-none transition-colors text-lg"
                    placeholder="aalyausi.c@ksu.sa"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-lg font-bold text-[#003366] mb-2">
                    <Phone className="w-5 h-5" />
                    رقم الجوال *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#003366] focus:outline-none transition-colors text-lg"
                    placeholder="515151"
                  />
                </div>

                <div>
                  <label htmlFor="specialization" className="flex items-center gap-2 text-lg font-bold text-[#003366] mb-2">
                    <GraduationCap className="w-5 h-5" />
                    التخصص *
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    required
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#003366] focus:outline-none transition-colors text-lg"
                    placeholder="علوم حاسب، أمن سيبراني، إلخ"
                  />
                </div>


                <div>
                  <label htmlFor="experience_level" className="flex items-center gap-2 text-lg font-bold text-[#003366] mb-2">
                    <GraduationCap className="w-5 h-5" />
                    مستوى الخبرة *
                  </label>
                  <select
                    id="experience_level"
                    name="experience_level"
                    required
                    value={formData.experience_level}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#003366] focus:outline-none transition-colors text-lg"
                  >
                    <option value="beginner">مبتدئ</option>
                    <option value="intermediate">متوسط</option>
                    <option value="advanced">متقدم</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="motivation" className="flex items-center gap-2 text-lg font-bold text-[#003366] mb-2">
                  <MessageSquare className="w-5 h-5" />
                  سبب الاهتمام بالمبادرة (اختياري)
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#003366] focus:outline-none transition-colors text-lg resize-none"
                  placeholder="أخبرنا عن دوافعك للانضمام للمبادرة..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-[#003366] to-[#0059b3] text-white rounded-xl font-bold text-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {loading ? 'جاري التسجيل...' : 'تأكيد التسجيل'}
              </button>

              <p className="text-center text-gray-600 text-sm">
                بتسجيلك في المبادرة، فإنك توافق على شروط وأحكام البرنامج
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
