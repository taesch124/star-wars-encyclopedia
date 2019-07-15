import React, {Component} from 'react';
import axios from 'axios';

//Mpdels
import PlanetPanel from './PlanetPanel';
import PlanetListItem from './PlanetListItem';
import InfiniteList from './../Lists/InfiniteList';

//CSS



class PlanetContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPlanetUrl: '',
            selectedPlanet: null,
            lastScrollPosition: -1
        }
    }

    render() {
        const planetListItem = <PlanetListItem />
        return (
            <div className="planet-container">
                {
                    this.state.selectedPlanet 
                    ?
                    <PlanetPanel 
                        item={this.state.selectedPlanet} 
                        deselectPlanet={this.deselectPlanet}
                        toggleDetails={this.toggleDetails}
                    />
                    :
                    <InfiniteList
                        startingUrl={'https://swapi.co/api/planets'}
                        selectedItem={this.state.selectedPlanet}
                        listItemComponent={planetListItem}
                        selectItem={this.selectPlanet}
                        listLoaded={this.setScrollPosition}
                    />
                }
                
            </div>
        )
    }

    selectPlanet = (planetUrl) => {
        axios.get(planetUrl)
        .then(response => {
            this.setState({
                selectedPlanet: response.data,
                lastScrollPosition: window.scrollY
            })
        })
        .catch(error => {
            console.error(error);
        });
    }

    setScrollPosition = () => {
        if(this.state.lastScrollPosition >= 0) {
            window.scrollTo(0, this.state.lastScrollPosition);
        }
    }

    deselectPlanet = () => {
        console.log(this.state.lastScrollPosition)
        this.setState({
            selectedPlanet: null,
        });
    }

    toggleDetails = (e) => {
        let panel = document.getElementById('selected-planet');

        if(panel.classList.contains('flip')) {
            panel.classList.remove('flip');
        } else {
            panel.classList.add('flip');
        }
        
    }
}

export default PlanetContainer;