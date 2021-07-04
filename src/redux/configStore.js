import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import PhimReducer from "./reducer/PhimReducer";
import { NguoiDungReducer } from "./reducer/NguoiDungReducer";
import CumRapReducer from "./reducer/CumRapReducer";
import { AdminReducer } from "./reducer/AdminReducer";
const rootReducer = combineReducers({
  PhimReducer,
  NguoiDungReducer,
  CumRapReducer,
  AdminReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
