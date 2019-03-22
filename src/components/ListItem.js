import React from 'react';

function ListItem(props) {
    return (
        <p key={props.item}>{props.item}</p>
    );
}

export default ListItem;
