import { connect } from "react-redux";
import Home from "./home";
import { navDropdown } from "../../actions/ui_actions";
import { fetchAnimeTitles, fetchRecs } from "../../actions/anime_actions";

const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id),
    shouldGreyOut: Boolean(state.ui.navDropdown),
    anime: state.entities.anime,
    recs: state.entities.recs,
    language: state.ui.language
});

const mapDispatchToProps = (dispatch) => ({
    fetchAnimeTitles: () => dispatch(fetchAnimeTitles()),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    fetchRecs: (recs) => dispatch(fetchRecs(recs))
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);