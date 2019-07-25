import React from 'react';
import './NavBar.scss';

function NavBar(props) {
    return (
        <div id="navbar-content" className="navbar">
            <div id="navbar-open" onClick={toggleNavbar}>
                <h4><a href="/planets"><img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/planet-icon.png"} alt="Planet icon"/>Planets</a></h4>
                <h4><a href="/starships">Starships</a></h4>
                <h4><a href="/vehicles">Vehicles</a></h4>
            </div>
            <div id="navbar-closed" className="hidden">
                <img id="navbar-expand" className="icon" src={process.env.PUBLIC_URL + '/assets/images/icons/hamburger.png'} alt="Hanburger icon" onClick={toggleNavbar} />
            </div>
        </div>
    )
}

function toggleNavbar(e) {
    if(!document.getElementById('navbar-content').classList.contains('navbar-hidden')) {
        document.getElementById('navbar-content').classList.add('navbar-hidden');
        document.getElementById('navbar-closed').classList.remove('hidden');
        document.getElementById('navbar-open').classList.add('hidden');
    } else if (e.target.id === "navbar-expand"){
        document.getElementById('navbar-content').classList.remove('navbar-hidden');
        document.getElementById('navbar-open').classList.remove('hidden');
        document.getElementById('navbar-closed').classList.add('hidden');
    }
}

export default NavBar;