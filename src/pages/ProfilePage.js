import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage({ user, balance, setBalance }) {
  const [deposits, setDeposits] = useState([
    { id: 1, amount: 1000, date: '2026-01-15', method: 'Кредитна карта' },
    { id: 2, amount: 2000, date: '2026-02-20', method: 'Банков превод' },
    { id: 3, amount: 2000, date: '2026-05-10', method: 'e-Wallet' }
  ]);

  const [withdrawals, setWithdrawals] = useState([
    { id: 1, amount: 500, date: '2026-02-01', method: 'Банков превод', status: 'завършен' }
  ]);

  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleDeposit = () => {
    if (depositAmount && parseFloat(depositAmount) > 0) {
      setDeposits([...deposits, {
        id: deposits.length + 1,
        amount: parseFloat(depositAmount),
        date: new Date().toISOString().split('T')[0],
        method: 'Кредитна карта'
      }]);
      setBalance(balance + parseFloat(depositAmount));
      setDepositAmount('');
      alert('Депозит успешен!');
    }
  };

  const handleWithdraw = () => {
    if (withdrawAmount && parseFloat(withdrawAmount) > 0 && parseFloat(withdrawAmount) <= balance) {
      setWithdrawals([...withdrawals, {
        id: withdrawals.length + 1,
        amount: parseFloat(withdrawAmount),
        date: new Date().toISOString().split('T')[0],
        method: 'Банков превод',
        status: 'в очакване'
      }]);
      setBalance(balance - parseFloat(withdrawAmount));
      setWithdrawAmount('');
      alert('Заявка за теглене успешна!');
    }
  };

  return (
    <div className="profile-page">
      <h2>👤 Профил</h2>

      <div className="profile-container">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <h3>{user.username}</h3>
            <p>Имейл: {user.email}</p>
            <p>Регистриран: {user.registrationDate}</p>
          </div>
        </div>

        <div className="balance-card">
          <h3>Текущо салдо</h3>
          <div className="balance-amount">${balance.toFixed(2)}</div>
          <div className="balance-actions">
            <button className="btn-action">Депозит</button>
            <button className="btn-action">Теглене</button>
            <button className="btn-action">История</button>
          </div>
        </div>
      </div>

      <div className="transactions-section">
        <div className="deposit-section">
          <h3>💰 Депозит</h3>
          <div className="deposit-form">
            <input
              type="number"
              min="1"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Сума за депозит"
            />
            <button onClick={handleDeposit}>Депозирай</button>
          </div>
          <div className="deposits-list">
            <h4>Депозити</h4>
            {deposits.map(d => (
              <div key={d.id} className="transaction">
                <div>
                  <p className="transaction-method">{d.method}</p>
                  <p className="transaction-date">{d.date}</p>
                </div>
                <p className="transaction-amount positive">+${d.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="withdraw-section">
          <h3>🏦 Теглене</h3>
          <div className="withdraw-form">
            <input
              type="number"
              min="1"
              max={balance}
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Сума за теглене"
            />
            <button onClick={handleWithdraw}>Теглене</button>
          </div>
          <div className="withdrawals-list">
            <h4>Теглене</h4>
            {withdrawals.map(w => (
              <div key={w.id} className="transaction">
                <div>
                  <p className="transaction-method">{w.method}</p>
                  <p className="transaction-date">{w.date} - <span className={`status ${w.status.replace(' ', '-')}`}>{w.status}</span></p>
                </div>
                <p className="transaction-amount negative">-${w.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="statistics">
        <h3>📊 Статистика</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Общи депозити</p>
            <p className="stat-value">${deposits.reduce((sum, d) => sum + d.amount, 0).toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Общо теглене</p>
            <p className="stat-value">${withdrawals.reduce((sum, w) => sum + w.amount, 0).toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Текущо салдо</p>
            <p className="stat-value" style={{color: '#00d084'}}>${balance.toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Транзакции</p>
            <p className="stat-value">{deposits.length + withdrawals.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
