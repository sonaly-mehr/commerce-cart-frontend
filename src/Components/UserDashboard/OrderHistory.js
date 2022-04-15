import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
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
const OrderHistory = () => {
    const { loggedInUser, setLoggedInUser } = useContext(productContext);
    const { orderData, setOrderData } = useContext(productContext);
    const { shippingData, setShippingData } = useContext(productContext);
    console.log("order data from order history", orderData)

    useEffect(() => {
        fetch('http://localhost:4000/api/user/order/list?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderData(data))
            .catch((error)=> {
                console.log(error);
            })
    }, [])
    console.log('orderData', orderData)
    return (
        <div className='admin-dash-section'>
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
                        <p>Order</p>
                        <div className="order-history-sec">
                            <p>Order History</p>
                            <div className="profile-header-border"></div>
                            <div className="order-history">

                                <table className='order-table'>
                                    <tr className='order-table-header'>
                                        <th className='order-title-header' >Name</th>
                                        <th className='order-date-header'>Date</th>
                                        <th className='order-amount-header'>Amount</th>
                                        <th className='order-status-header'>Delivery Status</th>
                                        <th className='order-payment-header'>Payment Status</th>
                                    </tr>
                                    <div className="order-table-header-border"></div>
                                    { loggedInUser.email ?
                                        orderData.orders.map((pd) => <>{
                                            pd.product.map((info) => 
                                            <tr className='order-table-content'>
                                                <td className='order-title'>{info.productName}</td>
                                                <td className='order-date'>{pd.createdAt}</td>
                                                <td className='order-amount'>{info.productPrice}</td>
                                                <td className='order-pending'>Pending</td>
                                                <td className='order-paid'>Paid</td>
                                            </tr>
                                            )
                                        }
                                        </>
                                        )
                                        : <p>You dont have any orders yet</p>
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar></Sidebar>
        </div>
    );
};

export default OrderHistory;