import { connect } from "react-redux";
import SearchResults from "./search_results";
import { searchAnime, fetchYears } from "../../actions/anime_actions";
import { navDropdown, searchDropdownHide, navLiClicked } from "../../actions/ui_actions";


const mSTP = state => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    results: state.entities.anime.results
});

const mDTP = dispatch => ({
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    searchAnime: (searchParams) => dispatch(searchAnime(searchParams)),
    fetchYears: () => dispatch(fetchYears())
});

export default connect(mSTP,mDTP)(SearchResults);