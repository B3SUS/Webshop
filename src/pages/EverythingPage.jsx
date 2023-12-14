import React, { useState, useEffect } from "react";
import NavbarWhite from "../react-components/NavbarWhite";
import { Footer } from "../react-components/Footer";
import "../scss/main.css";
import { BrowserView, MobileView } from "react-device-detect";
import Burger from "../react-components/Burger";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContentBrowser } from "../react-components/shop-content-Browser";

const EverythingPage = () => {
    // Отримуємо кошик з localStorage під час завантаження компонента
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });


    // Зберігаємо кошик в localStorage при зміні
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Функція додавання товару до кошика
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (existingItem) => existingItem.id === item.id
            );

            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                const newCart = [...prevCart, { ...item, quantity: 1 }];
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            }
        });
    };


    return (
        <div style={{ backgroundColor: '#f5f7f9' }}>
            <BrowserView>
                <NavbarWhite cartItemCount={cart.length} />
                <ShopContentBrowser addToCart={addToCart} cart={cart} setCart={setCart} />
            </BrowserView>
            <MobileView>
                <Burger />
            </MobileView>
            <Footer />
        </div>
    );
};

export default EverythingPage;
