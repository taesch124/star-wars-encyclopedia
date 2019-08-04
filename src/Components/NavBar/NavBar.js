import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';

function NavBar(props) {
    return (
        <div id="navbar-content" className="navbar">
            <div id="navbar-open" onClick={toggleNavbar}>
                <div className="navbar-shrink">
                    <img className="icon navbar-button" src={process.env.PUBLIC_URL + "/assets/images/icons/left-arrow.png"} alt="Shrink Navbar" onClick={toggleNavbar}></img>
                </div>

                <div className="navbar-links">
                    <Link to="/planets">
                        <div className="navbar-link">
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/planet-icon.png"} alt="Planets icon"/>
                            <h4>Planets</h4>
                        </div>
                    </Link>
                    <Link to="/starships">
                        <div className="navbar-link">
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/starship-icon.png"} alt="Starships icon" />
                            <h4>Starships</h4>
                        </div>
                    </Link>
                    
                    <Link to="/vehicles">
                        <div className="navbar-link">
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/speeder-icon.png"} alt="Vehicles icon" />
                            <h4>Vehicles</h4>
                        </div>
                    </Link>

                    <Link to="/species">
                        <div className="navbar-link">
                            <img className="icon" src={process.env.PUBLIC_URL + "/assets/images/icons/species-icon.png"} alt="Species icon" />
                            <h4>Species</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div id="navbar-closed" className="hidden">
                <img id="navbar-expand" className="icon navbar-button" src={process.env.PUBLIC_URL + '/assets/images/icons/hamburger.png'} alt="Hanburger icon" onClick={toggleNavbar} />
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