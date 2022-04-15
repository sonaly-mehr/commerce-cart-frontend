import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Auth.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            contactNumber: data.contactNumber
        };
        const url = `http://localhost:4000/api/user/signup`;


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
                alert(success.message)
                }
                else{
                    alert(error.message);
                }
            })
    };
    return (
        <div className='signup-section'>
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

            <div className="container">
                <div className="signup-form">
                    <div className="signin">
                        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                    </div>
                    <div className="auth-form-wrap">
                        <h2>Welcome to Commerce Cart!</h2>
                        <span>Register your account</span>

                        <form action="" className='form-container' onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">First Name</label> <br />
                            <input type="text" placeholder='John' name='firstName' {...register("firstName")}/> <br />
                            <label htmlFor="">Last Name</label> <br />
                            <input type="text" placeholder='Watson' name='lastName' {...register("lastName")}/> <br />
                            <label htmlFor="">Email</label> <br />
                            <input type="email" placeholder='example@gmail.com' name='email' {...register("email")}/> <br />
                            <label htmlFor="">Password</label> <br />
                            <input type="password" placeholder='8+ characters' name='password' {...register("password")}/> <br />
                            <label htmlFor="">Contact Number</label> <br />
                            <input type="number" placeholder='+0912392313' name='contactNumber' {...register("contactNumber")}/> <br />
                            <input type="submit" value="Sign Up" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;