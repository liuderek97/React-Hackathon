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
                <div className={`${data.pokemon[id].type[0].type.name} pokemon-show`} >

                    <h1>{data.pokemon[id].name}</h1>

                    <span className="id">#{id}</span>

                    <div className="sprite">
                        <img src={data.pokemon[id].sprite} alt={data.pokemon[id].name} />
                    </div>

                    <aside>
                        <div className="box stats">
                            <div>Weight: {data.pokemon[id].weight}</div>
                            <div>Height: {data.pokemon[id].height}</div>
                            {data.pokemon[id].stats.map((stat, i) => <div key={i}>{stat.stat.name}: {stat.base_stat}</div>)}
                        </div>

                        <div className="box types">
                            {data.pokemon[id].type.map( (type, i) => <div key={i}>{type.type.name}</div>)}
                        </div>

                        <div className="box items">
                            {data.pokemon[id].items.map( (item, i) => <div key={i}>{item.item.name}</div>)}
                        </div>
                    </aside>
                
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