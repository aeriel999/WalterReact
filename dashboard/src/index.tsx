import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
 
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { getAccessToken } from "./Services/api-user-service";
import { AuthUther } from "./store/action-creators/userActions/index";

const token = getAccessToken();

if (token) {
    AuthUther(token, "Data Loadet", store.dispatch);
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <Router>
            <ToastContainer autoClose={3000} />
            <App />
        </Router>
    </Provider>
);
