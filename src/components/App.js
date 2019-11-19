import React, { Component } from "react";
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import PokemonShow from './PokemonShow'
import { readdir } from "fs";
export default class App extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            pokemon: [],
            pokemonList:[]
        }
    }

    componentDidMount()
    {   
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(res => res.json())
            .then((result)=>{
                let pokemonList = result.results
                this.setState({pokemon:pokemonList})  
            })
            .then(() => {
                let pokeList = []
                for(let i = 1; i <= this.state.pokemon.length; i++)
                {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                        .then(res => res.json())
                        .then((result => {
                            pokeList.push(result)
                            this.setState({pokemonList: pokeList})
                        }))
                }
            })
    }

    handleClick = (pokemon) => {
        console.log('hi')
        return(
            <Redirect 
                to={{
                    pathname: "/show",
                    state: {pokemon}
                }}/>
        )
        
    }

    render() 
    {   
        const pokemonList = this.state.pokemonList
        const list = () => {
            return(
                pokemonList.map((pokemon) => {
                    return(
                        <div className={`pokemon ${pokemon.types[0].type.name}`} key={pokemon.name} onClick={() => this.handleClick(pokemon)}>
                            <div className='sprite'>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
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
            <main>
            <BrowserRouter>
                <Route exact path={'/show'} component={PokemonShow}/>
            </BrowserRouter>

             <h1>Pokemon</h1>
             <div id='pokemon-container'>
             <BrowserRouter>
                {list()}
                </BrowserRouter>
            </div>
            </main>
        )
    }
}
