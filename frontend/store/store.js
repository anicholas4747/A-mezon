import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunk from '../middleware/thunk';
import {logger} from 'redux-logger';

export const configureStore = () => {
    let preloadedState = {};
    if (Boolean(window.currentUser)) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        };
    }

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,logger)
    );
};