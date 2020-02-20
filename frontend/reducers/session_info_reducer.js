import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import cartReducer from "./cart_reducer";


const sessionInfoReducer = combineReducers({
    currentUser: sessionReducer,
    cart: cartReducer
});

export default sessionInfoReducer;