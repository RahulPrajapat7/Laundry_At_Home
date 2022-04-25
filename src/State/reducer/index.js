import { combineReducers } from "redux";
import amountReducer from "./amount-reducer";
const reducer=combineReducers({
    amount:amountReducer
})

export default reducer