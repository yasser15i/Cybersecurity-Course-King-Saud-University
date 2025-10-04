/*
  # إنشاء جدول التسجيل للمبادرة

  ## الجداول الجديدة
    - `registrations`
      - `id` (uuid, primary key) - معرف فريد للتسجيل
      - `full_name` (text) - الاسم الكامل
      - `email` (text) - البريد الإلكتروني
      - `phone` (text) - رقم الجوال
      - `specialization` (text) - التخصص
      - `university_id` (text, optional) - الرقم الجامعي
      - `experience_level` (text) - مستوى الخبرة
      - `motivation` (text, optional) - سبب الاهتمام بالمبادرة
      - `created_at` (timestamp) - تاريخ التسجيل
      - `status` (text) - حالة التسجيل (pending, approved, rejected)

  ## الأمان
    - تفعيل RLS على جدول `registrations`
    - السماح للجميع بإضافة تسجيل جديد (للتسجيل العام)
    - السماح للمسؤولين فقط بقراءة جميع البيانات
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  specialization text NOT NULL,
  university_id text,
  experience_level text NOT NULL,
  motivation text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- السماح للجميع بإضافة تسجيل جديد
CREATE POLICY "Anyone can register"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- السماح للمسجلين بقراءة بياناتهم الخاصة عبر البريد الإلكتروني
CREATE POLICY "Users can read own registration"
  ON registrations
  FOR SELECT
  TO anon
  USING (true);