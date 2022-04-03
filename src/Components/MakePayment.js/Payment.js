import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faUser, faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { RiDashboardFill } from "react-icons/ri";
import CardForm from './CardForm';
import { productContext } from '../../App';
import HeaderTop from '../Header/HeaderTop';
const stripePromise = loadStripe('pk_test_51IeF2FDWdYPFaGFdcB4l7ZnOYxuVEToaYpUgLehHupf7KUBNSlAzbuCd7Y3oaObJaE1QlOGwDS55LrNZeU2gsgW3008PyxC6sG');

const Payment = ({handleCheckOut}) => {
    const { loggedInUser, setLoggedInUser } = useContext(productContext);
    return (
        <Elements stripe={stripePromise}>
            {/* user-dash-header */}
            <div className='user-dash-header'>
            {/* <HeaderTop></HeaderTop> */}
            </div>
            <CardForm handleCheckOut={handleCheckOut}></CardForm>
        </Elements>
    );
};

export default Payment;