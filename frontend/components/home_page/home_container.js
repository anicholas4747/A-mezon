import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Home from "./home";
import { navDropdown } from "../../actions/ui_actions";

const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id),
    shouldGreyOut: Boolean(state.ui.navDropdown)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    navDropdown: (bool) => dispatch(navDropdown(bool))
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);