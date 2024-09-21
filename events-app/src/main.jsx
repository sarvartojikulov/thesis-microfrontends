import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import tw from "./utils/tw.js";
import PopularEvents from "./AppPopularEvents.jsx";
import Events from "./App.jsx";

function bootstrapPopularEvents() {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <main className={tw("container mx-auto pt-12")}>
                <PopularEvents />
            </main>
        </React.StrictMode>
    );
}

function bootstrapEvents() {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <main className={tw("container mx-auto pt-12")}>
                <BrowserRouter>
                    <Events />
                </BrowserRouter>
            </main>
        </React.StrictMode>
    );
}

bootstrapEvents()