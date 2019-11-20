import React, { Component } from 'react';

export default class PokemonShow extends Component
{
    showPokemon = e => 
    {
        let id = e.currentTarget.dataset['id'];
        this.props.history.push(`/show/${id}`);
    }

    render()
    {
        let { data, loading } = this.props;

        const list = () =>
        {
            return(
                data.pokemon.map( (pokemon, i) => 
                {
                    return(
                        <div className={`pokemon ${pokemon.type[0].type.name}`} key={pokemon.name} data-id={i} onClick={this.showPokemon}>
                            <span className='id'>#{i}</span>
                            <div className='sprite'>                                
                                <img src={pokemon.sprite} alt={pokemon.name} loading='lazy' />
                            </div>
                            <div className='name'>
                                {pokemon.name}
                            </div>
                        </div> 
                    )
                })
            )
        }

        return (
            <div>
                {data.pokemon === null && loading()}
                
                {data.pokemon !== null && 
                    <div className="container">
                        <div>
                            <div id='pokemon-logo'>
                                <img src='/pokemon_logo.png' alt='Pokemon Logo' />
                            </div>
                            {/* <input id="search" type="text" placeholder="Search..." /> */}
                            <div id='pokemon-container'>
                                {list()}
                            </div>
                        </div>
                    </div>
                }
            </div>    
            
        )
    }
}