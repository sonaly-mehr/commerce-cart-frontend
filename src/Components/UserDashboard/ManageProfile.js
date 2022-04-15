import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { BsSuitHeart, BsClockHistory, BsCurrencyDollar } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faUser, faBell, faMagnifyingGlass, faCircleUser, faCartShopping, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { productContext } from '../../App';
import HeaderTop from '../Header/HeaderTop';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ManageProfile = () => {
    const { loggedInUser, setLoggedInUser } = useContext(productContext);

    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNumber: "",
        // userPicture: ""
    })

    const { firstName, lastName, email, password, contactNumber } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const updateUser = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:4000/api/user/update/${loggedInUser._id}`, user);
        alert("User Updated Sucessfully!")
        navigate(`/user/profile/update/${loggedInUser._id}`)
    };

    const loadUser = () => {
        fetch(`http://localhost:4000/api/user/${loggedInUser._id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setUser({
                    // _id: _id,
                    update: true,
                    firstName: result[0].firstName,
                    lastName: result[0].lastName,
                    email: result[0].email,
                    password: result[0].password,
                    contactNumber: result[0].contactNumber,
                    // quantity: result[0].quantity,

                });
            })
            .catch((error) => console.log("error", error));
    };

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
                        <p>Manage Profile</p>
                        <div className="basic-info-sec">
                            <p>Basic Info</p>
                            <div className="profile-header-border">

                            </div>
                            <form action="" className='user-profile-wrap'>
                                <label htmlFor="">First Name</label>
                                <input type="text" name="firstName" value={firstName} onChange={e => onInputChange(e)}/><br />
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="lastName" value={lastName} onChange={e => onInputChange(e)}/><br />
                                <label htmlFor="">Your Email</label>
                                <input type="email" name="email" value={email} onChange={e => onInputChange(e)}/><br />
                                <label htmlFor="">Password</label>
                                <input type="password" name="password" value={password} onChange={e => onInputChange(e)} placeholder="Enter new password"/><br />
                                <label htmlFor="">Contact Number</label>
                                <input type="text" name="contactNumber" value={contactNumber} onChange={e => onInputChange(e)}/><br />
                                {/* <label htmlFor="">Photo</label>
                                <input type="text"value={firstName} onChange={e => onInputChange(e)}/><br /> */}
                                <button type='submit' onClick={updateUser}>Update Profile</button>
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