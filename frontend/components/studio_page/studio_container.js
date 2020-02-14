import { connect } from "react-redux";
import StudioShow from "./studio";
import { fetchOneAnime } from "../../actions/anime_actions";

const mSTP = (state) => ({
    studio: state.entities.studios.display,
    anime: Object.values(state.entities.anime.display),
    shouldGreyOut: Boolean(state.ui.navDropdown)
});

const mDTP = (dispatch) => ({
    fetchAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle))
});

export default connect(mSTP, mDTP)(StudioShow);