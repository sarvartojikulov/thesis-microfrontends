import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MFWrapper from "./components/MFWrapper";
import {withTimeout} from "./utils/timeout"
import EventsSkeleton from "./skeletons/EventsSkeleton";
import CheckoutSkeleton from "./skeletons/CheckoutSkeleton"

const Events = React.lazy(() => withTimeout(import("events/App"), 3000));
const Checkout = React.lazy(() => withTimeout(import("checkout/App"), 3000));

const MFE_App = (MFE, type, skeleton) => {
    return (
        <React.Suspense fallback={skeleton ? skeleton : "Loading..."}>
            <MFWrapper type={type}>
                <MFE />
            </MFWrapper>
        </React.Suspense>
    );
};

function App() {
    return (
        <main className="container mx-auto min-h-screen px-4 md:px-0">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route
                        path="/events/*"
                        element={MFE_App(Events, "events", <EventsSkeleton label={"Events"} />)}
                    />
                    <Route
                        path="/checkout/*"
                        element={MFE_App(Checkout, "checkout", <CheckoutSkeleton />)}
                    />
                </Routes>
            </Router>
            <Footer />
        </main>
    );
}

export default App;
