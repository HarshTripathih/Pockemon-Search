import React from "react"
import './PokemonInfo.css'

const PokemonInfo = ({ name: { english }, base }) => {
    return (
        <div className="pokemon_info_box">
            <h1 style={{color:'red',textAlign:'center'}}>{english}</h1>
            <table>
                <tbody>
                    {Object.keys(base).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{base[key]}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PokemonInfo