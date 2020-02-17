import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { updateReview, fetchReview } from "../../../actions/review_actions";
import { fetchOneAnime } from "../../../actions/anime_actions";
import { withRouter } from "react-router-dom";

const mSTP = state => ({
    formType: "Edit Review",
    review: state.entities.reviews.display,
    anime: state.entities.anime.display,
    shouldGreyOut: Boolean(state.ui.navDropdown),
    profileReviews: state.entities.profile.reviews

});

const mDTP = dispatch => ({
    action: (reviewForm) => dispatch(updateReview(reviewForm)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle))
});

const EditReviewForm = withRouter(connect(mSTP, mDTP)(ReviewForm));
export default EditReviewForm;