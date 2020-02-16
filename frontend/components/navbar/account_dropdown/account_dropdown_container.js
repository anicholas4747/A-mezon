import { connect } from "react-redux";
import AccountDropdown from "./account_dropdown";
import { withRouter } from "react-router-dom";
import { navDropdown, navLiClicked } from "../../../actions/ui_actions";
import { logout } from "../../../actions/session_actions";
import { fetchProfile } from "../../../actions/profile_actions";


const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    language: state.ui.language,
    liClicked: Boolean(state.ui.navLiClicked)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    fetchProfile: (username) => dispatch(fetchProfile(username))
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AccountDropdown));