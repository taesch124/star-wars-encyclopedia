import React, { Component } from 'react';
import axios from 'axios';

import SimpleList from './../Lists/SimpleList';
import StarshipListItem from './StarshipListItem';
import StarshipPanel from './StarshipPanel';

class StarshipContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            starshipList: [],
            nextShipUrl: '',
            endOfList: false,
            selecedItem: null,
        };
    }

    componentDidMount() {
        this.getStarshipList('https://swapi.co/api/starships');
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling)
    }

    render() {
        return (
            <div className="starship-container">
                {
                    this.state.selectedItem 
                    ?
                    <StarshipPanel
                        selecedItem={this.state.selectedItem}
                        deselectItem={this.deselectItem}
                        toggleDetails={this.toggleDetails}
                    />
                    :
                    <SimpleList>
                        {this.state.starshipList.length > 0 
                        ?
                        this.state.starshipList.map(ship => 
                            <StarshipListItem
                                key={ship.url}
                                starship={ship}
                                selectItem={this.selectItem}
                            />
                        )
                        :
                        <p>No ship data yet</p>
                        }
                    </SimpleList>
                }
                
            </div>
        )
    }

    getStarshipList = (url) => {
        axios.get(url)
        .then(response => {
            let newList = [...this.state.starshipList, ...response.data.results];
            console.log(newList);
            this.setState({
                starshipList: newList,
                nextShipUrl: response.data.next,
                endOfList: false,
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    selectItem = (itemUrl) => {
        axios.get(itemUrl)
        .then(response => {
            this.setState({
                selectedItem: response.data,
                lastScrollPosition: window.scrollY
            })
        })
        .catch(error => {
            console.error(error);
        });
    }

    deselectItem = () => {
        this.setState({
            selectedItem: null,
        }, () => {
            if(this.state.lastScrollPosition >= 0) {
                window.scrollTo(0, this.state.lastScrollPosition);
            }
        });
    }

    trackScrolling = (e) => {
        
        if(this.state.selectedStarship) return;

        let wrappedElement = document.getElementById('list');
        if(this.isBottom(wrappedElement) && !this.state.endOfList) {
            this.setState({
                endOfList: true
            }, () => {
                if(this.state.nextShipUrl) this.getStarshipList(this.state.nextShipUrl);
            });
        }
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    toggleDetails = (e) => {
        console.log(document.getElementById('selected-item'));
        let panel = document.getElementById('selected-item');

        if(panel.classList.contains('flip')) {
            panel.classList.remove('flip');
        } else {
            panel.classList.add('flip');
        }
        
    }
}

export default StarshipContainer;