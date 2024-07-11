import React, { useState } from 'react';
import axios from 'axios';

function PokemonFetcher() {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemonNames = async () => {
    try {
      let pokemonList = [];
      for (let i = 1; i <= 807; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemonList.push(response.data.name);
      }
      setPokemonNames(pokemonList);
    } catch (error) {
      console.error('Error fetching Pokémon names:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemonNames}>Fetch Pokemon</button>
      {pokemonNames.length > 0 && (
        <div>
          <h2>All Pokémon Names:</h2>
          <ul>
            {pokemonNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonFetcher;