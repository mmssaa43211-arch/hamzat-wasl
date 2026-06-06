```tsx
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <div className="w-full max-w-md bg-card border border-border p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-headline font-bold text-foreground mb-2">إنشاء حساب جديد</h2>
          <p className="text-sm text-muted-foreground">انضم إلى مجتمع همزة وصل الذكي وابدأ محادثاتك</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-right">اسم المستخدم</label>
            <input type="text" className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary" placeholder="mutab_alharbi" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-right">البريد الإلكتروني</label>
            <input type="email" className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-right">كلمة المرور</label>
            <input type="password" className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" />
          </div>
          
          <button className="w-full bg-primary text-primary-foreground text-center font-medium py-2.5 rounded-lg hover:opacity-90 transition mt-2">
            تأكيد الحساب والإنضمام
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-6">
          تملك حساباً بالفعل؟ <Link href="/login" className="text-primary hover:underline font-medium">سجل دخولك من هنا</Link>
        </p>
      </div>
    </div>
  )
}
