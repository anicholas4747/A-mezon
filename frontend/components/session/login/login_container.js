import { connect } from "react-redux";
import LogIn from "./login";
import { login, checkUser, switchPage } from '../../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
    return ({
        verifyUNEmail: (un_or_email) => dispatch(checkUser(un_or_email)),
        login: (user) => dispatch(login(user)),
        switchPage: () => dispatch(switchPage())
    });
};


export default connect(mapStateToProps,mapDispatchToProps)(LogIn);