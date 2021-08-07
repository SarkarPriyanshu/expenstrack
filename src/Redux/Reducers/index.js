import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["AppReducer"],
};

const RootReducer = combineReducers({ AppReducer });

export default persistReducer(persistConfig, RootReducer);
