import React from 'react';

function ListItem(props) {
    return (
        <div className="list-item" key={props.item}>{props.item}</div>
    );
}

export default ListItem;
