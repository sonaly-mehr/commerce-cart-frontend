import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../App';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import login_bg from '../../image/login-signup-bg.png'
import NavBarTop from '../Header/NavBarTop';

const AdminSignin = () => {

    const {adminLoggedIn, setAdminLoggedIn}= useContext(productContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        const userData = {
            email: data.email,
            password: data.password
        };
        const url = `http://localhost:4000/api/admin/signin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then((success, error) => {
                if(success){
                setAdminLoggedIn(success.user)
                alert(success.message)
                navigate('/admin/dashboard')
                }
                else{
                    alert(error.message);
                    console.log(error.message);
                }
            })
            console.log('admin info from signin', adminLoggedIn);
            // alert("email or password does not match!")
            // navigate(redirect)
            
            
    };

    return (
        
        <div className="signin-section">
            <Header></Header>
            <NavBarTop></NavBarTop>

            <div className="container auth-container">
                    <div className="row">
                        <div className="col-md-6 padding">
                            <div className="login-bg">
                                <img src={login_bg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 padding">
                            <div className="signin-form">
                                <div className="signin">
                                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                                </div>
                                <div className="auth-form-wrap">
                                    <h2>Welcome to Commerce Cart!</h2>
                                    <span>Sign in to your account</span>

                                    <form action="" className='form-container' onSubmit={handleSubmit(onSubmit)}>
                                        {/* <label htmlFor="">Name</label> <br />
                                        <input type="text" placeholder='John Watson' /> <br /> */}
                                        <label htmlFor="">Email</label> <br />
                                        <input type="email" placeholder='example@gmail.com' name='email' {...register("email")} required/> <br />
                                        <label htmlFor="">Password</label> <br />
                                        <input type="password" placeholder='8+ characters' name='password' {...register("password")} required/> <br />
                                        <input type="submit" value="Sign In" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AdminSignin;