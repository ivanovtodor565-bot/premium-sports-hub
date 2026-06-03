import React from 'react';
import './Header.css';

function Header({ isLoggedIn, user, onLogout, balance }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">⭐</span>
          <h1>Premium Sports Hub</h1>
        </div>
        <div className="header-right">
          {isLoggedIn ? (
            <div className="user-section">
              <div className="balance-display">
                <span className="balance-label">Салдо:</span>
                <span className="balance-amount">${balance.toFixed(2)}</span>
              </div>
              <span className="user-name">Добре дошъл, {user.username}!</span>
              <button className="btn-logout" onClick={onLogout}>Изход</button>
            </div>
          ) : (
            <span className="login-prompt">Влез за да играеш</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
