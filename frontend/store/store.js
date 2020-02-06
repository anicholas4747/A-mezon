import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
import {logger} from 'redux-logger';


const preloadedState = {};

export const configureStore = () => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,logger)
    )
);