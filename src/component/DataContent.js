import React, {Component} from 'react'


export default class DataContent extends Component{
    render(){
        return (
        <React.Fragment>
            <div className="data-contents__planetData">
                <h2>Population</h2>
                    <h3>{this.props.planet.population}</h3>
                <h2>Climate</h2>
                    <h3>{this.props.planet.climate}</h3>
                <h2>Terrain</h2>
                    <h3>{this.props.planet.terrain}</h3>
                <h2>Films</h2>
                    <h3>{this.props.planet.films.length}</h3>
            </div>
        </React.Fragment>
        );
    };
};