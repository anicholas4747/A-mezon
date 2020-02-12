import { RECEIVE_STUDIOS, RECEIVE_STUDIO } from "../actions/studio_actions";

const defaultState = {
    all: [],
    display: {}
};

const studiosReducer = (state = defaultState,action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_STUDIOS):
            return Object.assign( 
                {}, 
                state, 
                { all: Object.values(action.studios) } 
            );
        case(RECEIVE_STUDIO):
            let newDisplay = action.studio;
            newDisplay.anime = undefined;
            return Object.assign( 
                {}, 
                state, 
                { display: newDisplay} 
            );
        default:
            return state;
    }
};

export default studiosReducer;