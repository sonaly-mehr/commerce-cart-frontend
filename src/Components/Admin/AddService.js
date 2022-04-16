import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Admin.css'
import { FaUserFriends } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [productPictures, setProductPictures] = useState([]);

    const submitProductForm = (e) => {
        // e.preventDefault();
        const form = new FormData();
        form.append("name", name);
        form.append("quantity", quantity);
        form.append("price", price);
        form.append("brand", brand);
        form.append("description", description);
        form.append("category", category);
        for (let pic of productPictures) {
            form.append("productPictures", pic);
        }

        fetch("https://still-tundra-52950.herokuapp.com/api/product/create", {
            method: 'POST',
            body: form,
        })
            .then((result) => {
                alert("form data submitted successfully")
            })
            .catch((err) => {
                console.log(err.error)
            })
    }
    const handleProductPictures = (e) => {
        setProductPictures([...productPictures, e.target.files[0]]);
    };

    return (
        <div className='admin-dash-section'>
            <AdminHeader></AdminHeader>
            <h2 className='admin-header'>Admin Dasboard</h2>

            <div className="add-product-form" style={{ textAlign: 'center' }}>
                <div className="admin-product-header">
                    <p>Create Product</p>
                    <span>Product List</span>
                </div>
                <form action="" className="form-wrap" encType='multipart/form-data' onSubmit={handleSubmit(submitProductForm)}>
                    {/* encType='multipart/form-data' */}
                    <div className="single-input">
                        <label htmlFor="">Title:</label>
                        <input type="text" name="name" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="single-input">
                        <label htmlFor="">Description:</label>
                        <textarea type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className="common-width-input">
                        <div className="single-input">
                            <label htmlFor="">Price:</label>
                            <input type="text" name="price" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className="single-input">
                            <label htmlFor="">Quantity:</label>
                            <input type="text" name="quantity" placeholder="Enter quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                    </div>

                    <div className="common-width-input">
                        <div className="single-input">
                            <label htmlFor="">Brand:</label>
                            <input type="text" name="brand" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                        </div>

                        <div className="single-input">
                            <label htmlFor="">Category:</label>
                            <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                    </div>
                    <div className="single-input">
                        <label htmlFor="">Select Image:</label>
                        <input type="file" name="productPictures" onChange={handleProductPictures} class="inputfile" />
                        {/* <label for="file">Choose files</label> */}
                    </div>

                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

            <div className="admin-dash-sidebar">
                <div className="dashboard-header">
                    <p><AiFillHome className='home-icon' /> Dashboard</p>
                </div>
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link> <AiFillHome className='sidebar-icon' /></li>
                    <li><Link to="/admin/users">Users</Link> <FaUserFriends className='sidebar-icon' /></li>
                    <li><Link to="/admin/add-product">Add Product</Link> <AiFillPlusCircle className='sidebar-icon' /></li>
                    <li><Link to="/admin/product-list">Product List</Link> <BsFillCartCheckFill className='sidebar-icon' /></li>
                    <li><Link to="/admin/reviews">Reviews</Link> <MdReviews className='sidebar-icon' /></li>

                </ul>
            </div>
        </div>
    );
};

export default AddService;