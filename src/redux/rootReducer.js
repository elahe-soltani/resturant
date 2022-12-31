import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";

const rootReducer = combineReducers({
    cartState :cartReducer,
})
export default rootReducer;