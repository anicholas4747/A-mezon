import { connect } from "react-redux";
import FilterOptions from "./filter_options";
import { searchAnime } from "../../../actions/anime_actions";

const mSTP = state => {
    debugger
    return {
        genres: state.entities.anime.genres,
        studios: state.entities.studios.all,
        years: state.entities.anime.years,
        preloadedFilters: state.ui.preloadedFilters
    };
};

const mDTP = dispatch => ({
    searchAnime: (searchParams) => dispatch(searchAnime(searchParams))
});

export default connect(mSTP,mDTP)(FilterOptions);