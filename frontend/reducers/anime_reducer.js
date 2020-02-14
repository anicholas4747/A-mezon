import { RECEIVE_STUDIO } from "../actions/studio_actions";
import { RECEIEVE_ONE_ANIME, RECEIVE_ANIME_TITLES } from "../actions/anime_actions";

const defaultState = {
    display: {},
    allTitles: []
};

const animeReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_STUDIO):
            return Object.assign({},state,{display: action.studio.anime});
        case(RECEIEVE_ONE_ANIME):
            return Object.assign({}, state, { display: action.anime.details });
        case (RECEIVE_ANIME_TITLES):
            return Object.assign({}, state, { allTitles: action.allTitles});
        default:
            return state;
    }
};

export default animeReducer;