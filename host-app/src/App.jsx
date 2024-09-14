import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Events = React.lazy(() => import("events/App"))
const Checkout = React.lazy(() => import("checkout/App"))

const MFE_App= (MFE) => {
    return(
        <React.Suspense fallback="Loading...">
            <MFE />
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
                    <Route path="/events/*" element={MFE_App(Events)} />
                    <Route path="/checkout/*" element={MFE_App(Checkout)} />
                </Routes>
            </Router>
            <Footer />
        </main>
    );
}

export default App;
