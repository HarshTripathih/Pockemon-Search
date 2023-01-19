import React, { useState } from 'react'
import './App.css';
import PropTypes from 'prop-types';
import pockemon from './pockemon.json';


const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    special_attack: PropTypes.number.isRequired,
    special_defense: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
  })


})

const PokemonRow = ({ pockemon}) => {
  return (

    <tr>
      <td>{pockemon.name.english}</td>
      <td>{pockemon.type.join(", ")}</td>
      <td><button>More Information</button></td>
    </tr>


  )
}

PokemonRow.propTypes = {
  pockemon: PokemonType
}


function App() {
  //two rules of hooks
  //it should be on top level management
  //it should be inside react function
  const [filter, setFilter] = useState('')

  console.log(filter)

  const searchPokemon = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1em'
    }} >
      <h1 className='title'>Pokemon Search</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: "80% 20%",
          gridColumnGap: '1rem'
        }}
      >
        <div>
          <input
            type='text'
            value={filter}
            onChange={searchPokemon}

          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>

              {pockemon.filter((pockemon) => pockemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0, 20).map((pockemon) => (
                <PokemonRow key={pockemon.id} pockemon={pockemon} />
              )
              )}
              {/* {pokemon.filter(({ name: { english } }) => english.includes(filter)).slice(0, 20).map((pokemon) => (
                <PokemonRow key={pokemon.id} pokemon={pokemon} />
              )
              )} */}
            </tbody>
          </table>
        </div>


      </div>

    </div>
  );
}

export default App;
