import Friends from './index';
import { connect } from 'react-redux';
import setUser from '../../actions/setUser';

const mapStateToProps = (state) => {
    const { user } = state;
    return ({
        user,
    })
};

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
});

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
