import React, {useState} from "react";
import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EverythingPage from "./pages/EverythingPage";
import {CartPage} from "./pages/CartPage";

function App() {
    const [cart, setCart] = useState([]);
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/everything" element={<EverythingPage />} />
                <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            </Routes>
        </div>
    );
}

export default App;