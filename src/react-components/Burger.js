import React from 'react';
import {slide as Menu} from 'react-burger-menu'
import LogoPng from "../assets/img/logo-black.png";
import "../scss/main.css";
import {Link} from "react-router-dom";

class Burger extends React.Component {

    render() {
        return (
            <div className="mobile-header">
                <div className="burger-bar">
                    <div className="logo-mobile">
                        <Link to="/">
                            <img src={LogoPng} className="firstlogo" alt="" />
                        </Link>
                    </div>
                    <div className="burger-bar-right-side">
                        <Menu right width={'351px'} noOverlay>
                            <Link to="/everything" className="menu-item">Everything</Link>
                            <Link to="/women" className="menu-item">Women</Link>
                            <Link to="/men" className="menu-item">Men</Link>
                            <Link to="/accessories" className="menu-item">Accessories</Link>
                        </Menu>
                    </div>
                </div>
            </div>
        );
    }
}

export default Burger;