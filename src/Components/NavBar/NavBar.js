import React from 'react';
import './NavBar.scss';

function NavBar(props) {
    return (
        <div className="navbar">
            <h4><a href="/planets"><img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/planet-icon.png"} alt="Planet icon"/>Planets</a></h4>
            <h4><a href="/starships">Starships</a></h4>
            <h4><a href="/vehicles">Vehicles</a></h4>
        </div>
    )
}

export default NavBar;