import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (user) => {
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
    return SessionAPIUtil.signup(user)
        .then( user => dispatch(receiveCurrentUser(user)) );
};

export const login = (user) => dispatch => {
    return SessionAPIUtil.login(user)
        .then( user => dispatch(receiveCurrentUser(user)) );
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()) );
};

export const checkUser = (un_or_email) => dispatch => {
    return SessionAPIUtil.checkUser(un_or_email)
        .then(result => {
            dispatch(receiveCurrentUser(result));
        });
};

export const verifyPassword = (creds) => dispatch => {
    return SessionAPIUtil.checkPassword(creds)
        .then(result => dispatch(receiveCurrentUser(result)));
};

export const updateUser = (userInfo) => dispatch => (
    SessionAPIUtil.updateUser(userInfo)
        .then(user => dispatch(receiveCurrentUser(user)))
);