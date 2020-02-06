import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const defaultState = [];

const sessionErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_ERRORS):
            return action.errors;
        case(RECEIVE_CURRENT_USER):
            return defaultState;
        default:
            return state;
    }
};

export default sessionErrorsReducer;