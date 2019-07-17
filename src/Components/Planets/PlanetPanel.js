import React from 'react';

import './PlanetPanel.scss'

function PlanetPanel (props) {
    let planetData = props.item;
    return (
        <div className='panel planet-panel' id='selected-item'>
            
            <div className='front'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    <h3 className="planet-name-front">{planetData.name}</h3>
                </div>
            </div>
            <div className={`back ${planetData.terrain.split(', ').join(' ')}`}>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
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
        </div>
    )
}

export default PlanetPanel;