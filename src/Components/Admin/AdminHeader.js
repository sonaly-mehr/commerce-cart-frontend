import React, { useContext } from 'react';
import { productContext } from '../../App';
import { FaUserCircle } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    const { adminLoggedIn, setAdminLoggedIn } = useContext(productContext);
    return (
        <div className="admin-header-top">
            <div className="admin-login-info">
                <div className="admin-info-wrap">
                    <FaUserCircle className='admin-user' />
                    <p>{adminLoggedIn.firstName} {adminLoggedIn.lastName}</p>
                </div>
                <MdSettingsSuggest className='admin-setting' />
                {
                    adminLoggedIn && adminLoggedIn.email && <span onClick={() => setAdminLoggedIn({})} style={{ cursor: 'pointer' }} className="admin-logout"><Link to="/admin/signin">Logout</Link></span>
                }
            </div>
        </div>
    );
};

export default AdminHeader;