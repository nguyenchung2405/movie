import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import PhimReducer from "./reducer/PhimReducer";
import { NguoiDungReducer } from "./reducer/NguoiDungReducer";
const rootReducer = combineReducers({
  PhimReducer,
  NguoiDungReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
