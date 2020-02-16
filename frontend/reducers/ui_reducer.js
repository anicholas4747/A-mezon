import { NAV_DROPDOWN, NAV_LI_CLICKED } from "../actions/ui_actions";
import { RECEIVE_LANGUAGE } from "../actions/lang_actions";

const defaultState = {
    navDropdown: null,
    navLiClicked: null,
    language: "EN"
};

const uiReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case(NAV_DROPDOWN):
            return Object.assign({}, state, { navDropdown: action.bool });
        case(NAV_LI_CLICKED):
            return Object.assign({}, state, { navLiClicked: action.bool });
        case(RECEIVE_LANGUAGE):
            return Object.assign({}, state, { language: action.lang });
        default:
            return state;
    }
};

export default uiReducer;