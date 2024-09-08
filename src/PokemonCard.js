import React from 'react';
import './PokemonCard.css';
import { useFlip } from './hooks';


/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} className="PokemonCard Card">
      {isFlipped ? (
        <div className="PokemonCard-back">
          <img src={back} alt={name} />
        </div>
      ) : (
        <div className="PokemonCard-front">
          <img src={front} alt={name} />
          <div className="PokemonCard-name">{name}</div>
          <ul className="PokemonCard-stats">
            {stats.map(stat => (
              <li key={stat.name}>
                {stat.name}: {stat.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;