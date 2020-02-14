import { connect } from "react-redux";
import AnimeShow from "./anime_show";
import { fetchOneAnime } from "../../actions/anime_actions";
import { fetchStudio } from "../../actions/studio_actions";

const mSTP = (state) => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    isLoggedIn: Boolean(state.session.currentUser.id),
    anime: state.entities.anime,
    studio: state.entities.studios.display,
    reviews: state.entities.reviews.animeSpecific
});

const mDTP = (dispatch) => ({
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
    fetchStudio: (studioName) => dispatch(fetchStudio(studioName))
});

export default connect(mSTP,mDTP)(AnimeShow);