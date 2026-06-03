import React, { useState } from 'react';
import './CasinoPage.css';

function CasinoPage({ user, balance, setBalance }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [betAmount, setBetAmount] = useState('');
  const [gameResult, setGameResult] = useState(null);

  const games = [
    { id: 1, name: 'Slot Machine', icon: '🎰', rtp: '96.5%', jackpot: '$50,000' },
    { id: 2, name: 'Roulette', icon: '🎡', rtp: '97.3%', jackpot: '$100,000' },
    { id: 3, name: 'Blackjack', icon: '🃏', rtp: '99.4%', jackpot: '$75,000' },
    { id: 4, name: 'Poker', icon: '🎴', rtp: '98.0%', jackpot: '$200,000' },
    { id: 5, name: 'Baccarat', icon: '♠️', rtp: '98.9%', jackpot: '$80,000' },
    { id: 6, name: 'Craps', icon: '🎲', rtp: '99.1%', jackpot: '$60,000' }
  ];

  const playGame = () => {
    if (!selectedGame || !betAmount || parseFloat(betAmount) <= 0 || parseFloat(betAmount) > balance) {
      alert('Проверете игра и сума!');
      return;
    }

    const bet = parseFloat(betAmount);
    const isWin = Math.random() > 0.5;
    const multiplier = isWin ? 2 + Math.random() : 0;
    const winAmount = bet * multiplier;

    setGameResult({
      win: isWin,
      amount: isWin ? winAmount : -bet,
      multiplier: multiplier.toFixed(2)
    });

    setBalance(balance + (isWin ? winAmount : -bet));
  };

  return (
    <div className="casino-page">
      <h2>🎰 Казино Игри</h2>

      <div className="casino-container">
        <div className="games-grid">
          {games.map(game => (
            <div
              key={game.id}
              className={`game-card ${selectedGame?.id === game.id ? 'selected' : ''}`}
              onClick={() => setSelectedGame(game)}
            >
              <div className="game-icon">{game.icon}</div>
              <h4>{game.name}</h4>
              <p className="rtp">RTP: {game.rtp}</p>
              <p className="jackpot">Джакпот: {game.jackpot}</p>
            </div>
          ))}
        </div>

        <div className="game-panel">
          {selectedGame ? (
            <div className="game-play">
              <h3>{selectedGame.icon} {selectedGame.name}</h3>
              <div className="game-info">
                <p><strong>RTP:</strong> {selectedGame.rtp}</p>
                <p><strong>Максимален джакпот:</strong> {selectedGame.jackpot}</p>
              </div>
              <div className="bet-controls">
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
              <button className="btn-play" onClick={playGame}>ИГРАЙ</button>
              {gameResult && (
                <div className={`game-result ${gameResult.win ? 'win' : 'loss'}`}>
                  <h4>{gameResult.win ? '🎉 Поздравления!' : '😢 Загубил'}</h4>
                  <p className="result-amount">{gameResult.win ? '+' : ''} ${Math.abs(gameResult.amount).toFixed(2)}</p>
                  {gameResult.win && <p className="multiplier">x{gameResult.multiplier}</p>}
                  <button onClick={() => setGameResult(null)}>Затвори</button>
                </div>
              )}
            </div>
          ) : (
            <div className="empty-game">
              <p>Избери игра за да започнеш</p>
            </div>
          )}
        </div>
      </div>

      <div className="responsible-gaming">
        <h3>⚠️ Отговорна игра</h3>
        <p>Играйте отговорно. Хазартът може да създаде зависимост. За помощ посетете <a href="#">проблемната игра</a>.</p>
      </div>
    </div>
  );
}

export default CasinoPage;
