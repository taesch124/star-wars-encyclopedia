import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';

import NavBar from './Components/NavBar/NavBar';
import PlanetContainer from './Components/Planets/PlanetContainer';
import StarshipContainer from './Components/Starships/StarshipContainer';
import VehicleContainer from './Components/Vehicles/VehicleContainer';

function App() {
  return (
    <div className="App">
      <div className="navbar-content">
        <NavBar />
      </div>
      <div className="main-content">
        <Route exact path="/planets" render={props => <PlanetContainer {...props} />} />
        <Route exact path="/starships" render={props => <StarshipContainer {...props} />} />
        <Route exact path="/vehicles" render={props => <VehicleContainer {...props} /> } />
      </div>
      
    </div>
  );
}

export default App;
