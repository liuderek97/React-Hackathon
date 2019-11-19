import React, { Component } from "react";
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import PokemonShow from './PokemonShow'
import PokemonList from './PokemonList'
import { readdir } from "fs";
export default class App extends Component 
{
    render() 
    {   
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
