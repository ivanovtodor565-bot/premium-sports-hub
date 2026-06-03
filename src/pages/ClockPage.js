import React, { useState, useEffect } from 'react';
import './ClockPage.css';

function ClockPage() {
  const [times, setTimes] = useState([]);

  const timeZones = [
    { name: 'Ню Йорк', zone: 'America/New_York', icon: '🗽' },
    { name: 'Лондон', zone: 'Europe/London', icon: '🇬🇧' },
    { name: 'България', zone: 'Europe/Sofia', icon: '🇧🇬' },
    { name: 'Токио', zone: 'Asia/Tokyo', icon: '🇯🇵' },
    { name: 'Сидни', zone: 'Australia/Sydney', icon: '🦘' },
    { name: 'Дубай', zone: 'Asia/Dubai', icon: '🕌' },
    { name: 'Сан Франциско', zone: 'America/Los_Angeles', icon: '🌉' },
    { name: 'Париж', zone: 'Europe/Paris', icon: '🇫🇷' },
    { name: 'Москва', zone: 'Europe/Moscow', icon: '🇷🇺' },
    { name: 'Бангкок', zone: 'Asia/Bangkok', icon: '🇹🇭' },
    { name: 'Мелбърн', zone: 'Australia/Melbourne', icon: '🦘' },
    { name: 'Торонто', zone: 'America/Toronto', icon: '🇨🇦' }
  ];

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = timeZones.map(tz => {
        const time = new Intl.DateTimeFormat('bg-BG', {
          timeZone: tz.zone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());

        const date = new Intl.DateTimeFormat('bg-BG', {
          timeZone: tz.zone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).format(new Date());

        return { ...tz, time, date };
      });
      setTimes(updatedTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-page">
      <h2>🕐 Дигитален часовник - Световни часови зони</h2>
      
      <div className="clock-grid">
        {times.map((tz, index) => (
          <div key={index} className="clock-card">
            <div className="clock-icon">{tz.icon}</div>
            <h3>{tz.name}</h3>
            <div className="clock-display">{tz.time}</div>
            <div className="clock-date">{tz.date}</div>
            <div className="timezone-info">{tz.zone}</div>
          </div>
        ))}
      </div>

      <div className="clock-info">
        <h3>ℹ️ Информация</h3>
        <p>Часовникът показва текущото време в 12 различни часови зони по света.</p>
        <p>Часът се актуализира в реално време всяка секунда.</p>
      </div>
    </div>
  );
}

export default ClockPage;
