import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

import NavBar from './Components/NavBar/NavBar';
import PlanetContainer from './Components/Planets/PlanetContainer';
import StarshipContainer from './Components/Starships/StarshipContainer';

function App() {
  return (
    <div className="App">
      <div className="navbar-content">
        <NavBar />
      </div>
      <div className="main-content">
        <Route exact path="/planets" render={props => <PlanetContainer {...props} />} />
        <Route exact path="/starships" render={props => <StarshipContainer {...props} />} />
      </div>
      
    </div>
  );
}

export default App;
