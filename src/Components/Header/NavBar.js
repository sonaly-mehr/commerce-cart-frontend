import React, { useContext } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { productContext } from '../../App';
const NavBar = () => {
    const {searchProduct, setSearchProduct} = useContext(productContext);
    return (
        <div>
      {(() => {
        if (searchProduct === '') {
          return (
            <div className='navbar-section'>
            <div className="container">
                <div className="menu">
                    <ul>
                        <li className='categories'><FontAwesomeIcon icon={faBars} className="category-icon"></FontAwesomeIcon><a href="">Categories</a></li>
                        <li className='active'><Link to="/">Home</Link></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="category-list">
                    <ul>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Sunglass</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Man's Product</a></li>
                        <li><a href="#">Ladies</a></li>
                        <li><a href="#">Western Dress</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Laptop</a></li>
                    </ul>
                </div>
            </div>
        </div>
          )
        }  
      })()}
    </div>
        
    );
};

export default NavBar;