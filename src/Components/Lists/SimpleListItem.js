import React from 'react';
import './../Lists/ListItem.scss';

function StarshipListItem(props) {
    let item = props.item;
    return (
        <div key={item.url} onClick={e => props.selectItem(item.url)} className="list-item">
            <h3 >{item.name}</h3>
        </div>
    )
}

export default StarshipListItem;