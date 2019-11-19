import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class PokemonShow extends Component
{
    render()
    {
        let { id } = this.props.match.params;
        let { data, loading } = this.props;
        
        const show = () =>
        {
            return (
                <div className={`${data.pokemon[id].type} pokemon-show`} >
                    <h1>{data.pokemon[id].name}</h1>
                    <div className="sprite">
                        <span className="id">#{id}</span>
                        <img src={data.pokemon[id].sprite} alt={data.pokemon[id].name} />
                    </div>
                </div>
            )
        }
        
        return (
            <div>
                {data.pokemon === null && loading()}                

                {data.pokemon !== null && 
                    <div>
                        <Link id="back" to='/'>Back</Link>
                        {show()}
                    </div>
                }

            </div>
        )
    }
}