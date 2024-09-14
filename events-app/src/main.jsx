import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import tw from "./utils/tw.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <main className={tw("container mx-auto pt-12")}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </main>
    </React.StrictMode>
);
