import React from "react";
import SportShoe3 from "../assets/img/sports-shoe3.jpg"
import background from "../../src/assets/img/hero.png"
import NavbarBlue from "../react-components/Navbar-Blue";
import {Footer} from "../react-components/Footer";
import Burger from "../react-components/Burger";
import {BrowserView, MobileView} from "react-device-detect";


const HomePage = () => {
  return(
      <div>
          <BrowserView>
              <NavbarBlue/>
          </BrowserView>
          <MobileView>
              <Burger/>
          </MobileView>
          <section id="hero" style={{ backgroundImage: `url(${background})` }}>
              <div id="cover2"></div>
              <div className="hero-section">
                  <div className="hero-text-container">
                      <div className="hero-text-container-flex">
                          <h1>Raining Offers For Hot Summer!</h1>
                          <h3>25% Off On All Products</h3>
                          <button className="normal">Shop now</button>
                          <button className="white">Find more</button>
                      </div>
                  </div>
              </div>
          </section>
          <section className="products-section">
              <h2>Featured Products</h2>
              <hr id="divider"/>
                  <section className="products-container">
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
                  </section>
          </section>
        <Footer/>
      </div>
  );
}
export default HomePage