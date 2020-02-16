import { connect } from "react-redux";
import EditProfileForm from "./edit_profile_form";
import { withRouter } from "react-router-dom";

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP,mDTP)(EditProfileForm));