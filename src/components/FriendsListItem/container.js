import FriendsListItem from './index';
import { connect } from 'react-redux';
import getUser from "../../actions/getUser";

const mapStateToProps = (state) => {
    const {
        user
    } = state;
    return ({
        user,
    })
};

const mapDispatchToProps = dispatch => ({
    getUser: (username) => dispatch(getUser(username)),
});

const FriendsListItemContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsListItem);

export default FriendsListItemContainer;
