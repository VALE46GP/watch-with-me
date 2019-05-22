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
            <h2 className="friends-list-item-username">{item}</h2>
            <div className="add-remove-friend-button">
                {addRemoveButton}
            </div>
        </div>
    );
};

export default FriendsListItem;
