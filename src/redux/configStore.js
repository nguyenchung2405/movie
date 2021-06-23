import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import PhimReducer from "./reducer/PhimReducer";

const rootReducer = combineReducers({
    PhimReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;