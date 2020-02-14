import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { fetchReview, deleteReview } from "../../../actions/review_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state) => ({
    currentUser: state.session.currentUser.username
});

const mDTP = (dispatch) => ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    deleteReview: (review) => dispatch(deleteReview(review))
});

export default withRouter(connect(mSTP, mDTP)(ReviewItem));