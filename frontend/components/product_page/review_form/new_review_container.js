import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../../actions/review_actions";
import { fetchOneAnime } from "../../../actions/anime_actions";
import { withRouter } from "react-router-dom";

const mSTP = state => ({
    formType: "Create Review",
    review: {
        title: "",
        body: "",
        rating: 0
    },
    anime: state.entities.anime.display,
    shouldGreyOut: Boolean(state.ui.navDropdown)
});

const mDTP = dispatch => ({
    action: (reviewForm) => dispatch(createReview(reviewForm)),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle))
});

const CreateReviewForm = withRouter(connect(mSTP, mDTP)(ReviewForm));
export default CreateReviewForm;