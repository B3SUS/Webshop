import React from "react";
import LogoPng from "../assets/img/logo-black.png";
import "../scss/main.css";
import {Link} from "react-router-dom";
import {RiShoppingBagLine} from "react-icons/ri";


const CartIcon = ({ cartItemCount }) => {
    return (
        <Link to="/cart">
            <RiShoppingBagLine className={"cartIcon"} />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
    );
};
const NavbarWhite = ({cartItemCount}) => {

    return (
        <div>
            <div className="navbar white-navbar">
                <ul className="left-side left-side-navbar-white">
                    <li>
                        <Link to="/">
                            <img src={LogoPng} className="firstlogo" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/everything">Everything</Link>
                    </li>
                    <li>
                        <a href="women.html">Women</a>
                    </li>
                    <li>
                        <a href="men.html">Men</a>
                    </li>
                    <li>
                        <a href="accesories.html">Accessories</a>
                    </li>
                </ul>
                <ul className="right-side right-side-navbar-white">
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                        <CartIcon cartItemCount={cartItemCount} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarWhite;
