import React from 'react';
import './../Lists/ListItem.scss';

function StarshipListItem(props) {
    let starship = props.starship;
    return (
        <div key={starship.url} onClick={e => props.selectItem(starship.url)} className="list-item">
            <h3 >{starship.name}</h3>
        </div>
    )
}

export default StarshipListItem;