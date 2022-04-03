import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { BsSuitHeart, BsClockHistory, BsCurrencyDollar } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faUser, faBell, faMagnifyingGlass, faCircleUser, faCartShopping, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import userImg from '../../image/user-image.png'
import { productContext } from '../../App';
import { RiDashboardFill } from "react-icons/ri";
import HeaderTop from '../Header/HeaderTop';
import Sidebar from './Sidebar';

const ManageProfile = () => {
    const { loggedInUser, setLoggedInUser } = useContext(productContext);
    return (
        <div className='admin-dash-section user-dash-sec'>
            <div>
                <div className="admin-login-info user-padding">
                    {/* <div className="admin-info-wrap">
                        <FaUserCircle className='admin-user' />
                        <p>John Watson</p>
                    </div>
                    <MdSettingsSuggest className='admin-setting' /> */}
                </div>
            </div>
    
            <div className='user-dash-header'>
            <HeaderTop></HeaderTop>
            </div>
            
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="logo">
                                <h2><FontAwesomeIcon icon={faBasketShopping} className="logo-icon"></FontAwesomeIcon> Commerce Cart</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
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
                        <p>Manage Profile</p>
                        <div className="basic-info-sec">
                            <p>Basic Info</p>
                            <div className="profile-header-border">

                            </div>
                            <form action="" className='user-profile-wrap'>
                                <label htmlFor="">Your Name</label>
                                <input type="text" placeholder='Sonaly Akther'/><br />
                                <label htmlFor="">Your Phone</label>
                                <input type="text" placeholder='Your Phone'/><br />
                                <label htmlFor="">Photo</label>
                                <input type="text" placeholder='Choose File'/><br />
                                <label htmlFor="">New Password</label>
                                <input type="password" placeholder='New Password'/><br />
                                <label htmlFor="">Confirm Passwor</label>
                                <input type="password" placeholder='Confirm Password'/><br />
                                <button type='submit'>Update Profile</button>
                            </form>
                        </div>
                        <div className="profile-address">
                            <p>Address</p>
                            <div className="profile-header-border"></div>
                            <div className="add-address">
                                <AiOutlinePlus className='plus-icon'/>
                                <p>Add new address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar></Sidebar>
        </div>
    );
};

export default ManageProfile;