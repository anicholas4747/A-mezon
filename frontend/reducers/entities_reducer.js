import { combineReducers } from 'redux';
import animeReducer from './anime_reducer';
import studiosReducer from './studios_reducer';
import reviewsReducer from './reviews_reducer';
import profileReducer from './profile_reducer';
import recsReducer from './recs_reducer';

const entitiesReducer = combineReducers({
    anime: animeReducer,
    studios: studiosReducer,
    reviews: reviewsReducer,
    profile: profileReducer,
    recs: recsReducer
});

export default entitiesReducer;