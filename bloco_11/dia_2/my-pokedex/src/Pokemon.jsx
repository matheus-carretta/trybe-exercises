import React from 'react';

class Pokemon extends React.Component{
  render(){
    const {pokemon: {name, type, averageWeight, image}} = this.props;
    return (
      <div className='pokemon'>
        <div>
          <h1 className={ type.toLowerCase() }>{name}</h1>
          <h2 className={ type.toLowerCase() }>{type}</h2>
          <h2>{averageWeight.value}{averageWeight.measurementUnit}</h2>
        </div>
        <img className="pokeImg" src={image} alt={name}/>
      </div>
    );
  }
}

export default Pokemon;