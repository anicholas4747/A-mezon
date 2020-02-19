import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { navDropdown, navLiClicked, searchDropdownHide } from "../../../actions/ui_actions";
import { fetchOneAnime, searchAnime, fetchGenres } from "../../../actions/anime_actions";

const mapStateToProps = (state) => ({
    genres: state.entities.anime.genres,
    searchDropdownHidden: Boolean(state.ui.searchDropdownHide),
    titles: state.entities.anime.allTitles
});

const mapDispatchToProps = (dispatch) => ({
    startSearch: (bool) => dispatch(navDropdown(bool)),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
    fetchGenres: () => dispatch(fetchGenres()),
    searchAnime: (searchParams) => dispatch(searchAnime(searchParams)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool))
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);