import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import PhimReducer from "./reducer/PhimReducer";
import { NguoiDungReducer } from "./reducer/NguoiDungReducer";
import CumRapReducer from "./reducer/CumRapReducer";
const rootReducer = combineReducers({
  PhimReducer,
  NguoiDungReducer,
  CumRapReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
