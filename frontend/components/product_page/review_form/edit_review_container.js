import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { updateReview, fetchReview } from "../../../actions/review_actions";

const mSTP = state => ({
    formType: "Edit Review",
    review: state.entities.reviews.display,
    anime: state.entities.anime
});

const mDTP = dispatch => ({
    action: (reviewForm) => dispatch(updateReview(reviewForm)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
});

const EditReviewForm = connect(mSTP, mDTP)(ReviewForm);
export default EditReviewForm;