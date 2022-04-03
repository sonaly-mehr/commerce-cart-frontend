import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const UpdateProduct = () => {
    const { pdId } = useParams();
    const navigate = useNavigate();
    const [product, setProuct] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        brand: "",
        quantity: ""
    })

    const { name, description, category, price, brand, quantity } = product;

    const onInputChange = e => {
        setProuct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadProduct();
    }, []);

    const updateProduct = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:4000/api/product/update/${pdId}`, product);
        alert("Product Updated Sucessfully!")
        navigate('/admin/product-list')
    };

    const loadProduct = () => {
        fetch(`http://localhost:4000/api/product/${pdId}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setProuct({
                    // _id: _id,
                    update: true,
                    name: result[0].name,
                    description: result[0].description,
                    category: result[0].category,
                    price: result[0].price,
                    brand: result[0].brand,
                    quantity: result[0].quantity,

                });
            })
            .catch((error) => console.log("error", error));
    };


    return (
        <div className='update-product-sec'>
            <form className='update-form'>
                <label htmlFor="">Name</label> <br />
                <input type="text" name="name" value={name} onChange={e => onInputChange(e)} /> <br />
                <label htmlFor="">Product Description</label> <br />
                <textarea id="" cols="30" rows="5" name="description" value={description} onChange={e => onInputChange(e)}></textarea>

                <div className="update-product-input-width">
                    <div className="input-form-width">
                        <label htmlFor="">Price</label> <br />
                        <input type="text" name="price" value={price} onChange={e => onInputChange(e)} /> <br />
                    </div>
                    <div className="input-form-width">
                        <label htmlFor="">Quantity</label> <br />
                        <input type="text" name="quantity" value={quantity} onChange={e => onInputChange(e)} /> <br />
                    </div>
                </div>

                <div className="update-product-input-width">
                    <div className="input-form-width">
                        <label htmlFor="">Category</label> <br />
                        <input type="text" name="category" value={category} onChange={e => onInputChange(e)} /> <br />
                    </div>
                    <div className="input-form-width">
                        <label htmlFor="">Brand</label> <br />
                        <input type="text" name="brand" value={brand} onChange={e => onInputChange(e)} className="input-width"/> <br />
                    </div>
                </div>
                <button type='submit' onClick={updateProduct}>Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;