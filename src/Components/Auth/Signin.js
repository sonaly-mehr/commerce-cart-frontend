import React from 'react';
import './Auth.css';
import login_bg from '../../image/login-signup-bg.png'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
// import { productContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { productContext } from '../../App';

const Signin = () => {
    const {loggedInUser, setLoggedInUser}= useContext(productContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const redirectUrlIn = '/';
    // const redirect = redirectUrlIn ? redirectUrlIn : '/cart/chehckout';

    const onSubmit = data => {
        const userData = {
            email: data.email,
            password: data.password
        };
        const url = `http://localhost:4000/api/user/signin`;

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
                setLoggedInUser(success.user)
                alert(success.message)
                }
                else{
                    alert(error.message);
                    console.log(error.message);
                }
            })
            console.log('user info from signin', loggedInUser);
            // alert("email or password does not match!")
            // navigate(redirect)
            
            
    };

    return (
        <div className="signin-section">
            <Header></Header>
            <div className='navbar-section'>
                <div className="container">
                    <div className="menu global-menu">
                        <ul>
                            <li className='active'><a href="">Home</a></li>
                            <li><a href="">Product</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

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

export default Signin;