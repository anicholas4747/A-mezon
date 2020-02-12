import { connect } from "react-redux";
import StudioDropdown from "./studio_dropdown";
import { fetchStudios,fetchStudio } from "../../../actions/studio_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state) => ({
    studios: state.entities.studios
});

const mDTP = (dispatch) => ({
    fetchStudios: () => dispatch(fetchStudios()),
    fetchStudio: (studioName) => dispatch(fetchStudio(studioName))
});

export default withRouter(connect(mSTP, mDTP)(StudioDropdown));