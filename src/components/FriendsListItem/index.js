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
            <h4 className="friends-list-item-username">{item}</h4>
            <div className="add-remove-friend-button">
                {addRemoveButton}
            </div>
        </div>
    );
};

export default FriendsListItem;
