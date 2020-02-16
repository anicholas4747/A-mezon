import { RECEIVE_RECS } from "../actions/anime_actions";

const defaultState = [];

const recsReducer = (state = defaultState, action) => {
    switch(action.type){
        case(RECEIVE_RECS):
            return action.recs.results;
        default:
            return state;
    }
};

export default recsReducer;