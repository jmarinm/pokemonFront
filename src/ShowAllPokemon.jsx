import React from "react";
import { useState } from "react";
import Pokemon from "./Pokemon";

const API_URL = 'http://localhost:8080'

const ShowAllPokemon = () => {
  const [showPokemon, setShowPokemon] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const searchPokemon = async () => {
    const response = await fetch(`${API_URL}/pokemon`,
    )
    const data = await response.json();
    setPokemons(data.search)
  }
  return (
    <div className="col" align='center'>
      <button className="btn btn-lg btn-primary fw-bold border-white bg-black mb-4" onClick={() => { setShowPokemon(!showPokemon); searchPokemon(); }}>Mostrar Pokemon</button>
      {
        showPokemon ? (
          <div className="row">
            {pokemons.map((each) => (
              <Pokemon pokemon={each} />
            ))}
          </div>
        ) : (
          <></>
        )
      }
    </div>
  )
}

export default ShowAllPokemon;