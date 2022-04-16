import React, { useContext } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate'
import AdminHeader from './AdminHeader';
import axios from 'axios';

const ProductRecords = () => {
    const [search, setSearch] = useState('');
    const [ProductList, setProducList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch('https://still-tundra-52950.herokuapp.com/api/admin/product/list')
            .then(res => res.json())
            .then(data => setProducList(data))
    }, [])

    const deleteProduct = (id) => {
        fetch(`https://still-tundra-52950.herokuapp.com/api/product/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Product Deleted!')
                }

            })
        setProducList(ProductList.filter(p => p._id !== id))
    }

    const searchRecords = (e) => {
        e.preventDefault();
        // alert(search)
        axios.get(`https://still-tundra-52950.herokuapp.com/api/admin/search/product/${search}`)
            .then(response => {
                setProducList(response.data);
            });

    }

    const productPerPage = 8;
    const pageVisited = pageNumber * productPerPage;
    const displayProuct = ProductList.slice(pageVisited, pageVisited + productPerPage).map((product) => {
        return (
            <div className='table-content'>
                <tr>
                    <td className='product-name'>{product.name}</td>
                </tr>
                <tr>
                    <td className='product-price'>{product.price}</td>
                </tr>
                <tr>
                    <td className='product-category'>{product.category}</td>
                </tr>
                <tr>
                    <td className='product-quantity'>{product.quantity}</td>
                </tr>
                <tr>
                    <td className='product-brand'>{product.brand}</td>
                </tr>
                <tr>

                    <td className='action-bttn'><Link to={`/admin/product/edit/${product._id}`}><button className='edit-btn'><BiEditAlt /></button></Link> <button className='delete-btn' onClick={() => deleteProduct(product._id)}><TiDeleteOutline /></button></td>
                </tr>
            </div>
        )
    })
    const pageCount = Math.ceil(ProductList.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <div className='admin-dash-section'>
            <AdminHeader></AdminHeader>
            <h2 className='admin-header'>Admin Dasboard</h2>


            <div className="add-product-form default-dash-width" style={{ textAlign: 'center' }}>
                <div className="admin-product-header">
                    <p>Product</p>
                    <form action="">
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search user by name or email...' />
                        <button onClick={searchRecords}>Search</button>
                    </form>
                    <span>Product List</span>
                </div>

                <div className="user-section" style={{ textAlign: 'center' }}>
                    <table className='product-table'>
                        <tr className='table-header'>
                            <th className='product-tittle'>Name</th>
                            <th className='price-header'>Price</th>
                            {/* <th>Description</th> */}
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Brand</th>
                            <th>Action</th>
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

export default ProductRecords;