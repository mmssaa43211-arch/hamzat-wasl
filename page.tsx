import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>مرحباً بك في منصة همزة وصل</h1>
      <p>تم الانتهاء من النسخة التجريبية بالكامل.</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/login" style={{ margin: '10px', padding: '10px 20px', border: '1px solid #ccc' }}>
          تسجيل الدخول
        </a>
        <a href="/register" style={{ margin: '10px', padding: '10px 20px', border: '1px solid #ccc' }}>
          تسجيل
        </a>
      </div>
    </div>
  );
}
