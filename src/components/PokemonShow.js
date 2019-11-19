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
        return(
            <main>
                <h1>{this.state.pokemon.name}</h1>
                <img src={this.state.pokemon.sprites.front_default}/>
            </main>
        )
    }
}