import React from 'react';

import './PlanetPanel.css'

function PlanetPanel (props) {
    let planetData = props.planet;
    return (
        <div className='planet-panel'>
            <button onClick={props.deselectPlanet}>Back</button>
            <p>Name: {planetData.name}</p>
            <p>Terrain: {planetData.terrain}</p>
            <p>Climate: {planetData.climate}</p>
            <p>Surface Water: {planetData.surface_water}%</p>
            <p>Diameter: {planetData.diameter}km</p>
            <p>Day Length:{planetData.rotation_period} hours</p>
            <p>Year Length: {planetData.orbital_period} days</p>
            <p>Population: {planetData.population}</p>
            <p>Gravity: {planetData.gravity} G</p>
        </div>
    )
}

export default PlanetPanel;