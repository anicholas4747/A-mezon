import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { fetchReview, deleteReview } from "../../../actions/review_actions";
import { withRouter } from "react-router-dom";
import { fetchProfile } from "../../../actions/profile_actions";


const mSTP = (state) => ({
    currentUser: state.session.currentUser.username
});

const mDTP = (dispatch) => ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    fetchProfile: (username) => dispatch(fetchProfile(username))
});

export default withRouter(connect(mSTP, mDTP)(ReviewItem));