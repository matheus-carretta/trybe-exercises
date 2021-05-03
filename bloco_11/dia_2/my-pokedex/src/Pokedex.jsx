import React from 'react';
import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
  render(){
    return (
      <div className='pokemonList'>
        {data.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    )
  }
}

export default Pokedex;