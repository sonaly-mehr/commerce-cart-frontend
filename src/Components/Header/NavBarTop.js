import React from 'react';
import { Link } from 'react-router-dom';

const NavBarTop = () => {
    return (
        <div className='navbar-section'>
                <div className="container">
                    <div className="menu global-menu">
                        <ul>
                            <li className='active'><Link to="/">Home</Link></li>
                            <li><a href="">Product</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default NavBarTop;