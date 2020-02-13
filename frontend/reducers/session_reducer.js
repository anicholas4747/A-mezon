import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, CLEAR_ERRORS} from "../actions/session_actions";

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
        case (CLEAR_ERRORS):
            return Object.assign({}, state, {
                currentUser: { exists: undefined,
                    id: state.currentUser.id,
                    username: state.currentUser.username
                }
            });
        default:
            return state;
    }
};

export default sessionReducer;