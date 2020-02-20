import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, CLEAR_ERRORS} from "../actions/session_actions";

const defaultState = {
    id: null,
    username: null,
    cartId: null
};

const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);
    switch(action.type){
        case (RECEIVE_CURRENT_USER):
            return Object.assign({}, newState, action.user);
        case (LOGOUT_CURRENT_USER):
            return defaultState;
        case (CLEAR_ERRORS):
            return Object.assign({}, newState, {
                exists: undefined,
                id: state.id,
                username: state.username
            });
        default:
            return state;
    }
};

export default sessionReducer;