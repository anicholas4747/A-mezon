import { connect } from "react-redux";
import LogIn from "./login";
import { login, checkUser } from '../../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
    return ({
        verifyUNEmail: (un_or_email) => dispatch(checkUser(un_or_email)),
        login: (user) => dispatch(login(user))
    });
};


export default connect(mapStateToProps,mapDispatchToProps)(LogIn);