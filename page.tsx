import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>مرحباً بك في منصة همزة وصل</h1>
      <p>تم الانتهاء من النسخة التجريبية بالكامل.</p>
      <div style={{ marginTop: '20px' }}>
        <Link href="/login" style={{ margin: '10px', padding: '10px 20px', border: '1px solid #ccc' }}>
          تسجيل الدخول
        </Link>
        <Link href="/register" style={{ margin: '10px', padding: '10px 20px', border: '1px solid #ccc' }}>
          تسجيل
        </Link>
      </div>
    </div>
  );
}
