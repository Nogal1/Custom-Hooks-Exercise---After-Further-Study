
import React from 'react';
import './PokeDex.css';
import { useAxios } from './hooks';
import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';

/**
 * Format function for Pokemon Cards
 */
const formatPokemonData = (data) => ({
  id: data.id,
  name: data.name,
  front: data.sprites.front_default,
  back: data.sprites.back_default,
  stats: data.stats.map(stat => ({
    name: stat.stat.name,
    value: stat.base_stat
  }))
});

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemon, addPokemon, clearPokemon] = useAxios(BASE_URL, formatPokemonData);

  const handleAdd = (name) => {
    addPokemon(name);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your Pokemon:</h3>
        <PokemonSelect add={handleAdd} />
        <button onClick={clearPokemon}>Clear all Pokémon</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((p) => (
          <PokemonCard
            key={p.id}
            front={p.front}
            back={p.back}
            name={p.name}
            stats={p.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

