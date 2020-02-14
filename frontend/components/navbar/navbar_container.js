import { connect } from "react-redux";
import NavBar from "./navbar";
import { fetchAnimeTitles } from "../../actions/anime_actions";


const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id),
    currentUser: state.session.currentUser,
    anime: state.entities.anime
});

const mapDispatchToProps = (dispatch) => ({
    fetchAnimeTitles: () => dispatch(fetchAnimeTitles())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);