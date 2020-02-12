import { RECEIVE_STUDIO } from "../actions/studio_actions";
import { RECEIEVE_ONE_ANIME } from "../actions/anime_actions";


const animeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_STUDIO):
            return action.studio.anime;
        case(RECEIEVE_ONE_ANIME):
            return action.anime.details;
        default:
            return state;
    }
};

export default animeReducer;