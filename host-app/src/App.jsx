import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home";
import Microfrontends from "./components/MFLoader"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {withTimeout} from "./utils/timeout"
import EventsSkeleton from "./skeletons/EventsSkeleton";
import CheckoutSkeleton from "./skeletons/CheckoutSkeleton"

const Events = React.lazy(() => withTimeout(import("events/App"), 3000));
const Checkout = React.lazy(() => withTimeout(import("checkout/App"), 3000));



function App() {
    return (
        <main className="container mx-auto min-h-screen px-4 md:px-0">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route
                        path="/events/*"
                        element={Microfrontends.loader(Events, "events", <EventsSkeleton label={"Events"} />)}
                    />
                    <Route
                        path="/checkout/*"
                        element={Microfrontends.loader(Checkout, "checkout", <CheckoutSkeleton />)}
                    />
                </Routes>
            </Router>
            <Footer />
        </main>
    );
}

export default App;
