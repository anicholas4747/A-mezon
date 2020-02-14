import { RECEIEVE_ONE_ANIME } from "../actions/anime_actions";


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIEVE_ONE_ANIME):
            return Object.assign({}, action.anime.reviews);
        default:
            return state;
    }
};

export default reviewsReducer;