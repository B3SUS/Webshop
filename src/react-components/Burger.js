import React from 'react';
import {slide as Menu} from 'react-burger-menu'

class Burger extends React.Component {

    showSettings(event){
        event.preventDefault();
    }
    render() {
        return (
            <div className="mobile-header">
                <div className="burger-bar">
                    <div className="logo-mobile">

                    </div>
                    <div className="burger-bar-right-side">
                        <Menu right>
                            <a id="home" className="menu-item" href="/">Home</a>
                            <a id="about" className="menu-item" href="/about">About</a>
                            <a id="contact" className="menu-item" href="/contact">Contact</a>
                            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                        </Menu>
                    </div>
                </div>

            </div>
        );
    }
}

export default Burger;