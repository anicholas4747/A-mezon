import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";

const defaultState = {
    currentUser: {
        id: null,
        username: null
    }
};

const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case (RECEIVE_CURRENT_USER):
            return Object.assign({}, { currentUser: action.user});
        case (LOGOUT_CURRENT_USER):
            return defaultState;
        default:
            return state;
    }
};

export default sessionReducer;