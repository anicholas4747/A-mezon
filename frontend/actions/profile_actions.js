import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = (user) => ({
    type: RECEIVE_PROFILE,
    user
});

export const fetchProfile = (username) => dispatch => (
    ReviewAPIUtil.fetchUserReviews(username)
        .then((user) => dispatch(receiveProfile(user)))
);