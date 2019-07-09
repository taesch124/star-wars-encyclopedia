import React from 'react';

import './PlanetPanel.scss'

function PlanetPanel (props) {
    let planetData = props.planet;
    return (
        <div className='planet-panel' id='selected-planet'>
            
            <div className='front'>
                <div className="menu">
                    <button onClick={props.deselectPlanet}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    <h3 className="planet-name-front">{planetData.name}</h3>
                </div>
            </div>
            <div className={`back ${planetData.terrain.split(', ').join(' ')}`}>
                <div className="menu">
                    <button onClick={props.deselectPlanet}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <h5>{planetData.name}</h5>
                <p>Terrain: {planetData.terrain}</p>
                <p>Climate: {planetData.climate}</p>
                <p>Surface Water: {planetData.surface_water}%</p>
                <p>Diameter: {planetData.diameter}km</p>
                <p>Day Length:{planetData.rotation_period} hours</p>
                <p>Year Length: {planetData.orbital_period} days</p>
                <p>Population: {planetData.population}</p>
                <p>Gravity: {planetData.gravity} G</p>
            </div>
        </div>
    )
}

export default PlanetPanel;