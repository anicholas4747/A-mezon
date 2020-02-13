import { connect } from "react-redux";
import AnimeShow from "./anime_show";

const mSTP = (state) => ({
    shouldGreyOut: Boolean(state.ui.navDropdown)
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP,mDTP)(AnimeShow);