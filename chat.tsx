```tsx
import { useState } from 'react'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'أهلاً بك في منصة همزة وصل الفخمة! كيف يمكنني مساعدتك اليوم؟', sender: 'ai' },
  ])
  const [inputText, setInputText] = useState('')

  const handleSend = () => {
    if (!inputText.trim()) return
    
    const userMessage = { id: Date.now(), text: inputText, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputText('')

    // محاكاة رد ذكي سريع
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: 'مرحباً بك! أنا مساعدك الذكي في همزة وصل، جاري معالجة طلبك بدقة.',
        sender: 'ai'
      }])
    }, 1000)
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* القائمة الجانبية للمحادثات */}
      <div className="w-64 bg-card border-l border-border hidden md:flex flex-col p-4">
        <h2 className="text-xl font-headline font-bold text-primary mb-4 text-right">غرف المحادثة</h2>
        <div className="flex-1 space-y-2">
          <div className="p-3 bg-muted rounded-lg text-right cursor-pointer border border-primary/30">💬 المساعد الثقافي الذكي</div>
          <div className="p-3 bg-transparent hover:bg-muted/50 rounded-lg text-right cursor-pointer transition">👥 المجلس العام</div>
        </div>
        <div className="pt-4 border-t border-border text-sm text-muted-foreground text-center">همزة وصل v1.0</div>
      </div>

      {/* منطقة الشات الرئيسية */}
      <div className="flex-1 flex flex-col h-full">
        {/* البار العلوي */}
        <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">متصل الآن</div>
          <h1 className="text-lg font-headline font-bold text-foreground">المساعد الثقافي الذكي</h1>
        </div>

        {/* عرض الرسائل */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-md p-4 rounded-xl text-right ${
                msg.sender === 'user' 
                  ? 'bg-primary text-primary-foreground rounded-bl-none' 
                  : 'bg-card border border-border text-foreground rounded-br-none'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* صندوق الإدخال الأسفل */}
        <div className="p-4 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto flex gap-3">
            <button onClick={handleSend} className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
              إرسال
            </button>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-input border border-border rounded-lg px-4 py-2 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary" 
              placeholder="اكتب همستك هنا..." 
            />
          </div>
        </div>
      </div>
    </div>
  )
}
