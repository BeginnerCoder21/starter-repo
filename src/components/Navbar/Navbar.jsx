import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="n-right">
                Sextant
            </div>
            <div className="n-left">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>

            </div>
        </div>
    );
}

export default Navbar;