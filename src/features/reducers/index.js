import { combineReducers } from "redux";
import productReducer from "./products";

const rootReducer = combineReducers({
    productReducer: productReducer
})

export default rootReducer;