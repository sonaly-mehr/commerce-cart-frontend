import React, { useContext, useState } from 'react';
import './Checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faUser, faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { productContext } from '../../App';
import { RiDashboardFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import Payment from '../MakePayment.js/Payment';
import HeaderTop from '../Header/HeaderTop';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loggedInUser, setLoggedInUser } = useContext(productContext);
    const { shippingData, setShippingData } = useContext(productContext);
    const { singleProductData, setSingleProductData } = useContext(productContext);
    console.log("single Data from checkout", singleProductData);
    const { quantity, setQuantity } = useContext(productContext);

    const productName = singleProductData.map((pd)=> pd.name);
    const productPrice = singleProductData.map(pd => pd.price);
    const productId = singleProductData.map(pd => pd._id);

    const onSubmit = (data) => {

        const shippingAddress = {
            
            fullName: data.fullName,
            contactNumber: data.contactNumber,

            address: {
                country: data.country,
                city: data.city,
                street: data.street,
                postal: data.postal
            },
            product: [
                {
                    productId: productId[0],
                    productName: productName[0],
                    productPrice: productPrice[0] * quantity,
                    quantity: quantity,
                }
            ]
        }
        setShippingData(shippingAddress);

    }

    const handleCheckOut = (paymentId) => {
        // const productName = singleProductData.map(pd => pd.name);
        // const productName = singleProductData.map((pd)=> pd.name[0]);
        // const productPrice = singleProductData.map(pd => pd.price[0]);
        // const productId = singleProductData.map(pd => pd._id[0]);
        // console.log("product Id", productId);
        // console.log("product price", productPrice);
        // console.log("product name", productName);
        // console.log("product name", productName.map(pd)=> pd.name);

        const newOrder = {
            ...shippingData,
            email: loggedInUser.email,
            paymentId
        };
        fetch('http://localhost:4000/api/user/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .catch((error) => {
                console.log(error)
            })
        // history.push('/orders');
    }
    return (
        <div className='chechkout-section'>
            <div className='user-dash-header'>
            <HeaderTop></HeaderTop>
            </div>
            <div className="shipping-address-form" style={{ display: shippingData ? 'none' : 'block' }}>
                <div className="container">
                    <form action="" className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="personal-detail">
                            <h4>Shipping Personal detail</h4>
                            <input type="text" placeholder='Full name' name='fullName' {...register("fullName")} required /><br />
                            <input type="number" placeholder='Phone Number' name='contactNumber' {...register("contactNumber")} required /><br />
                            {/* <input type="email" placeholder='Email' required/> */}
                        </div>
                        <div className="shipping-address">
                            <h4>Shipping address</h4>
                            <input type="text" placeholder='Country' name='country' {...register("country")} required /><br />
                            <input type="text" placeholder='City' name='city' {...register("city")} required /><br />
                            <input type="text" placeholder='Street' name='street' {...register("street")} required /><br />
                            <input type="text" placeholder='Postal Code' name='postal' {...register("postal")} required /><br />
                        </div>
                        <button type='submit'>Checkout</button>
                    </form>
                </div>
            </div>

            <div style={{ display: shippingData ? 'block' : 'none' }}>
                <Payment handleCheckOut={handleCheckOut}></Payment>
            </div>
        </div>
    );
};

export default Checkout;