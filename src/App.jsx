import { useState } from 'react';
import './App.css';
import HalloweenCard from './HalloweenCard';

function App() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="app">
      <button
        className="halloween-button"
        onClick={toggleCard}
        aria-label={showCard ? 'Close Halloween Card' : 'Open Halloween Card'}
      >
        🎃
      </button>
      {showCard && <HalloweenCard onClose={() => setShowCard(false)} />}
    </div>
  );
}

export default App;