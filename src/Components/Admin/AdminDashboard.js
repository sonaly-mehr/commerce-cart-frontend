import React, { useContext } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import chart from '../../../src/image/chart.png'
import pie from '../../../src/image/pie_chart.png'
import { productContext } from '../../App';
import AdminHeader from './AdminHeader';

const AdminDashboard = () => {
    const { adminLoggedIn, setAdminLoggedIn } = useContext(productContext);
    console.log('admin data', adminLoggedIn)
    return (
        <div className='admin-dash-section'>
            <AdminHeader></AdminHeader>
            <h2 className='admin-header'>Admin Dasboard</h2>

            <div className="admin-dashboard-content">
                <div className="container dash-width">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-stat stat-bg1">
                                <span>Weekly Sales</span>
                                <h3>$ 15,000</h3>
                                <p>Increased by 60%</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-stat stat-bg2">
                                <span>Weekly Orders</span>
                                <h3>49,000</h3>
                                <p>Decreased by 10%</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-stat stat-bg3">
                                <span>Visitors Online</span>
                                <h3>95,8400</h3>
                                <p>Increased by 5%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="chart-img">
                                <img src={chart} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pie-chart-img">
                                <img src={pie} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admin-dash-sidebar">
                <div className="dashboard-header">
                    <p><AiFillHome /> Dashboard</p>
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
export default AdminDashboard;