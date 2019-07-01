import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//Mpdels
import PlanetPanel from './PlanetPanel';
import PlanetListItem from './PlanetListItem';
import SimpleList from './../Lists/SimpleList';
import { type } from 'os';

//CSS



class PlanetContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planetList: [],
            endOfList: false,
            nextPlanetsUrl: '',
            selectedPlanetUrl: '',
            selectedPlanet: null,
            lastScrollPosition: -1
        }
    }

    componentDidMount() {
        
        this.getPlanetList('https://swapi.co/api/planets/');
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling)
    }

    render() {
        return (
            <div className="planet-container">
                {
                    this.state.selectedPlanet 
                    ?
                    <PlanetPanel 
                        planet={this.state.selectedPlanet} 
                        deselectPlanet={this.deselectPlanet} 
                    />
                    :
                    <SimpleList
                        trackScrolling={null}
                    >
                        {this.state.planetList.length > 0 ?
                        this.state.planetList.map(planet => {
                            return (
                                <PlanetListItem 
                                    key={planet.url} 
                                    selectPlanet={this.selectPlanet} 
                                    planet={planet} />
                            )
                        }) :
                        <p>No planet data yet</p>}
                    </SimpleList>
                }
                
            </div>
        )
    }

    getPlanetList = (url) => {
        axios.get(url)
        .then(response => {
            let newList = [...this.state.planetList, ...response.data.results];
            console.log(newList);
            this.setState({
                planetList: newList,
                nextPlanetsUrl: response.data.next,
                endOfList: false
            });
        })
        .catch(error => {
            console.error(error);
        });
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

    deselectPlanet = () => {
        
        
        this.setState({
            selectedPlanet: null,
        }, () => {
            if(this.state.lastScrollPosition >= 0) {
                window.scrollTo(0, this.state.lastScrollPosition);
            }
        });
    }

    trackScrolling = (e) => {
        
        if(this.state.selectedPlanet) return;

        let wrappedElement = document.getElementById('list');
        if(this.isBottom(wrappedElement) && !this.state.endOfList) {
            this.setState({
                endOfList: true
            }, () => {
                if(this.state.nextPlanetsUrl) this.getPlanetList(this.state.nextPlanetsUrl);
            });
        }
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
      }
}

export default PlanetContainer;