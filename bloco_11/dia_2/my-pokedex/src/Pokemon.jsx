import React from 'react';

class Pokemon extends React.Component{
  render(){
    const {pokemon: {name, type, averageWeight, image}} = this.props;
    return (
      <div className='pokemonCard'>
        <div>
          <h1>{name}</h1>
          <h2>{type}</h2>
          <h2>{averageWeight.value}{averageWeight.measurementUnit}</h2>
        </div>
        <img src={image} alt={name}/>
      </div>
    );
  }
}

export default Pokemon;