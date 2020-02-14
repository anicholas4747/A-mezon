import { RECEIEVE_ONE_ANIME } from "../actions/anime_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

const defaultState = {
    animeSpecific: [],
    display: {}
};

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIEVE_ONE_ANIME):
            return Object.assign({}, state, { animeSpecific: action.anime.reviews});
        case(RECEIVE_REVIEW):
            return Object.assign({}, state, { display: action.review});
        default:
            return state;
    }
};

export default reviewsReducer;