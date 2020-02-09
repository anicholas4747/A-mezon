import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Home from "./home";

const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);