import React, { useEffect, useState } from "react";
import NavbarWhite from "../react-components/NavbarWhite";
import { Footer } from "../react-components/Footer";
import { BrowserView, MobileView } from "react-device-detect";
import Burger from "../react-components/Burger";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartPage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((existingItem) => existingItem.id === item.id);

            if (existingItem) {
                const updatedCart = prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
                return updatedCart;
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };


    const updateCartItem = (id, quantity) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
    };

    const removeCartItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    const handleQuantityChange = (id, e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            updateCartItem(id, newQuantity);
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);



    return (
        <div>
            <BrowserView>
                <NavbarWhite />
            </BrowserView>
            <MobileView>
                <Burger />
            </MobileView>
            <section id="cart-section">
                <h1>Cart</h1>
                <section id="cart" className="section-p1">
                    <table>
                        <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <a href="#" onClick={() => removeCartItem(item.id)}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </a>
                                </td>
                                <td>
                                    <img src={item.ImageUrl} alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, e)}
                                    />
                                </td>
                                <td>${item.price * item.quantity}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
                <section id="cart-add" className="section-p1">
                    <div id="coupon">
                        <h3>Apply Coupon</h3>
                        <div id="add-coupon">
                            <input type="text" placeholder="Enter Your Coupon" />
                            <button className="blue">Apply</button>
                        </div>
                    </div>

                    <div id="subtotal">
                        <h3>Cart Total</h3>
                        <table>
                            <tbody>
                            <tr>
                                <td>Cart SubTotal</td>
                                <td>${calculateTotal()}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Total</strong>
                                </td>
                                <td>
                                    <strong>${calculateTotal()}</strong>
                                </td>
                                <td />
                            </tr>
                            </tbody>
                        </table>
                        <button className="blue">Proceed to checkout</button>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};
