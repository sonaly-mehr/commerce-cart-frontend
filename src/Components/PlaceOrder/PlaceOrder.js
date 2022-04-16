import React, { useContext } from 'react';
import '../MakePayment.js/Payment.css';
import { Link } from 'react-router-dom';
import { productContext } from '../../App';
import HeaderTop from '../Header/HeaderTop';

const PlaceOrder = () => {
    const { singleProductData, setSingleProductData } = useContext(productContext);
    const { quantity, setQuantity } = useContext(productContext);
    const { shippingData, setShippingData } = useContext(productContext);
    console.log("shipping data from place order", shippingData)
    const { orderData, setOrderData } = useContext(productContext);
    console.log("shipping data from shipping", orderData)
    return (
        <div>
            <div className='user-dash-header'>
                <HeaderTop></HeaderTop>
            </div>
            <div className="container">
                <div className="place-order-section">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="place-order-left">
                                <div className="shipping">
                                    <h4>Shipping</h4>
                                    <div className="shipping-detail">
                                        <h5>Name:</h5> <p>{shippingData.fullName}</p>
                                        <h5>Address:</h5> <p>{shippingData.address.street}, {shippingData.address.postal}, {shippingData.address.city}, {shippingData.address.country}</p>
                                        {/* `${ship.address.street}, ${ship.address.postal}, ${ship.address.city}, ${ship.address.country}` */}
                                    </div>
                                </div>
                                <div className="payment">
                                    <h4>Shipping</h4>
                                    <div className="payment-detail">
                                        <h5>Payment Method:</h5> <p>Paypal</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5">
                            {
                                singleProductData.map((pd) =>
                                    <div className="order-summarry">
                                        <div className="summary-header">
                                            <p>Summary</p> <span>{singleProductData.length} Items</span>
                                            <div className="summer-header-border"></div>
                                        </div>
                                        <div className="product">
                                            <div className="product-header">
                                                <h6>Product</h6> <h6>Total</h6>
                                            </div>
                                            <div className="product-content">
                                                <p>{pd.name} × <strong>{quantity}</strong></p>
                                                <span>${quantity * pd.price}</span>
                                            </div>
                                        </div>
                                        <div className="subtotal">
                                            <h6>Subtotal</h6>
                                            <span>${pd.price * quantity}</span>
                                        </div>
                                        <div className="total-shipping">
                                            <h6>Total Shipping</h6>
                                            <span>$0.50</span>
                                        </div>
                                        <div className="total">
                                            <h6>Total</h6>
                                            <span>${(pd.price + 0.50) * quantity}</span>
                                        </div>
                                        <button><Link to="/user/dashboard">Place Order</Link></button>

                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;