import React, { Component } from "react";
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import PokemonShow from './PokemonShow'
import PokemonList from './PokemonList'
import { readdir } from "fs";
export default class App extends Component 
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         pokemon: [],
    //         pokemonList:[],
    //         loading: false;
    //     }
    // }

    // componentDidMount()
    // {   
    //     fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    //         .then(res => res.json())
    //         .then((result)=>{
    //             let pokemonList = result.results
    //             this.setState({pokemon:pokemonList})  
    //             let pokeList = []
    //             for(let i = 1; i <= this.state.pokemon.length; i++)
    //             {
    //                 fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    //                     .then(res => res.json())
    //                     .then((result => {
    //                         pokeList.push(result)
    //                         this.setState({pokemonList: pokeList})
    //                     }))
    //             }
    //         })
    // }

    // handleClick = (pokemon) => {
    //     console.log('hi')
    //     console.log(pokemon)
    //     return <Redirect 
    //             to={{
    //                 pathname: `/show`,
    //                 state: {
    //                     pokemon: pokemon
    //                 }
    //             }}/>
        
        
    // }

    render() 
    {   
        // const pokemonList = this.state.pokemonList
        // const list = () => {
        //     return(
        //         pokemonList.map((pokemon) => {
        //             return(
        //                 <div className={`pokemon ${pokemon.types[0].type.name}`} key={pokemon.name} onClick={() => this.handleClick(pokemon)}>
        //                     <div className='sprite'>
        //                         <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        //                     </div>
        //                     <div className='name'>
        //                         {pokemon.name}
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     )
        // }
        return (
            <main>
            <BrowserRouter>
                <Route exact path={'/show'} component={PokemonShow}/>
                <Route exact path = {'/'} component={PokemonList}/>
            </BrowserRouter>
            </main>
        )
    }
}
