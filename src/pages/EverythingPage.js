import React from "react";
import NavbarWhite from "../react-components/NavbarWhite";
import {Footer} from "../react-components/Footer";
import {ShopContentBrowser} from "../react-components/shop-content-Browser";
import {ShopContentMobile} from "../react-components/shop-content-mobile";
import "../scss/main.css";
import {BrowserView, MobileView} from "react-device-detect";
import Burger from "../react-components/Burger";

const EverythingPage = () => {
    return (
        <div style={{backgroundColor:'#f5f7f9'}}>
            <BrowserView>
                <NavbarWhite/>
                <ShopContentBrowser/>
            </BrowserView>
            <MobileView>
                <Burger/>
                <ShopContentMobile/>
            </MobileView>
            <Footer/>
        </div>
    )
}
export default EverythingPage
