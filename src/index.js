import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./Css/index.css";
import { Store, persistor } from "./Redux/Store/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDom.render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
