import React, { useEffect, useState } from "react";
import axios from "axios";

const Play = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pokemon");
      setPokemonList(response.data);
    } catch (error) {
      console.error("Failed to fetch Pokemon list:", error);
    }
  };

  const handleAdoptPokemon = async (pokemonId) => {
    try {
      const response = await axios.post(`/users/userId/adopt/${pokemonId}`);
      console.log(response.data); // Success message
    } catch (error) {
      console.error("Error adopting Pokemon:", error);
    }
  };

  return (
    <div>
      <h1>Pokemon Adoption</h1>
      <h2>Available Pokemon for Adoption</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon._id}>
            <strong>Breed:</strong> {pokemon.breed} |<strong> Age:</strong>{" "}
            {pokemon.age} |<strong> Health Status:</strong>{" "}
            {pokemon.healthStatus}
            <button onClick={() => handleAdoptPokemon(pokemon._id)}>
              Adopt
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Play;
