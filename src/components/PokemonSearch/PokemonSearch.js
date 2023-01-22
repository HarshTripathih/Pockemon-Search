import React from "react";


function PokemonSearch({ filter, setFilter }) {

    const searchPokemon = (event) => {
        setFilter(event.target.value)
    }
    return (
        <input style={{borderRadius:'15px'}}
            type='text'
            value={filter}
            onChange={searchPokemon}

        />
    )
}

export default PokemonSearch