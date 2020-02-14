import * as ReviewAPIUtil from '../util/review_api_util';
import { receiveOneAnime } from './anime_actions';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
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
        .then((anime) => dispatch(receiveOneAnime(anime)))
);

export const updateReview = (reviewForm) => dispatch => (
    ReviewAPIUtil.updateReview(reviewForm)
        .then((anime) => dispatch(receiveOneAnime(anime)))
);

export const deleteReview = (reviewForm) => dispatch => (
    ReviewAPIUtil.deleteReview(reviewForm)
        .then((anime) => dispatch(receiveOneAnime(anime)))
);
