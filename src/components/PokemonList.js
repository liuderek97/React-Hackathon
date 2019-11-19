import React, { Component } from "react";
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import {Loader, Container, Segment,Dimmer, Image} from 'semantic-ui-react'
export default class PokemonList extends Component
 {
  constructor(props)
    {
        super(props);
        this.state = {
            pokemon: [],
			pokemonList:[],
			chosenPokemon:'',
			isLoading: false
        }
    }

    componentDidMount()
    {   
		
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
			.then(res => res.json(),
				this.setState({isLoading:true})			
			)
            .then((result)=>{
                let pokemonList = result.results
                this.setState({pokemon:pokemonList})  
                let pokeList = []
                for(let i = 1; i <= this.state.pokemon.length; i++)
                {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                        .then(res => res.json())
                        .then((result => {
                            pokeList.push(result)
							this.setState({pokemonList: pokeList, isLoading:false})							
                        }))
                }
			})
		
    }

    handleClick = (pokemon) => {
        console.log('hi')
        console.log(pokemon)
        this.setState({chosenPokemon:pokemon})
        
        
    }

    render() 
    {   
		console.log(this.state.isLoading)
		const {pokemonList,chosenPokemon} = this.state
		
		if(this.state.chosenPokemon){
			return <Redirect 
			to={{
				pathname: `/show`,
				pokemon: chosenPokemon				
			}}/>
	
		}

        const list = () => {
			if(this.state.isLoading)
			{
				return(
					<Container>
						<Loader active inline='centered'>Loading</Loader>	
					</Container>
					
				)
				
			}

			else
			{
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
           
		}

		return(
			<main>
             <h1>Pokemon</h1>
             <div id='pokemon-container'>
			 
             {list()}
            </div>
            </main>
		)
	}
}