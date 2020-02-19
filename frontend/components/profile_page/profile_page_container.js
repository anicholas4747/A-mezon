import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { fetchProfile } from "../../actions/profile_actions";
import { navLiClicked, navDropdown, searchDropdownHide } from "../../actions/ui_actions";

const mSTP = state => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    currentUser: state.session.currentUser,
    user: state.entities.profile,
    lang: state.ui.language
});

const mDTP = dispatch => ({
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    fetchProfile: (username) => dispatch(fetchProfile(username)),
    verifyUser: (password) => dispatch((password))
});

export default connect(mSTP,mDTP)(ProfilePage);