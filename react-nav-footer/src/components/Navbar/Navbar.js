import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import './Navbar.css';


class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menu-icon">
                    <i className="fab"></i>
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <il key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </il>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
