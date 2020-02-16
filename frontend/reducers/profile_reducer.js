import { RECEIVE_PROFILE } from "../actions/profile_actions";


const defaultState = {
    id: null
};

const profileReducer = (state = defaultState, action) => {
    switch(action.type){
        case(RECEIVE_PROFILE):
            return action.user;
        default:
            return state;
    }
}

export default profileReducer;