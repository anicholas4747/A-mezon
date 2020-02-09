import { combineReducers } from 'redux';
import animeReducer from './anime_reducer';

const entitiesReducer = combineReducers({
    anime: animeReducer,
});

export default entitiesReducer;