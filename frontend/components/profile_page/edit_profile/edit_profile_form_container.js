import { connect } from "react-redux";
import EditProfileForm from "./edit_profile_form";
import { withRouter } from "react-router-dom";
import { fetchProfile } from "../../../actions/profile_actions";
import { verifyPassword, switchPage, updateUser } from "../../../actions/session_actions";

const mSTP = state => ({
    currentUser: state.session.currentUser,
    user: state.entities.profile
});

const mDTP = dispatch => ({
    fetchProfile: (username) => dispatch(fetchProfile(username)),
    verifyPassword: (creds) => dispatch(verifyPassword(creds)),
    updateUser: (userInfo) => dispatch(updateUser(userInfo)),
    switchPage: () => dispatch(switchPage())
});

export default withRouter(connect(mSTP,mDTP)(EditProfileForm));