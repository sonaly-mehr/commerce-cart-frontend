import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faUser, faBell, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { RiDashboardFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { productContext } from '../../App';

const HeaderTop = () => {
    const { loggedInUser, setLoggedInUser } = useContext(productContext)
    
    return (
        <div className="header-top-section">
                <div className="container">
                    <div className="header-top">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="header-top-left">
                                    <span><FontAwesomeIcon icon={faPhone} className="header-icon"></FontAwesomeIcon>+060 (800) 801-582</span>
                                    <span><FontAwesomeIcon icon={faEnvelope} className="header-icon"></FontAwesomeIcon>support@shophub.com</span>
                                </div>
                            </div>
                            <div className="col-md-6 offset-md-1">
                                <div className="header-top-right">
                                    <span><FontAwesomeIcon icon={faLocationDot} className="header-icon"></FontAwesomeIcon>Store location</span>
                                    <span><FontAwesomeIcon icon={faBell} className="header-icon"></FontAwesomeIcon>Daily deal</span>
                                    {
                                        loggedInUser && loggedInUser.email && <span><RiDashboardFill className="header-icon panel-icon" /><Link to="/user/dashboard" style={{ color: 'black' }}>My panel</Link></span>
                                    }

                                    <span><FontAwesomeIcon icon={faUser} className="header-icon"></FontAwesomeIcon>
                                        {
                                            loggedInUser && loggedInUser.email ? <span onClick={() => setLoggedInUser({})} style={{ cursor: 'pointer' }}>Logout</span> : <Link to="/signin" style={{ color: 'black' }}>Login</Link>
                                        }
                                    </span>
                                    <span><FontAwesomeIcon icon={faUserShield} className="header-icon"></FontAwesomeIcon><Link to="/admin/signin">Admin Login</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HeaderTop;