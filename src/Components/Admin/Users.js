import React from 'react';
import './Admin.css'
import { FaUserCircle, FaUserFriends } from "react-icons/fa";
import { MdSettingsSuggest, MdReviews } from "react-icons/md";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate'
import { GrPrevious, GrNext } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import AdminHeader from './AdminHeader';
import axios from 'axios';

const Users = () => {
    const [search, setSearch] = useState('');
    const [userList, setUserList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    console.log("search result", userList);

    useEffect(() => {
        fetch('https://still-tundra-52950.herokuapp.com/api/user/list')
            .then(res => res.json())
            .then(data => setUserList(data))
    }, [])

    const deleteUser = (id) => {
        fetch(`https://still-tundra-52950.herokuapp.com/api/user/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('User Deleted!')
                }

            })
        setUserList(userList.filter(u => u._id !== id))
    }
    const searchRecords = (e) => {
        e.preventDefault();
        // alert(search)
        axios.get(`https://still-tundra-52950.herokuapp.com/api/search/user/${search}`)
            .then(response => {
                setUserList(response.data);
            });

    }

    const productPerPage = 8;
    const pageVisited = pageNumber * productPerPage;
    const displayProuct = userList.slice(pageVisited, pageVisited + productPerPage).map((user) => {
        return (
            <div className='table-content'>
                <tr>
                    <td className='product-name user-name'>{user.firstName} {user.lastName}</td>
                </tr>
                <tr>
                    <td className='user-email'>{user.email}</td>
                </tr>
                <tr>
                    <td className='user-number'>{user.contactNumber}</td>
                </tr>
                <tr>
                    <td className='action-bttn user-btn'><button className='delete-btn' onClick={() => deleteUser(user._id)} ><TiDeleteOutline /></button></td>
                </tr>
            </div>
        )
    })
    const pageCount = Math.ceil(userList.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <div className='admin-dash-section'>
            <AdminHeader></AdminHeader>
            <h2 className='admin-header'>Admin Dasboard</h2>

            <div className="add-product-form default-dash-width" style={{ textAlign: 'center' }}>
                <div className="admin-product-header">
                    <p>Users</p>
                    <form action="">
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search user by name or email...' />
                        <button onClick={searchRecords}>Search</button>
                    </form>
                    <span>User List</span>
                </div>

                <div className="user-section" style={{ textAlign: 'center' }}>
                    <table className='product-table'>
                        <tr className='table-header'>
                            <th className='product-tittle user-title'>Name</th>
                            <th className='price-header email-header'>Email</th>
                            {/* <th>Description</th> */}
                            <th className='contact-header'>Contact Number</th>
                            {/* <th>Quantity</th>
                            <th>Brand</th> */}
                            <th className='user-actionbtn'>Action</th>
                        </tr>
                        {displayProuct}
                    </table>
                    <ReactPaginate
                        previousLabel={<GrPrevious />}
                        nextLabel={<GrNext />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginateBttns"}
                        previousLinkClassName={"PreviousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"disableBttn"}
                        activeClassName={"activeBttn"}
                    />
                </div>
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

export default Users;