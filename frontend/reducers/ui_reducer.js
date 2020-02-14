import { NAV_DROPDOWN, NAV_LI_CLICKED } from "../actions/ui_actions";

const defaultState = {
    navDropdown: null,
    navLiClicked: null
};

const uiReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case(NAV_DROPDOWN):
            return Object.assign({}, state, { navDropdown: action.bool });
        case(NAV_LI_CLICKED):
            return defaultState;
        default:
            return state;
    }
};

export default uiReducer;