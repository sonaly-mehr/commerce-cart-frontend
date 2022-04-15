import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import './Product.css'
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { productContext } from '../../App';

const Products = () => {

    const [ProductArray, setProductArray] = useState([]);
    const [productss, setProductss] = useState(ProductArray);
    const {list, setList} = useContext(productContext);
    const { singleProductData, setSingleProductData } = useContext(productContext);

    useEffect(() => {
        fetch('http://localhost:4000/api/product/list')
            .then(res => res.json())
            .then(data => setProductArray(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:4000/api/product/list')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    const allCategories = ['all', ...new Set(ProductArray.map((item) => item.category))];

    const filterItems = (category) => {
        if (category === 'all') {
            setProductss(ProductArray)
            return;
        }
        const newItems = ProductArray.filter((item) => item.category === category);
        setProductss(newItems);
    };

    const navigate = useNavigate();
    const handleProduct = (id) => {
        navigate(`/product/${id}`)
    }

    const addToCartButton = (productId) => {
        navigate(`/cart/${productId}`)
    }
    // const singleCart = singleProductData.map((cart)=> {
    //     return <button onClick={()=>addToCartButton(cart._id)}>Add To Cart</button>
    // })
    return (
        <div className='product-section'>
            <div className="container">
                <h2>Exclusive Products</h2>
                <div className="product-filter-button">
                    <Category allCategories={allCategories} filterItems={filterItems} setList={setList}></Category>
                </div>
                <div className="product-wrap">
                        <div className="row">
                            {
                                list.slice(0, 8).map((item) =>
                                    <div className='col-md-3 prouct-hover'>
                                        <div className="single-product">
                                            <img src={item.productPictures[0].img} alt="" />
                                            {/* {console.log(pd.productPictures[0].img)} */}
                                            <div className="product-desp">
                                                <h4 onClick={() => handleProduct(item._id)} style={{ cursor: 'pointer' }}>{item.name}</h4>
                                                <span className='price'>${item.price}</span>
                                                <button>Add To Cart</button>
                                                <br />
                                                {/* <Reviews item={item}></Reviews> */}
                                                <div className='review-section'>
                                                    {
                                                        item.rating >= 1 ? <BsStarFill className="review-star" />
                                                            : item.rating >= 0.5 ? <BsStarHalf className="review-star" />
                                                                : <BsStar className="review-star" />
                                                    }
                                                    {
                                                        item.rating >= 2 ? <BsStarFill className="review-star" />
                                                            : item.rating >= 1.5 ? <BsStarHalf className="review-star" />
                                                                : <BsStar className="review-star" />
                                                    }
                                                    {
                                                        item.rating >= 3 ? <BsStarFill className="review-star" />
                                                            : item.rating >= 2.5 ? <BsStarHalf className="review-star" />
                                                                : <BsStar className="review-star" />
                                                    }
                                                    {
                                                        item.rating >= 4 ? <BsStarFill className="review-star" />
                                                            : item.rating >= 3.5 ? <BsStarHalf className="review-star" />
                                                                : <BsStar className="review-star" />
                                                    }
                                                    {
                                                        item.rating >= 5 ? <BsStarFill className="review-star" />
                                                            : item.rating >= 4.5 ? <BsStarHalf className="review-star" />
                                                                : <BsStar className="review-star" />
                                                    }
                                                    <span style={{ marginLeft: '10px' }}>10 Reviews</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                                
                            }
                            {
                                productss.map((pd) => <ProductList pd={pd}></ProductList>)
                            }
                        </div>
                    <button onClick={(e) => { setProductss(ProductArray); setList([]); e.target.style.display = "none"; }} className="show-bttn">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Products;