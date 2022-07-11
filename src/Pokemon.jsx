import React from "react";

const Pokemon = ({ pokemon }) => {

  return (
    <div className="card mx-2" style={{ width: '15rem' }}>
      {!(pokemon.img) ? (
        <img src={"https://via.placeholder.com/2000"} className="card-img-top" alt="..." />
      ) : (
        <img src={pokemon.img} className="card-img-top" alt="..." />
      )
      }
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <p className="card-text"> Type: {pokemon.type}</p>
        <p className="card-text">Personality: {pokemon.personality} </p>
      </div>
    </div>
  )
}

export default Pokemon