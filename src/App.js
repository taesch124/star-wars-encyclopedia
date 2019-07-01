import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import PlanetContainer from './Components/Planets/PlanetContainer';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main-content">
        <Route exact path="/planets" render={props => <PlanetContainer {...props} />} />
      </div>
      
    </div>
  );
}

export default App;
