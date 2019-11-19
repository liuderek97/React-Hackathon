import React, { Component } from "react";
import {Button} from 'antd'

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


  

    render() 
    {   
        const pokemonList = this.state.pokemonList
        
        const list = () => {
            return(
                pokemonList.map((index) => {
                    return(
                        <div id='pokemon-container'>
                            <div className='pokemon' data-id={index} key={index.name}>
                                <div className='sprite'>
                                    <img src={index.sprites.front_default} alt={index.name}/>
                                </div>
                                <div className='name'>
                                    {index.name}
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
        return (
            <main>
             <h1>Pokemon</h1>
                {list()}
            </main>
        )
    }
}

