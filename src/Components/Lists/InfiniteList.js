import React, { Component } from 'react';
import axios from 'axios';

class InfiniteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemList: [],
            nextItemsUrl: '',
            endOfList: false
        }
    }

    componentDidMount() {
        this.getNextItems(this.props.startingUrl);
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling)
    }
    
    render() {
        const ListItemComponent = this.props.listItemComponent;
        return (
            <div id="master-list" className="list infinite-list">
                <ul className="infinite-list-group">
                    {this.state.itemList.length > 0 ?
                    this.state.itemList.map(item => {
                        return (
                            <ListItemComponent
                                key={item.url}
                                item={item}
                                selectItem={this.props.selectItem}
                            />
                        )
                    }) :
                    <p>No planet data yet</p>}
                </ul>
            </div>
        )
    }

    getNextItems = (url) => {
        axios.get(url)
        .then(response => {
            let newList = [...this.state.itemList, ...response.data.results];
            console.log(newList);
            this.setState({
                itemList: newList,
                nextItemsUrl: response.data.next,
                endOfList: false,
            }, () => {
                this.props.listLoaded();
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    trackScrolling = (e) => {
        if(this.props.selectedItem) return;

        let wrappedElement = document.getElementById('master-list');
        if(this.isBottom(wrappedElement) && !this.state.endOfList) {
            this.setState({
                endOfList: true
            }, () => {
                if(this.state.nextItemsUrl) this.getNextItems(this.state.nextItemsUrl);
            });
        }
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
}

export default InfiniteList;