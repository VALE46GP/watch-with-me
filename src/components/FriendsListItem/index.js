import React from 'react';
import RemoveFriendButton from './RemoveFriendButton';
import AddFriendButton from './AddFriendButton';
import './index.css';

const FriendsListItem = (props) => {
    const {
        item,
        isFriend,
        key,
        getUser,
        user,
    } = props;
    let addRemoveButton = isFriend
        ? <RemoveFriendButton
            item={item}
            user={user}
            getUser={getUser}
        />
        : <AddFriendButton
            item={item}
            user={user}
            getUser={getUser}
        />;

    return (
        <div className="friends-list-item" key={key}>
            <div className="friend-btn-div">
                {addRemoveButton}
            </div>
            <h2>{item}</h2>
        </div>
    );
};

export default FriendsListItem;
