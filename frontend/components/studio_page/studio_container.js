import { connect } from "react-redux";
import StudioShow from "./studio";
import { fetchOneAnime } from "../../actions/anime_actions";
import { navLiClicked } from "../../actions/ui_actions";

const mSTP = (state) => ({
    studio: state.entities.studios.display,
    anime: Object.values(state.entities.anime.display),
    shouldGreyOut: Boolean(state.ui.navDropdown)
});

const mDTP = (dispatch) => ({
    fetchAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool))
});

export default connect(mSTP, mDTP)(StudioShow);