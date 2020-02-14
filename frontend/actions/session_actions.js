import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const recieveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user
    });
};

export const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
};

export const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ERRORS,
        errors // points to an array
    });
};

export const switchPage = () => {
    return ({
        type: CLEAR_ERRORS,
    });
};

export const signup = (user) => dispatch => {
    return APIUtil.signup(user)
        .then( user => dispatch(recieveCurrentUser(user)) );
};

export const login = (user) => dispatch => {
    return APIUtil.login(user)
        .then( user => dispatch(recieveCurrentUser(user)) );
};

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()) );
};

export const checkUser = (un_or_email) => dispatch => {
    return APIUtil.checkUser(un_or_email)
        .then(result => {
            dispatch(recieveCurrentUser(result));
        });
};