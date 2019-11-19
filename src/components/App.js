import React, { Component } from "react";

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
        console.log(pokemonList)
        const list = () => {
            return(
                pokemonList.map((index) => {
                    return(
                        <div className={`pokemon ${index.types[0].type.name}`} key={index.name}>
                            <div className='sprite'>
                                <img src={index.sprites.front_default} alt={index.name}/>
                            </div>
                            <div className='name'>
                                {index.name}
                            </div>
                        </div>
                    )
                })
            )
        }
        return (
            <main>
             <h1>Pokemon</h1>
             <div id='pokemon-container'>
                {list()}
            </div>
            </main>
        )
    }
}
