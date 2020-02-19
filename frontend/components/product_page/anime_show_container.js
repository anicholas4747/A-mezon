import { connect } from "react-redux";
import AnimeShow from "./anime_show";
import { fetchOneAnime } from "../../actions/anime_actions";
import { fetchStudio } from "../../actions/studio_actions";
import { navLiClicked, navDropdown, searchDropdownHide } from "../../actions/ui_actions";

const mSTP = (state) => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    isLoggedIn: Boolean(state.session.currentUser.id),
    anime: state.entities.anime.display,
    studio: state.entities.studios.display,
    reviews: state.entities.reviews.animeSpecific
});

const mDTP = (dispatch) => ({
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
    fetchStudio: (studioName) => dispatch(fetchStudio(studioName))
});

export default connect(mSTP,mDTP)(AnimeShow);