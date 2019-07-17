import React from 'react';


function VehiclePanel(props) {
    let vehicle = props.item;

    return (
        <div className='panel vehicle-panel' id='selected-item'>
            
            <div className='front'>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="front-content">
                    <h3 className="planet-name-front">{vehicle.name}</h3>
                </div>
            </div>
            <div className={`back`}>
                <div className="menu">
                    <button onClick={props.deselectItem}>Back</button>
                    <button onClick={props.toggleDetails}>Flip</button>
                </div>
                <div className="back-content">
                    <h5>{vehicle.name}</h5>
                    <p>Model: {vehicle.model}</p>
                    <p>Class: {vehicle.vehicle_class}</p>
                    <p>Manufacturer: {vehicle.manufacturer}</p>
                    <p>Length: {vehicle.length}m</p>
                    <p>Crew: {vehicle.crew} poeple</p>
                    <p>Passengers: {vehicle.passengers} people</p>
                    <p>Atmospheric Speed: {vehicle.max_atmosphering_speed}</p>
                    <p>Cargo Capacity: {vehicle.cargo_capacity} kg</p>
                </div>
            </div>
        </div>
    )
}

export default VehiclePanel;