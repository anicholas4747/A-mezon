
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = (reviewId) => ({
    type: RECEIVE_REVIEW,
    reviewId
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const fetchReviews = (anime_title) => dispatch => (

);

export const createReview = (anime_title) => dispatch => (

);

export const updateReviews = (anime_title) => dispatch => (

);

export const deleteReview = (anime_title) => dispatch => (

);
