import React from 'react';
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';
import { useAxios } from './hooks';

/**
 * Format function for Playing Cards
 */
const formatPlayingCard = (data) => ({
  id: data.cards[0].code,
  image: data.cards[0].image
});

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const BASE_URL = 'https://deckofcardsapi.com/api/deck/new/draw/';
  const [cards, addCard, clearCards] = useAxios(BASE_URL, formatPlayingCard);

  const handleAddCard = () => {
    addCard();
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
        <button onClick={clearCards}>Clear all playing cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((card) => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;
