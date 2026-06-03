import React from 'react';
import './HomePage.css';

function HomePage({ setCurrentPage }) {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h2>Добре дошъл в Premium Sports Hub</h2>
          <p>Най-добрата платформа за спортни залози и казино игри</p>
          <button className="btn-primary" onClick={() => setCurrentPage('auth')}>
            Начни да играеш сега
          </button>
        </div>
        <div className="hero-visual">
          <div className="sport-icons">
            <span>⚽</span>
            <span>🏀</span>
            <span>🎾</span>
            <span>🏈</span>
            <span>🏒</span>
          </div>
        </div>
      </section>

      <section className="features">
        <h3>Защо да изберем нас?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h4>Висока точност</h4>
            <p>Директно към събитията с най-добрите коефициенти</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h4>Голяма награда</h4>
            <p>Бонуси и промоции всеки ден</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h4>Безопасност</h4>
            <p>Шифрирани транзакции и защита на данните</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h4>Бърза обработка</h4>
            <p>Моментални депозити и теглене</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h4>Мобилна приложение</h4>
            <p>Играй от всяка място, всяко време</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h4>24/7 Поддържка</h4>
            <p>Помощ по всяко време на денят</p>
          </div>
        </div>
      </section>

      <section className="sports-section">
        <h3>Топ спортни събития</h3>
        <div className="events-list">
          <div className="event-card">
            <h4>⚽ Футбол</h4>
            <p>500+ мачове в живо</p>
            <span className="event-badge">LIVE</span>
          </div>
          <div className="event-card">
            <h4>🏀 Баскетбол</h4>
            <p>150+ мачове в живо</p>
            <span className="event-badge">LIVE</span>
          </div>
          <div className="event-card">
            <h4>🎾 Тенис</h4>
            <p>200+ турнира</p>
            <span className="event-badge">LIVE</span>
          </div>
          <div className="event-card">
            <h4>🏀 Волейбол</h4>
            <p>100+ лиги</p>
            <span className="event-badge">LIVE</span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h3>Готов ли си да спечелиш голямо?</h3>
        <button className="btn-primary btn-large" onClick={() => setCurrentPage('auth')}>
          Регистрирай се безплатно сега
        </button>
      </section>
    </div>
  );
}

export default HomePage;
