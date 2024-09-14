// App.jsx in host-app
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import CheckoutPage from "./components/checkout"
import CheckoutThanksPage from "./components/checkout-thanks"

function App() {
    return (
        <>
            <Routes>
                <Route index path={`/`} element={<CheckoutPage />} />
                <Route exact path={`/thanks`} element={<CheckoutThanksPage />} />
            </Routes>
        </>
    );
}

export default App;
