import ListItem from './index';
import { connect } from 'react-redux';
import getUser from "../../actions/getUser";

const mapStateToProps = (state) => {
    const {
        mode,
        user
    } = state;
    return ({
        mode,
        user,
    })
};

const mapDispatchToProps = dispatch => ({
    getUser: (username) => dispatch(getUser(username)),
});

const ListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default ListItemContainer;
