import React, { useState } from 'react';
import './AuthPage.css';

function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      if (username && password) {
        onLogin({
          username,
          email: email || 'user@example.com',
          registrationDate: new Date().toISOString().split('T')[0]
        });
      }
    } else {
      if (username && email && password && password === confirmPassword) {
        onLogin({
          username,
          email,
          registrationDate: new Date().toISOString().split('T')[0]
        });
      } else {
        alert('Проверете полетата!');
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>{isLogin ? '🔐 Вход' : '📝 Регистрация'}</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Потребителско име</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Въведи потребителско име"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label>Имейл</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Въведи имейл"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>Парола</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Въведи парола"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label>Потвърди парола</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Потвърди парола"
                  required
                />
              </div>
            )}

            <button type="submit" className="btn-submit">
              {isLogin ? 'Вход' : 'Регистрирай се'}
            </button>
          </form>

          <div className="auth-toggle">
            <p>
              {isLogin ? 'Нямаш акаунт?' : 'Вече имаш акаунт?'}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="toggle-btn"
              >
                {isLogin ? 'Регистрирай се' : 'Влез'}
              </button>
            </p>
          </div>
        </div>

        <div className="auth-info">
          <div className="info-card">
            <h3>🎯 Защо Premium Sports Hub?</h3>
            <ul>
              <li>✅ Безопасност на данните</li>
              <li>✅ Лицензирана платформа</li>
              <li>✅ Заплати на ден</li>
              <li>✅ 24/7 поддържка</li>
              <li>✅ Мобилна приложение</li>
              <li>✅ Бонуси и промоции</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
