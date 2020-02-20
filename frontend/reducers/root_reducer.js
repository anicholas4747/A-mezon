import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import sessionInfoReducer from './session_info_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionInfoReducer,
    errors: errorsReducer,
    ui: uiReducer
});

export default rootReducer;