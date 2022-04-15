import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../../App';
import './Payment.css'

const CardForm = ({handleCheckOut}) => {
    const {singleProductData, setSingleProductData} = useContext(productContext);

    const { productId } = useParams();

    useEffect(()=> {
        fetch(`http://localhost:4000/api/product/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProductData(data));
    }, [productId])

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handleCheckOut(paymentMethod.id)
        }
    };
    const paymentHandle = (productId) => {
        if(paymentSuccess){
            alert("your payment was sucessfull")
            navigate(`/cart/place-order/${productId}`)
        }
    }
    return (
        <div className='card-form-section'>
            <h4>Pay With</h4>
            <form onSubmit={handleSubmit} className="card-form">
                <label htmlFor="">Card Information</label>
                <CardElement />
                <label htmlFor="">Country or Region</label><br />
                <select id="country">
                    <option value="volvo">United Kingdom</option>
                    <option value="saab">Canada</option>
                    <option value="vw">Australia</option>
                    <option value="vw">India</option>
                    <option value="vw">Netharland</option>
                    <option value="vw">Switzerland</option>
                    <option value="vw">Germany.</option>
                    <option value="vw">Japan</option>
                    <option value="audi" selected>United States</option>
                </select>
                <input type="text" placeholder='Zip Code' className='zip_code' />
                {
                    singleProductData.map((data)=> 
                    <button type="submit" disabled={!stripe} className="payment-submit" onClick={()=> paymentHandle(data._id)}>
                    Pay
                </button>
                    )
                }
                
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {/* {
                paymentSuccess && paymentHandle()
                // <p style={{ color: 'green' }}>Your Payment was successful</p>
            } */}
        </div>
    );
};

export default CardForm;