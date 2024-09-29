// App.jsx in checkout-app
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import CheckoutPage from "./components/checkout";
import CheckoutThanksPage from "./components/checkout-thanks";

function App() {
    return (
        <Routes>
            <Route index 
                path={`/:id`} element={<CheckoutPage />} />
            <Route
                exact
                path={`/:id/thanks`}
                element={<CheckoutThanksPage />}
            />
        </Routes>
    );
}

export default App;
