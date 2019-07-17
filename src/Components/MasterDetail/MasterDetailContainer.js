import React, {Component} from 'react';
import axios from 'axios';

//Mpdels
import InfiniteList from './../Lists/InfiniteList';

//CSS

class MasterDetailContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItemUrl: '',
            selectedItem: null,
            lastScrollPosition: -1
        }
    }

    render() {
        const PanelComponent = this.props.panelComponent;
        return (
            <div className="master-detail-container">
                {this.state.selectedItem ?
                <PanelComponent 
                    item={this.state.selectedItem}
                    toggleDetails={this.toggleDetails}
                    deselectItem={this.deselectItem}
                />
                :
                <InfiniteList
                    startingUrl={this.props.startingUrl}
                    selectedItem={this.state.selectedItem}
                    listItemComponent={this.props.listItemComponent}
                    selectItem={this.selectItem}
                    listLoaded={this.setScrollPosition}
                />
                }
            </div>
        )
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

    setScrollPosition = () => {
        if(this.state.lastScrollPosition >= 0) {
            window.scrollTo(0, this.state.lastScrollPosition);
        }
    }

    deselectItem = () => {
        console.log(this.state.lastScrollPosition)
        this.setState({
            selectedItem: null,
        });
    }

    toggleDetails = (e) => {
        let panel = document.getElementById('selected-item');

        if(panel.classList.contains('flip')) {
            panel.classList.remove('flip');
        } else {
            panel.classList.add('flip');
        }
        
    }
}

export default MasterDetailContainer;