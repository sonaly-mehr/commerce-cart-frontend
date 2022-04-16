import React, { useContext } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleUser, faCartShopping, faBasketShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import { productContext } from '../../App';
import HeaderTop from './HeaderTop';
import axios from 'axios';

const Header = () => {
    const { searchProduct, setSearchProduct } = useContext(productContext);
    const { addToCart, setAddToCart } = useContext(productContext);
    const [productList, setProductList] = useState([]);
    const { list, setList } = useContext(productContext);

    useEffect(() => {
        fetch('https://still-tundra-52950.herokuapp.com/api/product/list')
            .then(res => res.json())
            .then(data => setProductList(data));
    }, [])

    const searchRecords = (e) => {
        e.preventDefault();
        // alert(search)
        axios.get(`https://still-tundra-52950.herokuapp.com/api/search/product/${searchProduct}`)
            .then(response => {
                setList(response.data);
            });
        console.log('home product', setList);

    }

    return (
        <div className='header-section'>
            <HeaderTop></HeaderTop>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo">
                                <h2><FontAwesomeIcon icon={faBasketShopping} className="logo-icon"></FontAwesomeIcon> Commerce Cart</h2>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="search-bar">
                                <form action="">
                                    <input type="text" placeholder='Search Product Here..' onChange={(e) => setSearchProduct(e.target.value)} />
                                    <button onClick={searchRecords}><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="login-cart">
                                <FontAwesomeIcon icon={faCircleUser} className="login-cart-icon"></FontAwesomeIcon>
                                <div className='cart-bttn'>
                                    <FontAwesomeIcon icon={faCartShopping} className="login-cart-icon"></FontAwesomeIcon>
                                    <span className='cart-number'>{addToCart}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;