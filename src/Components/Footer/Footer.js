import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faLocationDot, faEnvelope, faMobileScreenButton, faTruck, faHandHoldingDollar, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGooglePlusG, faYoutubeSquare, faInstagram, faCcVisa, faCcDiscover, faCcMastercard, faCcPaypal, faCcAmex } from '@fortawesome/free-brands-svg-icons'
import insta1 from '../../insta1.webp';
import insta2 from '../../insta2.jpg';
import insta3 from '../../insta3.jpg';
import insta4 from '../../insta4.jpg';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="subscribe-news">
                <div className="container">
                    <div className="subscribe-wrap">
                        <h4>Subscribe Our Newsletter</h4>
                        <form action="">
                            <input type="email" placeholder='Enter Email Address' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-footer-top">
                                        <div className="logo">
                                            <h2><FontAwesomeIcon icon={faBasketShopping} className="logo-icon"></FontAwesomeIcon> Commerce Cart</h2>
                                        </div>
                                        <p>If you are going to use of Lorem Ipsum need to be sure there isn't anything hidden of text</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faLocationDot} className="footer-icon"></FontAwesomeIcon> 123 Street, Old Trafford, NewYork, USA</li>
                                            <li><FontAwesomeIcon icon={faEnvelope} className="footer-icon"></FontAwesomeIcon> info@sitename.com</li>
                                            <li><FontAwesomeIcon icon={faMobileScreenButton} className="footer-icon"></FontAwesomeIcon> + 457 789 789 65</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="single-footer-top">
                                        <h4>Useful Links</h4>
                                        <ul>
                                            <li>About Us</li>
                                            <li>FAQ</li>
                                            <li>Location</li>
                                            <li>Affiliates</li>
                                            <li>Contact</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="single-footer-top">
                                        <h4>My Account</h4>
                                        <ul>
                                            <li>My Account</li>
                                            <li>Discount</li>
                                            <li>Returns</li>
                                            <li>Orders History</li>
                                            <li>Order Tracking</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="single-footer-top">
                                        <h4>Instagram</h4>
                                        <div className="insta-gallary">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta2} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta3} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta4} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta2} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta3} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="single-gallary">
                                                        <img src={insta4} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-middle">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-footer-middle">
                                        <FontAwesomeIcon icon={faTruck} className="footer-middle-icon"></FontAwesomeIcon>
                                        <div className="middle-content">
                                            <h4>Free Delivery</h4>
                                            <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-footer-middle">
                                        <FontAwesomeIcon icon={faHandHoldingDollar} className="footer-middle-icon"></FontAwesomeIcon>
                                        <div className="middle-content">
                                            <h4>30 Day Returns Guarantee</h4>
                                            <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-footer-middle">
                                        <FontAwesomeIcon icon={faHeadset} className="footer-middle-icon"></FontAwesomeIcon>
                                        <div className="middle-content">
                                            <h4>27/4 Online Support</h4>
                                            <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-footer-bttom">
                                        <div className="social">
                                            <FontAwesomeIcon icon={faFacebookF} className="social-icon facebook"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faTwitter} className="social-icon twitter"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faGooglePlusG} className="social-icon google"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faYoutubeSquare} className="social-icon youtube"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faInstagram} className="social-icon insta"></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-footer-bttom">
                                        <p>© 2022 All Rights Reserved by Bestwebcreator</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-payment">
                                        <FontAwesomeIcon icon={faCcVisa} className="payment-icon"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faCcDiscover} className="payment-icon"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faCcMastercard} className="payment-icon"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faCcPaypal} className="payment-icon"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faCcAmex} className="payment-icon"></FontAwesomeIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;