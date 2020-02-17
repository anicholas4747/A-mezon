import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { navDropdown, navLiClicked } from "../../../actions/ui_actions";

const mapStateToProps = (state) => ({
    genres: [],
    titles: state.entities.anime.allTitles
});

const mapDispatchToProps = (dispatch) => ({
    startSearch: (bool) => dispatch(navDropdown(bool))
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);