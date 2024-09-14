import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export default function runReact() {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
