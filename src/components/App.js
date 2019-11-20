import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PokemonShow from './PokemonShow'
import PokemonList from './PokemonList'
import {Loader} from 'semantic-ui-react'

export default class App extends Component 
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            pokemon: null
        }
    }

    getPokemon = async () =>
    {
        const apiUrl = 'https://pokeapi.co/api/v2';
        let pokemon = await fetch(`${apiUrl}/pokemon/?limit=30`).then(res => res.json());
        let char = [ ];
        let promises = [ ];
        
        for (let i in pokemon.results)
        {
            const p = fetch(pokemon.results[i].url).then(res => res.json())
            
            let promise = p.then(p =>
            {
                char[p.id]        = { };
                char[p.id].name   = p.name;
                char[p.id].sprite = p.sprites.front_default;
                char[p.id].type   = p.types[0].type.name;
                char[p.id].id     = p.id
            })
            
            promises.push(promise);
        }

        Promise.all(promises).then(() => this.setState({ pokemon: char }))
    }

    loading = () =>
    {
        return (
            <div className="loading">
                <Loader active>Loading</Loader>
            </div>
        )
    }

    componentDidMount()
    {   
        this.getPokemon()
    }

    render() 
    {   
        const data = this.state;
        
        return (
            
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'         render={props => <PokemonList loading={this.loading} data={data} {...props} />} />
                        <Route exact path='/show/:id' render={props => <PokemonShow loading={this.loading} data={data} {...props} />} />
                    </Switch>
                </BrowserRouter>
            </main>
        )
    }
}
