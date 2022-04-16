import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import CardForm from './CardForm';
const stripePromise = loadStripe('pk_test_51IeF2FDWdYPFaGFdcB4l7ZnOYxuVEToaYpUgLehHupf7KUBNSlAzbuCd7Y3oaObJaE1QlOGwDS55LrNZeU2gsgW3008PyxC6sG');

const Payment = ({ handleCheckOut }) => {

    return (
        <Elements stripe={stripePromise}>
            <div className='user-dash-header'>
            </div>
            <CardForm handleCheckOut={handleCheckOut}></CardForm>
        </Elements>
    );
};

export default Payment;