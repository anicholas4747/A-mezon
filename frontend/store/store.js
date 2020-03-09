import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunk from '../middleware/thunk';

export const configureStore = () => {
    let preloadedState = {
        session: {
            currentUser: {id: null}
        }
    };

    if (Boolean(window.currentUser)) {
        preloadedState.session = {
                currentUser: window.currentUser
            };
    }
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== "production") {
        // must use 'require' (import only allowed at top of file)
        const { logger } = require("redux-logger");
        middlewares.push(logger);
    }

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    );
};