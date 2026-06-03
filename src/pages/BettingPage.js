import React, { useState } from 'react';
import './BettingPage.css';

function BettingPage({ user, balance, setBalance }) {
  const [selectedBet, setSelectedBet] = useState(null);
  const [betAmount, setBetAmount] = useState('');
  const [bets, setBets] = useState([
    { id: 1, event: 'Реал Мадрид vs Барселона', odds: 1.85, result: 'pending', amount: 100 },
    { id: 2, event: 'Ливърпул vs Манчестър Сити', odds: 2.10, result: 'won', amount: 50 }
  ]);

  const sportEvents = [
    { id: 1, sport: '⚽', match: 'Реал Мадрид vs Барселона', odds: [1.85, 3.50, 2.10], status: 'LIVE' },
    { id: 2, sport: '⚽', match: 'Ливърпул vs Манчестър Сити', odds: [2.10, 3.20, 1.95], status: 'LIVE' },
    { id: 3, sport: '🏀', match: 'ЛА Лейкърс vs Бостън Селтикс', odds: [1.92, 3.10, 2.05], status: 'LIVE' },
    { id: 4, sport: '🎾', match: 'Джокович vs Алкараз', odds: [1.95, 3.40, 2.00], status: 'LIVE' },
    { id: 5, sport: '⚽', match: 'Манчестър Юнайтед vs Челси', odds: [1.88, 3.45, 2.08], status: 'LIVE' }
  ];

  const placeBet = () => {
    if (selectedBet && betAmount && parseFloat(betAmount) > 0 && parseFloat(betAmount) <= balance) {
      const newBet = {
        id: bets.length + 1,
        event: sportEvents[selectedBet].match,
        odds: sportEvents[selectedBet].odds[0],
        amount: parseFloat(betAmount),
        result: 'pending'
      };
      setBets([...bets, newBet]);
      setBalance(balance - parseFloat(betAmount));
      setBetAmount('');
      setSelectedBet(null);
      alert('Залог приет успешно!');
    } else {
      alert('Проверете суму и баланса');
    }
  };

  return (
    <div className="betting-page">
      <h2>⚽ Спортни Залози</h2>
      
      <div className="betting-container">
        <div className="events-section">
          <h3>Налични събития</h3>
          <div className="events-list">
            {sportEvents.map(event => (
              <div
                key={event.id}
                className={`event-item ${selectedBet === event.id - 1 ? 'selected' : ''}`}
                onClick={() => setSelectedBet(event.id - 1)}
              >
                <div className="event-header">
                  <span className="sport-icon">{event.sport}</span>
                  <span className="match-name">{event.match}</span>
                  <span className="live-badge">{event.status}</span>
                </div>
                <div className="odds-container">
                  <div className="odd">1: {event.odds[0]}</div>
                  <div className="odd">X: {event.odds[1]}</div>
                  <div className="odd">2: {event.odds[2]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bet-slip">
          <h3>Фиш за залог</h3>
          {selectedBet !== null ? (
            <div className="selected-bet">
              <p className="bet-event">{sportEvents[selectedBet].match}</p>
              <div className="odds-selection">
                <button className="odd-btn">1: {sportEvents[selectedBet].odds[0]}</button>
                <button className="odd-btn">X: {sportEvents[selectedBet].odds[1]}</button>
                <button className="odd-btn">2: {sportEvents[selectedBet].odds[2]}</button>
              </div>
              <div className="bet-input">
                <label>Сума на залог:</label>
                <input
                  type="number"
                  min="1"
                  max={balance}
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  placeholder="Въведи сума"
                />
              </div>
              <div className="calculation">
                <p>Потенциална награда: <strong>${(parseFloat(betAmount || 0) * sportEvents[selectedBet].odds[0]).toFixed(2)}</strong></p>
              </div>
              <button className="btn-bet" onClick={placeBet}>Постави залог</button>
            </div>
          ) : (
            <p className="empty-slip">Избери събитие за залог</p>
          )}
        </div>
      </div>

      <div className="bets-history">
        <h3>История на залозите</h3>
        <table className="bets-table">
          <thead>
            <tr>
              <th>Събитие</th>
              <th>Коефициент</th>
              <th>Сума</th>
              <th>Потенциална награда</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {bets.map(bet => (
              <tr key={bet.id} className={`bet-status-${bet.result}`}>
                <td>{bet.event}</td>
                <td>{bet.odds}</td>
                <td>${bet.amount.toFixed(2)}</td>
                <td>${(bet.amount * bet.odds).toFixed(2)}</td>
                <td><span className={`status-badge ${bet.result}`}>{bet.result === 'pending' ? '⏳ В ход' : bet.result === 'won' ? '✅ Спечелено' : '❌ Загубено'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BettingPage;
