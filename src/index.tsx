import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./store";

ReactDOM.render(
  // <Provider store={store}>
  <React.Fragment>
    <Router>
      <App />
    </Router>
  </React.Fragment>,
  // </Provider>,
  document.getElementById("root")
);
