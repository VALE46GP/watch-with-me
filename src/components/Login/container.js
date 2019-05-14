import Login from './index';
import { connect } from 'react-redux';
import login from '../../actions/login';
import signup from '../../actions/signup';

// const mapStateToProps = (state) => {
//     const {  } = state;
//     return ({
//     });
// };

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (username, password) => dispatch(login(username, password)),
        signup: (username, password) => dispatch(signup(username, password)),
    });
};

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;
