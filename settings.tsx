```tsx
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-right" direction="rtl">
      <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
        <Link href="/chat" className="text-sm bg-muted px-4 py-2 rounded-lg hover:bg-muted/80 transition">
          ← العودة للمحادثة
        </Link>
        <h1 className="text-3xl font-headline font-bold text-foreground">إعدادات الحساب</h1>
      </div>

      <div className="space-y-6">
        {/* قسم الملف الشخصي */}
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-headline font-bold text-primary mb-4">الملف الشخصي</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">الاسم المستعار</label>
              <input type="text" className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="مُتعب الحِربي" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">حالة الحساب</label>
              <input type="text" className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="متاح" />
            </div>
          </div>
        </div>

        {/* قسم المظهر والتخصيص */}
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-headline font-bold text-primary mb-4">المظهر والتخصيص</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm text-muted-foreground">مفعّل تلقائياً</span>
              <span className="font-medium text-foreground">الثيم الداكن الفخم (Dark Mode)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm text-muted-foreground">العربية (RTL)</span>
              <span className="font-medium text-foreground">لغة الواجهة الافتراضية</span>
            </div>
          </div>
        </div>

        {/* زر حفظ التغييرات */}
        <div className="flex justify-end">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition shadow-lg shadow-primary/20">
            حفظ كافة الإعدادات
          </button>
        </div>
      </div>
    </div>
  )
}
