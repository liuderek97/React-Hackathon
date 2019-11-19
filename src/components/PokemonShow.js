import React, {Component} from 'react';

export default class PokemonShow extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            pokemon: this.props.location.pokemon
        }
    }


    render()
    {
        console.log(this.state.pokemon)
        return(
            <main>
                {this.state.pokemon ? this.state.pokemon.name : <h1>Pokemon</h1>}
                {this.state.pokemon ? <img src={this.state.pokemon.sprites.front_default} alt='pokemon'/> : <h1>Sprite</h1>}
            </main>
        )
    }
}