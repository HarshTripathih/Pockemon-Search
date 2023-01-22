import React from "react"




const PokemonRow = ({ pokemon, getSelectedPokemon }) => {
    return (
        <tr>
            <td style={{color:'blue',fontSize:'30px',border:'3px solid blue',borderRadius:'10px'}}>{pokemon.name.english}</td>
            <td style={{color:'green',fontSize:'30px',border:'3px solid green',borderRadius:'10px'}}>{pokemon.type.join(", ")}</td>
            <td><button style={{padding:'15px',color:'whitesmoke',backgroundColor:'red',fontSize:'15px',borderRadius:'15px'}} 
            onClick={() => getSelectedPokemon(pokemon)} >More Information</button></td>
        </tr>

    )
}

export default PokemonRow;