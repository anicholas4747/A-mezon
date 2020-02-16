import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { fetchProfile } from "../../actions/profile_actions";

const mSTP = state => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    user: state.entities.profile
});

const mDTP = dispatch => ({
    fetchProfile: (username) => dispatch(fetchProfile(username))
});

export default connect(mSTP,mDTP)(ProfilePage);