import React, { Component } from 'react';
import {Input, Grid, Button} from 'semantic-ui-react'

export default class PokemonShow extends Component
{

	constructor(props)
	{
		super(props);
		this.state = {
			searchPokemon:null,
			searched: false,
			culledData:null
		}
	}


    showPokemon = e => 
    {
        let id = e.currentTarget.dataset['id'];
        this.props.history.push(`/show/${id}`);
	}
	
	search = () => {
		this.setState({searched: true})
		let search = this.state.searchPokemon
		let data = this.props.data
		let searchResults = data.pokemon.filter((pokemon) => {
			return pokemon.name.includes(search)
		})
		this.setState({culledData: searchResults})
	}

	handleClear = () => {
		this.setState({searched:false})
	}

    render()
    {
		let { data, loading } = this.props;
		let {culledData, searched} = this.state;
        const list = () =>
        {
			if(searched && culledData)
			{
				return(
					culledData.map( (pokemon, i) => 
					{
						return(
							<div className={`pokemon ${pokemon.type}`} key={pokemon.name} data-id={pokemon.id} onClick={this.showPokemon}>
								<div className='sprite'>                                
								{console.log(pokemon)}
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
			
			else
			{
				return(
					data.pokemon.map( (pokemon, i) => 
					{
						return(
							<div className={`pokemon ${pokemon.type}`} key={pokemon.name} data-id={i} onClick={this.showPokemon}>
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
           
		}
		
		
		const searchBar = () => {
			return(
				<Grid centered>
					<Input 
						style={{margin:'20px', borderRadius:'20px'}}
						onChange={(e, {value}) => {
							this.setState({searchPokemon:value})
						}}
						placeholder='Search...'/>

					<Button
						primary
						style={{margin: '15px'}}
						onClick={this.search}
					>
						Search
					</Button>
					<Button
						primary
						style={{margin: '15px'}}
						onClick={this.handleClear}
					>
						Clear
					</Button>
				</Grid>
			)
		}

        return (
            <div>
                {data.pokemon === null && loading()}
                {data.pokemon !== null && 
                    <div className="container">
                        <div>
                            <h1>Pokémon</h1>
							{searchBar()}
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