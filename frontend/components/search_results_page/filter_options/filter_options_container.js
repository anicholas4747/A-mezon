import { connect } from "react-redux";
import FilterOptions from "./filter_options";

const mSTP = state => ({
    genres: state.entities.anime.genres,
    studios: state.entities.studios.all,
    years: state.entities.anime.years
});

const mDTP = dispatch => ({

});

export default connect(mSTP,mDTP)(FilterOptions);