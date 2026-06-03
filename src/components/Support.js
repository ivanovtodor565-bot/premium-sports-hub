import React, { useState } from 'react';
import './Support.css';

function Support() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', text: 'Привет! Как мога да ти помогна?', time: new Date() }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'user', text: input, time: new Date() }]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, sender: 'support', text: 'Благодаря за съобщението. Ще отговорим скоро!', time: new Date() }]);
      }, 1000);
    }
  };

  return (
    <div className="support-widget">
      <button className="support-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
      {isOpen && (
        <div className="support-chat">
          <div className="support-header">
            <h3>Живо Чат Поддържка</h3>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
                <span className="time">{msg.time.toLocaleTimeString('bg-BG')}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Напиши съобщение..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Изпрати</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Support;
