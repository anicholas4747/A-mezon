import { connect } from "react-redux";
import NavBar from "./navbar";
import { fetchAnimeTitles, fetchOneAnime } from "../../actions/anime_actions";
import { navDropdown, navLiClicked } from "../../actions/ui_actions";


const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id),
    currentUser: state.session.currentUser,
    anime: state.entities.anime,
    language: state.ui.language
});

const mapDispatchToProps = (dispatch) => ({
    fetchAnimeTitles: () => dispatch(fetchAnimeTitles()),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);