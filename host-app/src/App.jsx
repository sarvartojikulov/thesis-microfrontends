import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MFWrapper from "./components/MFWrapper";

const Events = React.lazy(() => import("events/App"))
const Checkout = React.lazy(() => import("checkout/App"))

const MFE_App= (MFE, type) => {
    return(
        <React.Suspense fallback="Loading...">
            <MFWrapper type={type}>
                <MFE />
            </MFWrapper>
        </React.Suspense>
    )
}

function App() {
    return (
        <main className="container mx-auto min-h-screen ">
            <Router>
            <Navbar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Homepage />}
                    />
                    <Route path="/events/*" element={MFE_App(Events, "events")} />
                    <Route path="/checkout/*" element={MFE_App(Checkout, "checkout")} />
                </Routes>
            </Router>
            <Footer />
        </main>
    );
}

export default App;
