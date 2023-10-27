import React from "react";
import ProductJeans from "../assets/img/product-m-jeans1-300x300.jpg"
import SportShoe3 from "../assets/img/sports-shoe3.jpg"
import FooterLogo from "../assets/img/logo@2x-free-img-120x40.png"
import NavbarWhite from "../react-components/NavbarWhite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />
const EverythingPage = () => {
    return (
        <div>
            <NavbarWhite/>
            <section id="shop-content">
                <section id="secondary">
                    <div id="search">
                        <input type="text" placeholder="Search..." className="normal-input"/>
                            <button className="blue">
                                <svg aria-hidden="true" role="img" focusable="false"
                                     className="dashicon dashicons-arrow-right-alt2" xmlns="http://www.w3.org/2000/svg"
                                     width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path>
                                </svg>
                            </button>
                    </div>
                    <div id="filter">
                        <h3>Filter by Price</h3>
                        <div id="price-amount">
                            <button className="blue">Filter</button>
                            <h4>120$-290$</h4>
                        </div>
                    </div>
                    <div id="categories">
                        <h3>Categories</h3>
                        <div id="product-categories">
                            <ul>
                                <li><a href="">Accessories</a><span className="count">(7)</span></li>
                                <li><a href="">Men</a><span className="count">(14)</span></li>
                                <li><a href="">Women</a><span className="count">(17)</span></li>
                            </ul>
                        </div>
                    </div>
                    <div id="top-rated-products">
                        <h3>Our Best Sellers</h3>
                        <ul>
                            <li>
                                <div className="top-product-box">
                                    <img src={ProductJeans} alt=""/>
                                        <div className="top-product-info">
                                            <a href="">Dark Gray Jeans</a>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <h5>$150.00</h5>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="top-product-box">
                                    <img src={ProductJeans} alt=""/>
                                        <div className="top-product-info">
                                            <a href="">Dark Gray Jeans</a>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <h5>$150.00</h5>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="top-product-box">
                                    <img src={ProductJeans} alt=""/>
                                        <div className="top-product-info">
                                            <a href="">Dark Gray Jeans</a>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <h5>$150.00</h5>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="top-product-box">
                                    <img src={ProductJeans} alt=""/>
                                        <div className="top-product-info">
                                            <a href="">Dark Gray Jeans</a>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <h5>$150.00</h5>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="top-product-box">
                                    <img src={ProductJeans} alt=""/>
                                        <div className="top-product-info">
                                            <a href="">Dark Gray Jeans</a>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <h5>$150.00</h5>
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="commerce-content">
                    <div id="breadcrumb">
                        <a href="index.html">HomePage</a>
                        /Store
                    </div>
                    <div id="commerce-container-header">
                        <span>Showing 1-12 of 31 results</span>
                        <form className="ordering" method="get">
                            <select className="orderby" name="orderby" aria-label="Shop order">
                                <option value="menu_order" selected="selected">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </form>
                    </div>
                    <div id="products-container">
                        <ul className="product-columns">
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-box">
                                    <img src={SportShoe3} alt=""/>
                                        <div className="desc">
                                            <h5>DNK Yellow Shoes</h5>
                                            <h6 className="gray-text">Men</h6>
                                            <h6>$120</h6>
                                            <div className="star">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="pagination">
                        <ul className="page-nav">
                            <li><a href="">
                                <button className="normal">1</button>
                            </a></li>
                            <li><a href="">
                                <button className="normal">2</button>
                            </a></li>
                            <li><a href="">
                                <button className="normal">3</button>
                            </a></li>
                            <li><a href="">
                                <button className="normal">→</button>
                            </a></li>
                        </ul>
                    </div>
                </section>
            </section>
            <section id="footer">
                <div id="saleup">
                    <a href="everything.html"><h3>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL
                        BRANDS.</h3></a>
                </div>
                <div id="primary-footer">
                    <div id="logo-footer">
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
                    <div id="sub">
                        <span>Subscribe</span>
                        <input type="text" placeholder="Your email address..." className="normal-input"/>
                            <button className="blue">Subscribe</button>
                    </div>
                </div>
                <div id="last-part">
                    <div id="copyright">
                        <h3>Copyright © 2023 B3SUS. Powered by WebStorm.</h3>
                        <div id="logos">
                            <a><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                            <a><ion-icon name="logo-youtube"></ion-icon></a>
                            <a><i className='bx bxl-twitter'></i></a>
                            <a><i className='bx bxl-instagram'></i></a>
                            <a><i className='bx bxl-google'></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default EverythingPage
