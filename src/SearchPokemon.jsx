import React, { useState } from "react";
import Pokemon from "./Pokemon";

const API_URL = 'http://localhost:8080'

const SearchPokemon = () => {
    const [searchedPokemon, setSearchedPokemon] = useState(null);
    const [searchName, setSearchName] = useState("");

    const searchPokemonByName = async (pokeName) => {
        const response = await fetch(`${API_URL}/pokemon/name/${pokeName}`,
        )
        const data = await response.json();
        setSearchedPokemon(data.search)
    }
    return (
        <div align="center">
            <h2 className="fw-light" >Buscar Pokemon Por Nombre</h2>
            <input
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Nombre del Pokemon"
                className=" mx-2 input-group-text mb-3"
            />
            <button
                className="btn btn-primary mx-2 mb-4"
                onClick={() => searchPokemonByName(searchName)}
            >Buscar</button>
            {
                searchedPokemon !== null ? (<Pokemon pokemon={searchedPokemon} />) : (<></>)
            }
        </div>
    )
}

export default SearchPokemon;