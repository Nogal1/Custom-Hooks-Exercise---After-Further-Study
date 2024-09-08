
import React from 'react';
import './PokeDex.css';
import { useAxios } from './hooks';
import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemon, addPokemon, clearPokemon] = useAxios(BASE_URL);

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
        {pokemon.map((pData, idx) => (
          <PokemonCard
            key={idx}
            front={pData.sprites.front_default}
            back={pData.sprites.back_default}
            name={pData.name}
            stats={pData.stats.map(stat => ({
              name: stat.stat.name,
              value: stat.base_stat
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
