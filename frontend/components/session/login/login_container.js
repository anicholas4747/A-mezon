import { connect } from "react-redux";
import LogIn from "./login";
import { login } from '../../../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (user) => dispatch(login(user))
    });
};


export default connect(null,mapDispatchToProps)(LogIn);