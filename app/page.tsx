'use client';
import React, { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, user: 'مساعد همزة وصل', icon: '🤖', badge: 'مطور', time: 'اليوم، 9:45 م', text: 'يا هلا والله يا متعب! الواجهة الحين منورة وجاهزة للتجربة والجلد. جرب اكتب في خانة المحادثة تحت وشوف الفخامة! 👇' }
  ]);

  const handleSend = () => {
    if (!text.trim()) return;
    setMessages([...messages, {
      id: Date.now(),
      user: 'متعب',
      icon: 'M',
      badge: 'صاحب المنصة',
      time: 'الآن',
      text: text
    }]);
    setText('');
  };

  return (
    <div className="flex h-screen bg-[#313338] text-[#dbdee1] font-sans antialiased selection:bg-[#5865f2] selection:text-white" dir="rtl">
      
      {/* 1. قائمة السيرفرات */}
      <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 gap-2 shrink-0">
        <div className="w-12 h-12 bg-[#5865f2] rounded-[16px] flex items-center justify-center text-white font-bold cursor-pointer" title="الرئيسية">🌐</div>
        <div className="w-8 h-[2px] bg-[#35363c] rounded my-1" />
        <div className="w-12 h-12 bg-[#2b2d31] rounded-[24px] flex items-center justify-center text-xl cursor-pointer hover:bg-[#23a55a] hover:rounded-[16px] hover:text-white" title="سيرفر الدعم">🤝</div>
        <div className="w-12 h-12 bg-[#2b2d31] rounded-[24px] flex items-center justify-center text-xl cursor-pointer hover:bg-[#5865f2] hover:rounded-[16px] hover:text-white" title="إضافة سيرفر">➕</div>
      </div>

      {/* 2. قائمة القنوات */}
      <div className="w-60 bg-[#2b2d31] flex flex-col shrink-0">
        <div className="h-12 border-b border-[#1f2023] flex items-center justify-between px-4 font-bold text-white shadow-sm">
          <span>منصة همزة وصل</span>
          <span className="text-sm">🔽</span>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4">
          <div>
            <div className="text-xs font-bold text-[#949ba4] px-2 mb-1">#️⃣ القنوات النصية</div>
            <div className="space-y-[2px]">
              <div className="bg-[#404249] text-white px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer text-sm font-medium">💬 المحادثة-العامة</div>
              <div className="text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1] px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer text-sm font-medium transition-colors">📢 الإعلانات</div>
              <div className="text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1] px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer text-sm font-medium transition-colors">🛠️ الدعم-الفني</div>
            </div>
          </div>
        </div>
        {/* بروفايل المستخدم */}
        <div className="h-14 bg-[#232428] flex items-center justify-between px-2 gap-2">
          <div className="flex items-center gap-2 p-1 rounded flex-1">
            <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center text-white font-bold text-xs">M</div>
            <div className="flex flex-col text-right">
              <span className="text-sm font-bold text-white">متعب</span>
              <span className="text-xs text-[#949ba4]">#0001</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#b5bac1]">
            <button className="p-1.5 hover:bg-[#35373c] rounded">🎙️</button>
            <button className="p-1.5 hover:bg-[#35373c] rounded">⚙️</button>
          </div>
        </div>
      </div>

      {/* 3. منطقة الدردشة */}
      <div className="flex-1 bg-[#313338] flex flex-col min-w-0">
        <div className="h-12 border-b border-[#1f2023] flex items-center px-4 gap-2 shadow-sm shrink-0">
          <span className="text-xl text-[#80848e]">#</span>
          <span className="font-bold text-white text-md">المحادثة-العامة</span>
        </div>

        {/* عرض الرسائل الحية */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col justify-end">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#5865f2] rounded-full flex items-center justify-center text-white font-bold text-md shrink-0">
                {msg.icon}
              </div>
              <div className="flex flex-col text-right">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-white text-sm">{msg.user}</span>
                  <span className="text-[10px] bg-[#5865f2] text-white px-1 rounded font-medium">{msg.badge}</span>
                  <span className="text-xs text-[#949ba4]">{msg.time}</span>
                </div>
                <p className="text-sm text-[#dbdee1] mt-1">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* خانة الكتابة الشغالة */}
        <div className="p-4 bg-[#313338] shrink-0">
          <div className="bg-[#383a40] rounded-lg px-4 py-2.5 flex items-center gap-4">
            <input 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب رسالتك هنا في #المحادثة-العامة..." 
              className="bg-transparent flex-1 outline-none text-[#dbdee1] placeholder-[#80848e] text-sm text-right"
            />
            <button 
              onClick={handleSend}
              className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-4 py-1 rounded text-sm font-medium transition-colors"
            >
              إرسال
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
