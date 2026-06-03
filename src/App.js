import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BettingPage from './pages/BettingPage';
import CasinoPage from './pages/CasinoPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import Support from './components/Support';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(5000);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'betting':
        return isLoggedIn ? <BettingPage user={user} balance={balance} setBalance={setBalance} /> : <AuthPage onLogin={handleLogin} />;
      case 'casino':
        return isLoggedIn ? <CasinoPage user={user} balance={balance} setBalance={setBalance} /> : <AuthPage onLogin={handleLogin} />;
      case 'profile':
        return isLoggedIn ? <ProfilePage user={user} balance={balance} setBalance={setBalance} /> : <AuthPage onLogin={handleLogin} />;
      case 'auth':
        return <AuthPage onLogin={handleLogin} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} balance={balance} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Support />
      <footer className="footer">
        <p>&copy; 2026 Premium Sports Hub. Всички права запазени.</p>
        <p>Отговорна игра | Условия на ползване | Политика на поверителност</p>
      </footer>
    </div>
  );
}

export default App;
