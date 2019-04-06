import React from 'react';

function ListItem(props) {
    const { item } = props;
    return (
        <div className="list-item">
            <h2>{item.title}</h2>
            <p>{item.withwhom.join(', ')}</p>
        </div>
    );
}

export default ListItem;
