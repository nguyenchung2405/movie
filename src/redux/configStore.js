import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import PhimReducer from "./reducer/PhimReducer";
import { NguoiDungReducer } from "./reducer/NguoiDungReducer";
import CumRapReducer from "./reducer/CumRapReducer";
import { AdminReducer } from "./reducer/AdminReducer";
import PhongVeReducer from "./reducer/PhongVeReducer";
const rootReducer = combineReducers({
  PhimReducer,
  NguoiDungReducer,
  CumRapReducer,
  AdminReducer,
  PhongVeReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
