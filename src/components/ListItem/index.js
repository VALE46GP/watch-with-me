import React from 'react';
import AddMediaButton from './AddMediaButton';
import './index.css';

function ListItem(props) {
    const { item, key } = props;
    console.log("ITEM: ", item);
    return (
        <div className="list-item" key={key}>
            <div className="btn-div">
                <AddMediaButton data={item}/>
            </div>
            <h2>{item.title}</h2>
        </div>
    );
}

export default ListItem;
