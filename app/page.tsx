'use client';
import React, { useState } from 'react';

export default function Home() {
  const [activeChannel, setActiveChannel] = useState('💬 المجلس-العام');
  const [text, setText] = useState('');
  
  // حالات تفاعلية للأزرار المقفلة سابقاً
  const [isVoiceConnected, setIsVoiceConnected] = useState(false);
  const [activeVoiceChannel, setActiveVoiceChannel] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [newServerName, setNewServerName] = useState('');

  const [channelMessages, setChannelMessages] = useState({
    '💬 المجلس-العام': [
      { id: 1, user: 'مساعد همزة وصل', icon: '🤖', badge: 'مطور', time: 'اليوم، 9:45 م', text: 'يا هلا والله يا متعب! ارحب في مجلسك العام. كل شيء الحين انفك عنه القفل وصار تفاعلي، جرب تضغط القنوات الصوتية أو الأزرار اللي عاليمين وشوف المتعة! 👇' }
    ],
    '📢 علوم-المنصة': [
      { id: 1, user: 'متعب', icon: 'M', badge: 'صاحب المنصة', time: 'اليوم, 10:00 م', text: '📢 تم فك القفل عن جميع الأزرار والاتصال الصوتي في المنصة بنجاح! جربوا الميزات الجديدة الآن. 🚀' }
    ],
    '🛠️ الفزعة': [
      { id: 1, user: 'مساعد همزة وصل', icon: '🤖', badge: 'مطور', time: 'اليوم، 10:15 م', text: 'أرحب يا شقردي في قسم الفزعة! هنا كل شيء شغال وجاهز لخدمتك والدعم الفني السريع. 🛠️🤝' }
    ]
  });

  const handleSend = () => {
    if (!text.trim()) return;
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

  const handleConnectVoice = (channelName: string) => {
    setActiveVoiceChannel(channelName);
    setIsVoiceConnected(true);
  };

  const handleDisconnectVoice = () => {
    setIsVoiceConnected(false);
    setActiveVoiceChannel('');
  };

  const getChannelName = (channel: string) => channel.split(' ')[1] || channel;

  return (
    <>
      <style>{`
        .discord-container { display: flex; height: 100vh; background-color: #313338; color: #dbdee1; font-family: sans-serif; position: relative; }
        .server-list { width: 72px; background-color: #1e1f22; display: flex; flex-direction: column; align-items: center; padding-top: 12px; gap: 8px; box-sizing: border-box; }
        .server-icon { width: 48px; height: 48px; background-color: #5865f2; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; cursor: pointer; transition: all 0.2s; }
        .server-icon:hover { background-color: #4752c4; border-radius: 12px; }
        .server-icon-sub { width: 48px; height: 48px; background-color: #2b2d31; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; transition: all 0.2s; }
        .server-icon-sub:hover { background-color: #23a55a; border-radius: 16px; color: white; }
        .server-separator { width: 32px; height: 2px; background-color: #35363c; margin: 4px 0; }
        .channel-list { width: 240px; background-color: #2b2d31; display: flex; flex-direction: column; justify-content: space-between; }
        .server-header { height: 48px; border-bottom: 1px solid #1f2023; display: flex; align-items: center; padding: 0 16px; font-weight: bold; color: white; }
        .channels-wrapper { flex: 1; padding: 12px 8px; display: flex; flex-direction: column; gap: 16px; overflow-y: auto; }
        .channel-category { font-size: 12px; font-weight: bold; color: #949ba4; padding: 0 8px; margin-bottom: 4px; }
        .channel-item { color: #949ba4; padding: 6px 8px; border-radius: 4px; cursor: pointer; font-size: 14px; margin-bottom: 2px; transition: all 0.2s; display: flex; justify-content: space-between; align-items: center; }
        .channel-item:hover { background-color: #35373c; color: #dbdee1; }
        .channel-item.active { background-color: #404249; color: white; font-weight: bold; }
        .voice-status { font-size: 11px; color: #23a55a; font-weight: normal; }
        
        /* صندوق حالة الصوت الجديد */
        .voice-connected-box { background-color: #111214; padding: 10px; border-bottom: 1px solid #1f2023; display: flex; flex-direction: column; gap: 8px; }
        .voice-info { display: flex; align-items: center; gap: 8px; color: #23a55a; font-size: 13px; font-weight: bold; }
        .voice-actions { display: flex; justify-content: space-around; }
        .voice-btn { background: none; border: none; color: #b5bac1; cursor: pointer; font-size: 14px; padding: 4px 8px; border-radius: 4px; transition: background 0.2s; }
        .voice-btn:hover { background-color: #35373c; color: white; }
        .voice-btn.disconnect { color: #f23f43; }
        .voice-btn.disconnect:hover { background-color: #f23f43; color: white; }

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

        /* ستايل المودال / البوب أب */
        .modal-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 999; }
        .modal-box { background-color: #313338; padding: 24px; border-radius: 8px; width: 400px; text-align: center; border: 1px solid #1f2023; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
        .modal-title { font-size: 18px; font-weight: bold; color: white; margin-bottom: 12px; }
        .modal-desc { font-size: 14px; color: #b4bac1; margin-bottom: 20px; }
        .modal-input { width: 100%; padding: 10px; background-color: #1e1f22; border: 1px solid #1f2023; border-radius: 4px; color: white; text-align: right; margin-bottom: 20px; outline: none; }
        .modal-close-btn { background-color: #5865f2; color: white; border: none; padding: 8px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; }
        .modal-close-btn
      
