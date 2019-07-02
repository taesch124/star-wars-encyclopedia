import React from 'react';
import './PlanetListItem.scss';

function PlanetListItem(props) {
    let planet = props.planet;
    return (
        <div onClick={e => props.selectPlanet(planet.url)} className="planet-list-item">
            <h3 >{planet.name}</h3>
        </div>
    )
}

export default PlanetListItem;