import { connect } from "react-redux";
import NavBar from "./navbar";
import { fetchAnimeTitles, fetchOneAnime } from "../../actions/anime_actions";


const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id),
    currentUser: state.session.currentUser,
    anime: state.entities.anime
});

const mapDispatchToProps = (dispatch) => ({
    fetchAnimeTitles: () => dispatch(fetchAnimeTitles()),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);