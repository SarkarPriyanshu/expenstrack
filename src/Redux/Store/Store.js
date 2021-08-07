import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "../Reducers/index";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const Middlewares = [logger, thunk];

export const Store = createStore(RootReducer, applyMiddleware(...Middlewares));

export const persistor = persistStore(Store);

export default Store;
