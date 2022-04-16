import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import AdminHeader from './AdminHeader';

const ReviewRecords = () => {
    return (
        <div className='admin-dash-section'>
            <AdminHeader></AdminHeader>
            <h2 className='admin-header'>Admin Dasboard</h2>

            <div className="user-section" style={{ textAlign: 'center' }}>
                <h2>reviews</h2>

            </div>

            <div className="admin-dash-sidebar">
                <div className="dashboard-header">
                    <p><AiFillHome className='home-icon' /> Dashboard</p>
                </div>
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link> <AiFillHome className='sidebar-icon' /></li>
                    <li><Link to="/admin/users">Users</Link> <FaUserFriends className='sidebar-icon' /></li>
                    <li><Link to="/admin/add-product">Add Product</Link> <AiFillPlusCircle className='sidebar-icon' /></li>
                    <li><Link to="/admin/product-list">Product List</Link> <BsFillCartCheckFill className='sidebar-icon' /></li>
                    <li><Link to="/admin/reviews">Reviews</Link> <MdReviews className='sidebar-icon' /></li>

                </ul>
            </div>
        </div>
    );
};

export default ReviewRecords;