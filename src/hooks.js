import { useState } from 'react';

function useFlip() {
  // Initialize the flipped state
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to toggle the flip state
  function flipCard() {
    setIsFlipped((flipped) => !flipped);
  }

  // Return the current flip state and the toggle function
  return [isFlipped, flipCard];
}

export { useFlip };