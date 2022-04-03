import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { BsSuitHeart, BsClockHistory, BsCurrencyDollar } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { productContext } from '../../App';
import userImg from '../../image/user-image.png';
import { useLocation, useNavigate } from "react-router-dom";
const Sidebar = () => {

    const { loggedInUser, setLoggedInUser } = useContext(productContext);
    return (
        <div className="admin-dash-sidebar user-dash-sidebar">
                <div className="user-name-header">
                    <img src={userImg} alt="" />
                    <h4>{loggedInUser.firstName} {loggedInUser.lastName}</h4>
                </div>
                <ul className='user-dash-nav'>
                    <li className='user-nav-active'><Link to="/user/dashboard"><AiOutlineHome className='user-sidebar-icon' /> Dashboard</Link></li>
                    <li><Link to="/user/order-history"><BsClockHistory className='user-sidebar-icon' /> Order History</Link></li>
                    <li><Link to="/user/profile"><FaRegUser className='user-sidebar-icon' /> Manage Profile</Link></li>
                    <li><Link to="/user/wishlist"><BsSuitHeart className='user-sidebar-icon' /> Wishlist</Link></li>
                    <li><Link to="/user/point"><BsCurrencyDollar className='user-sidebar-icon' /> Earning Points</Link></li>
                    <li><Link to="/user/support"><MdSupportAgent className='user-sidebar-icon' /> Support Ticket</Link></li>
                </ul>
            </div>
    );
};

export default Sidebar;