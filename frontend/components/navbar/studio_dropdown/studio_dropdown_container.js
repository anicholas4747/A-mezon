import { connect } from "react-redux";
import StudioDropdown from "./studio_dropdown";
import { fetchStudios,fetchStudio } from "../../../actions/studio_actions";
import { withRouter } from "react-router-dom";
import { navDropdown, navLiClicked, searchDropdownHide } from "../../../actions/ui_actions";
import { searchAnime } from "../../../actions/anime_actions";

const mSTP = (state) => ({
    studios: state.entities.studios,
    liClicked: Boolean(state.ui.navLiClicked),
    language: state.ui.language
});

const mDTP = (dispatch) => ({
    fetchStudios: () => dispatch(fetchStudios()),
    fetchStudio: (studioName) => dispatch(fetchStudio(studioName)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    searchAnime: (searchParams) => dispatch(searchAnime(searchParams))
});


export default withRouter(connect(mSTP, mDTP)(StudioDropdown));