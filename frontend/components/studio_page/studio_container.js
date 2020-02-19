import { connect } from "react-redux";
import StudioShow from "./studio";
import { fetchOneAnime } from "../../actions/anime_actions";
import { navLiClicked, navDropdown, searchDropdownHide } from "../../actions/ui_actions";
import { fetchStudio } from "../../actions/studio_actions";

const mSTP = (state) => ({
    studio: state.entities.studios.display,
    anime: Object.values(state.entities.anime.display),
    shouldGreyOut: Boolean(state.ui.navDropdown)
});

const mDTP = (dispatch) => ({
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    fetchStudio: (studioName) => dispatch(fetchStudio(studioName)),
    fetchAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
});

export default connect(mSTP, mDTP)(StudioShow);