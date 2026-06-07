import React from 'react';

export default function Home() {
  return (
    <div className="flex h-screen bg-[#313338] text-[#dbdee1] font-sans antialiased selection:bg-[#5865f2] selection:text-white" dir="rtl">
      
      {/* 1. قائمة السيرفرات (الجانبية اليمنى) */}
      <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 gap-2 shrink-0">
        <div className="w-12 h-12 bg-[#5865f2] rounded-[16px] flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-200 hover:bg-[#5865f2] hover:rounded-[16px]" title="الرئيسية">
          🌐
        </div>
        <div className="w-8 h-[2px] bg-[#35363c] rounded my-1" />
        <div className="w-12 h-12 bg-[#2b2d31] rounded-[24px] flex items-center justify-center text-xl cursor-pointer transition-all duration-200 hover:bg-[#23a55a] hover:rounded-[16px] hover:text-white" title="سيرفر الدعم">
          🤝
        </div>
        <div className="w-12 h-12 bg-[#2b2d31] rounded-[24px] flex items-center justify-center text-xl cursor-pointer transition-all duration-200 hover:bg-[#5865f2] hover:rounded-[16px] hover:text-white" title="إضافة سيرفر">
          ➕
        </div>
      </div>

      {/* 2. قائمة القنوات والأقسام */}
      <div className="w-60 bg-[#2b2d31] flex flex-col shrink-0">
        {/* هيدر السيرفر */}
        <div className="h-12 border-b border-[#1f2023] flex items-center justify-between px-4 font-bold text-white shadow-sm">
          <span>منصة همزة وصل</span>
          <span className="text-sm">🔽</span>
        </div>

        {/* قائمة القنوات */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4">
          {/* قسم القنوات النصية */}
          <div>
            <div className="text-xs font-bold text-[#949ba4] px-2 mb-1 cursor-pointer hover:text-[#dbdee1]">
              #️⃣ القنوات النصية
            </div>
            <div className="space-y-[2px]">
              <div className="bg-[#404249] text-white px-2 py-1,5 rounded flex items-center gap-2 cursor-pointer text-sm font-medium">
                <span>💬</span>
                <span>المحادثة-العامة</span>
              </div>
              <div className="text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1] px-2 py-1,5 rounded flex items-center gap-2 cursor-pointer text-sm font-medium transition-colors">
                <span>📢</span>
                <span>الإعلانات</span>
              </div>
              <div className="text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1] px-2 py-1,5 rounded flex items-center gap-2 cursor-pointer text-sm font-medium transition-colors">
                <span>🛠️</span>
                <span>الدعم-الفني</span>
              </div>
            </div>
          </div>

          {/* قسم القنوات الصوتية */}
          <div>
            <div className="text-xs font-bold text-[#949ba4] px-2 mb-1 cursor-pointer hover:text-[#dbdee1]">
              🔊 القنوات الصوتية
            </div>
            <div className="space-y-[2px]">
              <div className="text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1] px-2 py-1,5 rounded flex items-center justify-between cursor-pointer text-sm font-medium transition-colors">
                <div className="flex items-center gap-2">
                  <span>🔊</span>
                  <span>المجلس العام</span>
                </div>
                <span className="text-xs bg-[#23a55a] text-white px-1,5 py-[2px] rounded-full">متصل</span>
              </div>
            </div>
          </div>
        </div>

        {/* بروفايل المستخدم بالأسفل */}
        <div className="h-14 bg-[#232428] flex items-center justify-between px-2 gap-2">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[#35373c] p-1 rounded flex-1">
            <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center text-white font-bold">
              M
            </div>
            <div className="flex flex-col overflow-hidden text-right">
              <span className="text-sm font-bold text-white truncate">متعب</span>
              <span className="text-xs text-[#949ba4]">#0001</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#b5bac1]">
            <button className="p-1,5 hover:bg-[#35373c] hover:text-[#dbdee1] rounded text-lg" title="كتم الصوت">🎙️</button>
            <button className="p-1,5 hover:bg-[#35373c] hover:text-[#dbdee1] rounded text-lg" title="الإعدادات">⚙️</button>
          </div>
        </div>
      </div>

      {/* 3. منطقة الدردشة الرئيسية */}
      <div className="flex-1 bg-[#313338] flex flex-col min-w-0">
        {/* الهيدر العلوي للقناة */}
        <div className="h-12 border-b border-[#1f2023] flex items-center px-4 gap-2 shadow-sm shrink-0">
          <span className="text-xl text-[#80848e]">#</span>
          <span className="font-bold text-white text-md">المحادثة-العامة</span>
          <div className="w-[1px] h-4 bg-[#3f4147] mx-2" />
          <span className="text-xs text-[#949ba4]">أهلاً بك في النسخة التجريبية لمنصة همزة وصل!</span>
        </div>

        {/* منطقة عرض الرسائل */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* رسالة ترحيبية نظامية */}
          <div className="bg-[#2b2d31] border-r-4 border-[#5865f2] p-4 rounded-md shadow-sm text-right">
            <h3 className="font-bold text-white mb-1 text-md">🚀 مرحباً بك في النسخة التجريبية بالكامل!</h3>
            <p className="text-sm text-[#b5bac1]">
              تم تفعيل واجهة ديسكورد بنجاح. الخانات الحين شغالة وتقدر تجرب تكتب فيها وتتفاعل مع الأزرار والقنوات.
            </p>
          </div>

          {/* نموذج رسالة من مستخدم */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#23a55a] rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
              🤖
            </div>
            <div className="flex flex-col text-right">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-white hover:underline cursor-pointer text-sm">مساعد همزة وصل</span>
                <span className="text-[10px] bg-[#5865f2] text-white px-1 rounded font-medium">مطور</span>
                <span className="text-xs text-[#949ba4]">اليوم، 9:45 م</span>
              </div>
              <p className="text-sm text-[#dbdee1] mt-1">
                يا هلا والله يا متعب! الواجهة الحين منورة وجاهزة للتجربة والجلد. جرب اكتب في خانة المحادثة تحت وشوف الفخامة! 👇
              </p>
            </div>
          </div>
        </div>

        {/* خانة الكتابة والإرسال بالأسفل */}
        <div className="p-4 bg-[#313338] shrink-0">
          <div className="bg-[#383a40] rounded-lg px-4 py-2,5 flex items-center gap-4 focus-within:ring-1 focus-within:ring-[#5865f2]">
            <button className="text-xl text-[#b5bac1] hover:text-[#dbdee1] transition-colors" title="إرفاق ملف">
              ➕
            </button>
            <input 
              type="text" 
              placeholder="اكتب رسالتك هنا في #المحادثة-العامة..." 
              className="bg-transparent flex-1 outline-none text-[#dbdee1] placeholder-[#80848e] text-sm text-right"
            />
            <button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-4 py-1 rounded text-sm font-medium transition-colors shadow-sm">
              إرسال
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
