
import React from 'react';
import backOfCard from './back.png';
import './PlayingCard.css';
import { useFlip } from './hooks';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <img
      src={isFlipped ? back : front}
      alt="playing card"
      onClick={toggleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
