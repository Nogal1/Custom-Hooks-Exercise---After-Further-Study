import React from 'react';
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';
import { useAxios } from './hooks';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const BASE_URL = 'https://deckofcardsapi.com/api/deck/new/draw/';
  const [cards, addCard] = useAxios(BASE_URL);

  const handleAddCard = () => {
    addCard();
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData, idx) => (
          <PlayingCard key={idx} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;
