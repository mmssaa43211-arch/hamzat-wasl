'use client';
import React, { useState } from 'react';

export default function Home() {
  // تحديد المجلس النشط حالياً
  const [activeChannel, setActiveChannel] = useState('💬 المجلس-العام');
  const [text, setText] = useState('');

  // إدارة الرسائل لكل مجلس على حدة
  const [channelMessages, setChannelMessages] = useState({
    '💬 المجلس-العام': [
      { id: 1, user: 'مساعد همزة وصل', icon: '🤖', badge: 'مطور', time: 'اليوم، 9:45 م', text: 'يا هلا والله يا متعب! ارحب في مجلسك العام. هنا السوالف والدردشة الحية مع الأعضاء. جرب اكتب تحت! 👇' }
    ],
    '📢 علوم-المنصة': [
      { id: 1, user: 'متعب', icon: 'M', badge: 'صاحب المنصة', time: 'اليوم، 10:00 م', text: '📢 بسم الله الرحمن الرحيم، تم بحمد الله إطلاق النسخة التجريبية الأولى لمنصة همزة وصل! ترقبوا العلوم الزينة والقادم أفضل بإذن الله. 🚀' }
    ],
    '🛠️ الفزعة': [
      { id: 1, user: 'مساعد همزة وصل', icon: '🤖', badge: 'مطور', time: 'اليوم، 10:15 م', text: 'أرحب يا غالي في قسم الفزعة! عندك مشكلة؟ اقتراح؟ كود مو راضي يشتغل؟ حط استفسارك هنا وأبشر بالفزعة والدعم الفني السريع. 🛠️🤝' }
    ]
  });

  const handleSend = () => {
    if (!text.trim()) return;
    
    // إضافة الرسالة للمجلس الحالي المفتوح بس
    const newMsg = {
      id: Date.now(),
      user: 'متعب',
      icon: 'M',
      badge: 'صاحب المنصة',
      time: 'الآن',
      text: text
    };

    setChannelMessages({
      ...channelMessages,
      [activeChannel]: [...channelMessages[activeChannel], newMsg]
    });
    
    setText('');
  };

  // جلب اسم المجلس بدون الإيموجي للعرض في الأعلى
  const getChannelName = (channel) => channel.split(' ')[1] || channel;

  return (
    <>
      <style>{`
        .discord-container { display: flex; height: 100vh; background-color: #313338; color: #dbdee1; font-family: sans-serif; }
        .server-list { width: 72px; background-color: #1e1f22; display: flex; flex-direction: column; align-items: center; padding-top: 12px; gap: 8px; box-sizing: border-box; }
        .server-icon { width: 48px; height: 48px; background-color: #5865f2; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; cursor: pointer; }
        .server-icon-sub { width: 48px; height: 48px; background-color: #2b2d31; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; }
        .server-separator { width: 32px; height: 2px; background-color: #35363c; margin: 4px 0; }
        .channel-list { width: 240px; background-color: #2b2d31; display: flex; flex-direction: column; }
        .server-header { height: 48px; border-bottom: 1px solid #1f2023; display: flex; align-items: center; padding: 0 16px; font-weight: bold; color: white; }
        .channels-wrapper { flex: 1; padding: 12px 8px; display: flex; flex-direction: column; gap: 16px; }
        .channel-category { font-size: 12px; font-weight: bold; color: #949ba4; padding: 0 8px; margin-bottom: 4px; }
        .channel-item { color: #949ba4; padding: 6px 8px; border-radius: 4px; cursor: pointer; font-size: 14px; margin-bottom: 2px; transition: background-color 0.2s, color 0.2s; }
        .channel-item:hover { background-color: #35373c; color: #dbdee1; }
        .channel-item.active { background-color: #404249; color: white; font-weight: bold; }
        .user-profile { height: 56px; background-color: #232428; display: flex; align-items: center; padding: 0 8px; gap: 8px; }
        .user-avatar { width: 32px; height: 32px; background-color: #5865f2; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px; }
        .chat-area { flex: 1; background-color: #313338; display: flex; flex-direction: column; }
        .chat-header { height: 48px; border-bottom: 1px solid #1f2023; display: flex; align-items: center; padding: 0 16px; gap: 8px; }
        .messages-container { flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; justify-content: flex-end; }
        .message-row { display: flex; align-items: flex-start; gap: 16px; }
        .message-avatar { width: 40px; height: 40px; background-color: #5865f2; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px; }
        .message-content { display: flex; flex-direction: column; text-align: right; }
        .message-meta { display: flex; align-items: baseline; gap: 8px; }
        .user-badge { font-size: 10px; background-color: #5865f2; color: white; padding: 0 4px; border-radius: 4px; }
        .input-area { padding: 16px; background-color: #313338; }
        .input-wrapper { background-color: #383a40; border-radius: 8px; padding: 10px 16px; display: flex; align-items: center; gap: 16px; }
        .message-input { background: none; border: none; flex: 1; outline: none; color: #dbdee1; font-size: 14px; text-align: right; }
        .send-btn { background-color: #5865f2; color: white; border: none; padding: 6px 16px; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500; }
      `}</style>

      <div className="discord-container" dir="rtl">
        {/* 1. قائمة السيرفرات */}
        <div className="server-list">
          <div className="server-icon">🌐</div>
          <div className="server-separator" />
          <div className="server-icon-sub">🤝</div>
          <div className="server-icon-sub">➕</div>
        </div>

        {/* 2. قائمة القنوات والمجالس */}
        <div className="channel-list">
          <div className="server-header">
            <span>منصة همزة وصل</span>
          </div>
          <div className="channels-wrapper">
            {/* قنوات نصية */}
            <div>
              <div className="channel-category">#️⃣ المجالس النصية</div>
              <div>
                <div 
                  className={`channel-item ${activeChannel === '💬 المجلس-العام' ? 'active' : ''}`}
                  onClick={() => setActiveChannel('💬 المجلس-العام')}
                >
                  💬 المجلس-العام
                </div>
                <div 
                  className={`channel-item ${activeChannel === '📢 علوم-المنصة' ? 'active' : ''}`}
                  onClick={() => setActiveChannel('📢 علوم-المنصة')}
                >
                  📢 علوم-المنصة
                </div>
                <div 
                  className={`channel-item ${activeChannel === '🛠️ الفزعة' ? 'active' : ''}`}
                  onClick={() => setActiveChannel('🛠️ الفزعة')}
                >
                  🛠️ الفزعة
                </div>
              </div>
            </div>
            {/* قنوات صوتية */}
            <div>
              <div className="channel-category">🔊 المجالس الصوتية</div>
              <div>
                <div className="channel-item">🔊 ديوانية الصوت</div>
              </div>
            </div>
          </div>
          
          {/* بروفايل متعب */}
          <div className="user-profile">
            <div className="user-avatar">M</div>
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

        {/* 3. منطقة الدردشة المتغيرة بحسب المجلس */}
        <div className="chat-area">
          <div className="chat-header">
            <span style={{ fontSize: '20px', color: '#80848e' }}>#</span>
            <span style={{ fontWeight: 'bold', color: 'white' }}>{getChannelName(activeChannel)}</span>
          </div>

          {/* عرض رسائل المجلس المفتوح حالياً */}
          <div className="messages-container">
            {channelMessages[activeChannel].map((msg) => (
              <div key={msg.id} className="message-row">
                <div className="message-avatar">{msg.icon}</div>
                <div className="message-content">
                  <div className="message-meta">
                    <span style={{ fontWeight: 'bold', color: 'white', fontSize: '14px' }}>{msg.user}</span>
                    <span className="user-badge">{msg.badge}</span>
                    <span style={{ fontSize: '12px', color: '#949ba4' }}>{msg.time}</span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#dbdee1', marginTop: '4px', margin: 0 }}>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* خانة الكتابة الديناميكية */}
          <div className="input-area">
            <div className="input-wrapper">
              <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={`اكتب رسالتك هنا في #${getChannelName(activeChannel)}...`} 
                className="message-input"
              />
              <button onClick={handleSend} className="send-btn">إرسال</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
