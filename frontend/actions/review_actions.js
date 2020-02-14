import * as ReviewAPIUtil from '../util/review_api_util';

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
    ReviewAPIUtil.fetchReviews(anime_title)
        .then((reviews) => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (reviewId) => dispatch => (
    ReviewAPIUtil.fetchReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
);

export const createReview = (reviewForm) => dispatch => (
    ReviewAPIUtil.createReview(reviewForm)
        .then((review) => dispatch(receiveReview(review)))
);

export const updateReview = (reviewForm) => dispatch => (
    ReviewAPIUtil.updateReview(reviewForm)
        .then((review) => dispatch(receiveReview(review)))
);

export const deleteReview = (reviewId) => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
);
