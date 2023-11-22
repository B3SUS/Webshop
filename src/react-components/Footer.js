import React from "react";
import "../scss/main.css";
import FooterLogo from "../assets/img/logo@2x-free-img-120x40.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="saleup">
                    <a href="everything.html"><h3>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL
                        BRANDS.</h3></a>
                </div>
                <div className="primary-footer">
                    <div className="logo-footer">
                        <img src={FooterLogo} alt=""/>
                        <h3>The best look anytime, anywhere.</h3>
                    </div>
                    <div className="for-them">
                        <span>For Her</span>
                        <ul className="footer-links">
                            <li><a href=""><h4>Women Jeans</h4></a></li>
                            <li><a href=""><h4>Tops and Shirts</h4></a></li>
                            <li><a href=""><h4>Women Jackets</h4></a></li>
                            <li><a href=""><h4>Heels and Flats</h4></a></li>
                            <li><a href=""><h4>Women Accessories</h4></a></li>
                        </ul>
                    </div>
                    <div className="for-them">
                        <span>For Him</span>
                        <ul className="footer-links">
                            <li><a href=""><h4>Men Jeans</h4></a></li>
                            <li><a href=""><h4>Men Shirts</h4></a></li>
                            <li><a href=""><h4>Men Shoes</h4></a></li>
                            <li><a href=""><h4>Men Accessories</h4></a></li>
                            <li><a href=""><h4>Men Jackets</h4></a></li>
                        </ul>
                    </div>
                    <div className="sub">
                        <span>Subscribe</span>
                        <input type="text" placeholder="Your email address..." className="normal-input"/>
                        <button className="blue">Subscribe</button>
                    </div>
                </div>
                <div className="last-part">
                    <div className="copyright">
                        <h3>Copyright © 2023 B3SUS. Powered by WebStorm.</h3>
                        <div className="logos">
                            <a><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a><FontAwesomeIcon icon={faYoutube} /></a>
                            <a><FontAwesomeIcon icon={faTwitter} /></a>
                            <a><FontAwesomeIcon icon={faInstagram} /></a>
                            <a><FontAwesomeIcon icon={faGoogle} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
