import React, { useContext } from 'react';
import Header from '../Header/Header';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProductDescp from '../Products/ProductDescp';
import FashionSale from '../FashionSale/FashionSale'
import { productContext } from '../../App';

const ProductDetail = () => {

    const { singleProductData, setSingleProductData } = useContext(productContext);

    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://still-tundra-52950.herokuapp.com/api/product/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProductData(data));
    }, [productId])
    console.log("single data without array", singleProductData)

    return (
        <div className='product-detail-section'>
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
                <div className="product-details">
                    <ProductDescp></ProductDescp>
                </div>
            </div>
            <FashionSale></FashionSale>
        </div>
    );
};

export default ProductDetail;