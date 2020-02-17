import { RECEIVE_STUDIO } from "../actions/studio_actions";
import { RECEIEVE_ONE_ANIME, RECEIVE_ANIME_TITLES, RECEIVE_SEARCH_RESULTS } from "../actions/anime_actions";

const defaultState = {
    display: {},
    allTitles: [],
    results: []
};

const animeReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type){
        case(RECEIVE_STUDIO):
            newState.display = null;
            return Object.assign({},newState,{display: action.studio.anime});
        case(RECEIEVE_ONE_ANIME):
            newState.display = null;
            return Object.assign({}, newState, { display: action.anime.details });
        case (RECEIVE_ANIME_TITLES):
            newState.allTitles = null;
            return Object.assign({}, newState, { allTitles: action.allTitles});
        case (RECEIVE_SEARCH_RESULTS):
            newState.results = null;
            return Object.assign({}, newState, { results: action.results.anime});
        default:
            return state;
    }
};

export default animeReducer;