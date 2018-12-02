import React, { Component } from 'react';

//Import CSS
import './css/reset.css'
import './css/index.css'
import './css/data-content-button.css'
import './css/data-content-table.css'

//Import Component
import Button from './component/Button';
import DataContent from './component/DataContent';


class App extends Component {
  constructor(){
    super();
    this.state = {
      planet:{
      name:'',
      climate:'',
      terrain:'',
      population:'',
      films:''
      },
      nextPlanet:1,
      searchPlanet:'',
      loading: false
    };
  };

  
  componentDidMount(){
    let next = parseInt(Math.random() * (61 - 1) +1);
    this.setState({loading:true}, ()=>{
    this.setState({nextPlanet: next});
    this.nextFunction(next);
    });
  };

  nextButton = () => {
      let next = parseInt(Math.random() * (61 - 1) +1);
      this.setState({nextPlanet: next});
      return this.nextFunction(next);

  };

  nextFunction =(planetState) =>{
    this.setState({loading:true}, ()=>{
    fetch(`https://swapi.co/api/planets/${planetState}/?format=json`)
    .then(res => res.ok? res.json():console.log(res.statusText))
    .catch(err => console.log(`There was an error in the request - ${err}`))
      .then(planet => 
        this.setState({
        loading:false,
        planet:{
        name: planet.name,
        climate: planet.climate,
        terrain: planet.terrain,
        population: planet.population,
        films: planet.films}
        })
      )}
    );

  };

  searchPlanet = event =>{
    this.setState({searchPlanet: event.target.value})
  };

  searchPlanetButton = () =>{
    if(this.state.searchPlanet >= 1 && this.state.searchPlanet <= 61){
      let planet = this.state.searchPlanet;
      this.setState({nextPlanet: planet});
      this.nextFunction(planet);
    }
    else{
      return false
    };

  };

  render() {
    return (
      <React.Fragment>
        <section>
          <header className="title">{
            this.state.loading?
              <div className="lds-dual-ring_div_name">
                <div className="lds-dual-ring"></div>
              </div>
              :
              <h1>{this.state.planet.name}</h1>  
              }
          </header>
          <div className="title__backgroundImage"/>
        </section>
        <div className="search">
          <div className="search__text">
            <input  type="text" value={this.state.searchPlanet} onChange={this.searchPlanet} placeholder="Enter the number of the planet you want"/>
          </div>
        <div className="search__button">
          <Button  button={this.searchPlanetButton} type="button" />
          </div>
        </div>
        <section className="data-contents">
            {this.state.loading? 
            
          
            <div className="lds-dual-ring_div_data">
            <div className="lds-dual-ring"></div>
            </div>:
            <React.Fragment>
            <DataContent planet={this.state.planet} nextButton={this.nextButton} nextPlanet={this.state.nextPlanet}/>
            <div className="data-contents__nextprevPlanet">
            <div className="next">
            <Button  button={this.nextButton} nextPlanet={this.state.planet.films.length} type="button"/>
            <p>Current planet number <span class="planetNumber
            ">{this.state.nextPlanet}</span></p>
            </div>
            </div>
            </React.Fragment>}
          </section>
          <div className="end">
          <h1 >“Do. Or do not. There is no try.”</h1>
            <p>Yoda</p>
            </div>
      </React.Fragment>
    );
  };
};

export default App;
