// App.jsx in host-app
import EventDetail from "./components/event-detail";
import Events from "./components/events";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route index path={`/`} element={<Events />} />
                <Route exact path={`/:id`} element={<EventDetail />} />
            </Routes>
        </>
    );
}

export default App;
