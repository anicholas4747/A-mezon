import { RECEIVE_STUDIOS, RECEIVE_STUDIO } from "../actions/studio_actions";
import { RECEIEVE_ONE_ANIME } from "../actions/anime_actions";

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
                { 
                    all: Object.values(action.studios),
                    display: null 
                } 
            );
        case(RECEIVE_STUDIO):
            let newDisplay = action.studio;
            newDisplay.anime = undefined;
            return Object.assign( 
                {}, 
                state, 
                { display: newDisplay} 
            );
        case(RECEIEVE_ONE_ANIME):
            return Object.assign({},state,{display: {name: action.anime.studio}});
        default:
            return state;
    }
};

export default studiosReducer;