import Login from './index';
import { connect } from 'react-redux';
import setUser from '../../actions/setUser';

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user)),
});

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;
