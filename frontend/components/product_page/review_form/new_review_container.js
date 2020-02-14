import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../../actions/review_actions";

const mSTP = state => ({
    formType: "Create Review",
    review: {
        title: "",
        body: "",
        rating: 0
    },
    anime: state.entities.anime,
});

const mDTP = dispatch => ({
    action: (reviewForm) => dispatch(createReview(reviewForm))
});

const CreateReviewForm = connect(mSTP, mDTP)(ReviewForm);
export default CreateReviewForm;