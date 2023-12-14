import React from "react";
import background from "../../src/assets/img/hero.png"
import NavbarBlue from "../react-components/Navbar-Blue";
import {Footer} from "../react-components/Footer";
import Burger from "../react-components/Burger";
import {BrowserView, MobileView} from "react-device-detect";
import {ProductBoxHome} from "../react-components/ProductBoxHome";


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
              <ProductBoxHome/>
          </section>
        <Footer/>
      </div>
  );
}
export default HomePage