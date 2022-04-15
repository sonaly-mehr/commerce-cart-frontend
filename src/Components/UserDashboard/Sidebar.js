import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { BsSuitHeart, BsClockHistory, BsCurrencyDollar } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { productContext } from '../../App';
import userImg from '../../image/user-image.png';

const Sidebar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(productContext);
    // const [buttonState, setButtonState] = useState(false);
    
    // const handleClick = () => {
    //     setButtonState(buttonState => !buttonState);
    // }
    // let toggleClass = buttonState ? 'active': '';
    return (
        <div className="admin-dash-sidebar user-dash-sidebar">
                <div className="user-name-header">
                    <img src={userImg} alt="" />
                    <h4>{loggedInUser.firstName} {loggedInUser.lastName}</h4>
                </div>
                <ul className='user-dash-nav'>
                    <li><NavLink to="/user/dashboard" activeClassName="active"><AiOutlineHome className='user-sidebar-icon' /> Dashboard</NavLink></li>
                    <li><NavLink to={`/user/profile/update/${loggedInUser._id}`} activeClassName="active" ><FaRegUser className='user-sidebar-icon'/> Manage Profile</NavLink></li>
                    <li><NavLink to="/user/order-history" activeClassName="active"><BsClockHistory className='user-sidebar-icon' /> Order History</NavLink></li>
                    <li><NavLink to="/user/wishlist" activeClassName="active"><BsSuitHeart className='user-sidebar-icon' /> Wishlist</NavLink></li>
                    <li><NavLink to="/user/point" activeClassName="active"><BsCurrencyDollar className='user-sidebar-icon'/> Earning Points</NavLink></li>
                    <li><NavLink to="/user/support" activeClassName="active"><MdSupportAgent className='user-sidebar-icon'/> Support Ticket</NavLink></li>
                </ul>
            </div>
    );
};

export default Sidebar;