import React from "react";
import NavbarWhite from "../react-components/NavbarWhite";
import {Footer} from "../react-components/Footer";
import "../scss/main.css";
import {BrowserView, MobileView} from "react-device-detect";
import Burger from "../react-components/Burger";
import SportShoe from "../assets/img/sports-shoe3.jpg";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const CartPage = () => {
    return (
        <div>
            <BrowserView>
                <NavbarWhite/>
            </BrowserView>
            <MobileView>
                <Burger/>
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
                            <tr>
                                <td><a href="#"><FontAwesomeIcon icon={faCircleXmark} /></a></td>
                                <td><img src={SportShoe} alt="123"/></td>
                                <td>DNK Yellow Shoes</td>
                                <td>$120</td>
                                <td><input type="number" name="" id="" value="1"/></td>
                                <td>$120</td>
                            </tr>
                            <tr>
                                <td><a href="#"><FontAwesomeIcon icon={faCircleXmark} /></a></td>
                                <td><img src={SportShoe} alt=""/></td>
                                <td>DNK Yellow Shoes</td>
                                <td>$120</td>
                                <td><input type="number" name="" id="" value="1"/></td>
                                <td>$120</td>
                            </tr>
                            <tr>
                                <td><a href="#"><FontAwesomeIcon icon={faCircleXmark} /></a></td>
                                <td><img src={SportShoe} alt=""/></td>
                                <td>DNK Yellow Shoes</td>
                                <td>$120</td>
                                <td><input type="number" name="" id="" value="1"/></td>
                                <td>$120</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section id="cart-add" className="section-p1">
                    <div id="coupon">
                        <h3>Apply Coupon</h3>
                        <div id="add-coupon">
                            <input type="text" placeholder="Enter Your Coupon"/>
                                <button className="blue">Apply</button>
                        </div>
                    </div>

                    <div id="subtotal">
                        <h3>Cart Total</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Cart SubTotal</td>
                                    <td>$ 360</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td><strong>$ 360</strong></td>
                                    <td/>
                                </tr>
                            </tbody>
                         </table>
                    <button className="blue">Proceed to checkout</button>
                </div>
            </section>
        </section>
            <Footer/>
    </div>
    )
}
