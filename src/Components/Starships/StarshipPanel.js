import React from 'react';

import './StarshipPanel.scss'

function StarshipPanel (props) {
    let starshipData = props.item;
    console.log(starshipData);
    return (
        <div className='panel starship-panel' id='selected-item'>
            
            <div className='front'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    <h3 className="starship-name-front">{starshipData.name}</h3>
                </div>
            </div>
            <div className={`back`}>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
                    <h5>{starshipData.name}</h5>
                    <p>Model: {starshipData.model}</p>
                    <p>Class: {starshipData.starship_class}</p>
                    <p>Manufacturer: {starshipData.manufacturer}</p>
                    <p>Length: {starshipData.length}m</p>
                    <p>Crew: {starshipData.crew} poeple</p>
                    <p>Passengers: {starshipData.passengers} people</p>
                    <p>Hyperdrive Rating: {starshipData.hyperdrive_rating}</p>
                    <p>Cargo Capacity: {starshipData.cargo_capacity} kg</p>
                </div>
            </div>
        </div>
    )
}

export default StarshipPanel;