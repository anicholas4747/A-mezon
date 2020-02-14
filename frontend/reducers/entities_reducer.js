import { combineReducers } from 'redux';
import animeReducer from './anime_reducer';
import studiosReducer from './studios_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    anime: animeReducer,
    studios: studiosReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;