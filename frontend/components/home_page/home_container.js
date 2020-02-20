import { connect } from "react-redux";
import Home from "./home";
import { navDropdown, navLiClicked, searchDropdownHide } from "../../actions/ui_actions";
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
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    fetchRecs: (recs) => dispatch(fetchRecs(recs))
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);