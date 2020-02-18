import { connect } from "react-redux";
import SearchResults from "./search_results";
import { searchAnime, searchAllAnime } from "../../actions/anime_actions";
import { navDropdown } from "../../actions/ui_actions";


const mSTP = state => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    results: state.entities.anime.results
});

const mDTP = dispatch => ({
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchAnime: (searchParams) => dispatch(searchAnime(searchParams)),
    searchAllAnime: (page) => dispatch(searchAllAnime(page))
});

export default connect(mSTP,mDTP)(SearchResults);