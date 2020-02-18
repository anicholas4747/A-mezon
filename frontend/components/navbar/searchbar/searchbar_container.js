import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { navDropdown, navLiClicked } from "../../../actions/ui_actions";
import { fetchOneAnime } from "../../../actions/anime_actions";

const mapStateToProps = (state) => ({
    genres: [],
    liClicked: Boolean(state.ui.navLiClicked),
    titles: state.entities.anime.allTitles
});

const mapDispatchToProps = (dispatch) => ({
    startSearch: (bool) => dispatch(navDropdown(bool)),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool))
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);