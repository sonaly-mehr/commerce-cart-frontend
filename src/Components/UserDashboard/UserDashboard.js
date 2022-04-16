import React, { useContext } from 'react';
import './UserDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleUser, faCartShopping, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import userImg from '../../image/user-image.png'
import { productContext } from '../../App';
import HeaderTop from '../Header/HeaderTop';
import Sidebar from './Sidebar';

const UserDashboard = () => {
    const { orderData, setOrderData } = useContext(productContext);
    console.log('order data from dashboard', orderData)
    return (
        <div className='admin-dash-section'>
            <div>
                <div className="admin-login-info user-padding">
                </div>
            </div>
            <div className='user-dash-header'>
                <HeaderTop></HeaderTop>
            </div>

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
                                    <input type="text" placeholder='Search Product Here..' />
                                    {/* ref={inputEl} type="text" placeholder='Search Product Here..' value={searchProduct} onChange={getSearchTerm} */}
                                    <button><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="login-cart">
                                <FontAwesomeIcon icon={faCircleUser} className="login-cart-icon"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faCartShopping} className="login-cart-icon"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-dashboard-home">
                <div className="admin-dashboard-content user-dashboard-content">
                    <div className="container dash-width">
                        <p>Dashboard</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-stat stat-bg1 user-stat-bg1">
                                    <h4>0 Product</h4>
                                    <p className='user-p'>in your cart</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-stat stat-bg2 user-stat-bg2">
                                    <h4>1 Product(s)</h4>
                                    <p className='user-p'>in your wishlist</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-stat stat-bg3 user-stat-bg3">
                                    <h4>2 Product(s)</h4>
                                    <p className='user-p'>you orderded</p>
                                </div>
                            </div>
                        </div>
                        <div className="default-shipping-address">
                            <p>Default Shipping Address</p>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar></Sidebar>
        </div>
    );
};

export default UserDashboard;