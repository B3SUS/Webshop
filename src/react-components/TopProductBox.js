import React from "react";
import ProductJeans from "../assets/img/product-m-jeans1-300x300.jpg";
import "../scss/main.css";

export function TopProductBox() {
    return(
        <div className="top-rated-products">
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
    )
}