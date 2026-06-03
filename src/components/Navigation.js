import React from 'react';
import './Navigation.css';

function Navigation({ currentPage, setCurrentPage, isLoggedIn }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <button
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          🏠 Начало
        </button>
        {isLoggedIn && (
          <>
            <button
              className={`nav-btn ${currentPage === 'betting' ? 'active' : ''}`}
              onClick={() => setCurrentPage('betting')}
            >
              ⚽ Спортни Залози
            </button>
            <button
              className={`nav-btn ${currentPage === 'casino' ? 'active' : ''}`}
              onClick={() => setCurrentPage('casino')}
            >
              🎰 Казино
            </button>
            <button
              className={`nav-btn ${currentPage === 'profile' ? 'active' : ''}`}
              onClick={() => setCurrentPage('profile')}
            >
              👤 Профил
            </button>
          </>
        )}
        {!isLoggedIn && (
          <button
            className={`nav-btn ${currentPage === 'auth' ? 'active' : ''}`}
            onClick={() => setCurrentPage('auth')}
          >
            🔐 Вход/Регистрация
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
