import React from 'react';
import './index.css';

const HalloweenCard = ({ onClose }) => {
  return (
    <div className="halloween-card">
      <div className="card-content">
        <h2>Happy Halloween! 👻</h2>
        <p>Wishing you a spooktacular Halloween filled with fun, treats, and just the right amount of frights!</p>
        <div className="halloween-characters">
          <span>🎃</span>
          <span>👻</span>
          <span>🦇</span>
          <span>🕷️</span>
          <span>🕸️</span>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default HalloweenCard;