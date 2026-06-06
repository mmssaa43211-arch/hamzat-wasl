```tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6 text-center">
      <h1 className="text-5xl font-headline font-bold text-primary mb-6">همزة وصل</h1>
      <p className="text-xl max-w-md text-muted-foreground mb-8">اربط مجتمعك بهمسة وصل ذكية. منصة محادثات متكاملة تدعم المساعد الثقافي الذكي.</p>
      <div className="flex gap-4">
        <Link href="/login" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">تسجيل الدخول</Link>
        <Link href="/register" className="px-6 py-3 bg-muted text-foreground border border-border rounded-lg font-medium hover:bg-muted/80 transition">إنشاء حساب جديد</Link>
      </div>
    </div>
  )
}
