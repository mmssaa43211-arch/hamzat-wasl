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
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#313338', color: '#dbdee1', fontFamily: 'sans-serif' }} dir="rtl">
      
      {/* 1. قائمة السيرفرات */}
      <div style={{ width: '72px', backgroundColor: '#1e1f22', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '12px', gap: '8px' }}>
        <div style={{ width: '48px', height: '48px', backgroundColor: '#5865f2', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>🌐</div>
        <div style={{ width: '32px', height: '2px', backgroundColor: '#35363c', margin: '4px 0' }} />
        <div style={{ width: '48px', height: '48px', backgroundColor: '#2b2d31', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', cursor: 'pointer' }}>🤝</div>
        <div style={{ width: '48px', height: '48px', backgroundColor: '#2b2d31', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', cursor: 'pointer' }}>➕</div>
      </div>

      {/* 2. قائمة القنوات */}
      <div style={{ width: '240px', backgroundColor: '#2b2d31', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '48px', borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', justifyContent: 'between', padding: '0 16px', fontWeight: 'bold', color: 'white' }}>
          <span>منصة همزة وصل</span>
        </div>
        <div style={{ flex: 1, padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#949ba4', padding: '0 8px', marginBottom: '4px' }}>#️⃣ القنوات النصية</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ backgroundColor: '#404249', color: 'white', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>💬 المحادثة-العامة</div>
              <div style={{ color: '#949ba4', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>📢 الإعلانات</div>
              <div style={{ color: '#949ba4', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>🛠️ الدعم-الفني</div>
            </div>
          </div>
        </div>
        {/* بروفايل متعب بالأسفل */}
        <div style={{ height: '56px', backgroundColor: '#232428', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#5865f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>M</div>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right', flex: 1 }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>متعب</span>
            <span style={{ fontSize: '12px', color: '#949ba4' }}>#0001</span>
          </div>
          <div style={{ color: '#b5bac1', display: 'flex', gap: '4px' }}>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '16px' }}>🎙️</button>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '16px' }}>⚙️</button>
          </div>
        </div>
      </div>

      {/* 3. منطقة الدردشة الرئيسية */}
      <div style={{ flex: 1, backgroundColor: '#313338', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '48px', borderBottom: '1px solid #1f2023', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px' }}>
          <span style={{ fontSize: '20px', color: '#80848e' }}>#</span>
          <span style={{ fontWeight: 'bold', color: 'white' }}>المحادثة-العامة</span>
        </div>

        {/* عرض الرسائل الحية */}
        <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'flex-end' }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#5865f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                {msg.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontWeight: 'bold', color: 'white', fontSize: '14px' }}>{msg.user}</span>
                  <span style={{ fontSize: '10px', backgroundColor: '#5865f2', color: 'white', padding: '0 4px', borderRadius: '4px' }}>{msg.badge}</span>
                  <span style={{ fontSize: '12px', color: '#949ba4' }}>{msg.time}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#dbdee1', marginTop: '4px', margin: 0 }}>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* خانة الكتابة الشغالة */}
        <div style={{ padding: '16px', backgroundColor: '#313338' }}>
          <div style={{ backgroundColor: '#383a40', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <input 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب رسالتك هنا في #المحادثة-العامة..." 
              style={{ background: 'none', border: 'none', flex: 1, outline: 'none', color: '#dbdee1', fontSize: '14px', textAlign: 'right' }}
            />
            <button 
              onClick={handleSend}
              style={{ backgroundColor: '#5865f2', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'medium' }}
            >
              إرسال
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
