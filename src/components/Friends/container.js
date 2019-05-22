import Friends from './index';
import { connect } from 'react-redux';
import setUser from '../../actions/setUser';
import setActiveModal from "../../actions/setActiveModal";

const mapStateToProps = (state) => {
    const { user } = state;
    return ({
        user,
    })
};

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
    setActiveModal: (activeModal) => dispatch(setActiveModal(activeModal)),
});

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
