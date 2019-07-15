import React from 'react';


function VehiclePanel(props) {
    let vehicle = props.item;

    return (
        <div className="vehicle-panel">
            <h4>{vehicle.name}</h4>
        </div>
    )
}

export default VehiclePanel;