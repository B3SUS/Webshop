import React from "react";
import LogoPng from "../assets/img/logo.png";
import "../scss/main.css";
import {Link} from "react-router-dom";

const NavbarBlue = () => {
    return (
        <div>
            <div className="navbar">
                    <ul className="left-side">
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
                    <ul className="right-side">
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact us</a>
                        </li>
                        <li>
                            <Link to={"/cart"}>
                                <button>Cart</button>
                            </Link>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default NavbarBlue;
