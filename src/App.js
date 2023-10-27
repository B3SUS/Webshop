import React from "react";
import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EverythingPage from "./pages/EverythingPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/everything" element={<EverythingPage />} />
            </Routes>
        </div>
    );
}

export default App;
