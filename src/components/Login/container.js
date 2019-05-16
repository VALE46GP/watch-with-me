import Login from './index';
import { connect } from 'react-redux';
import login from '../../actions/login';
import registerUser from '../../actions/registerUser';
import setUser from '../../actions/setUser';

// const mapStateToProps = (state) => {
//     const {  } = state;
//     return ({
//     });
// };

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
    registerUser: (username, password) => dispatch(registerUser(username, password)),
    setUser: user => dispatch(setUser(user)),
});


const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;
