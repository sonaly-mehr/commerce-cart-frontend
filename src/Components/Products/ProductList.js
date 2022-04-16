import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductList = ({ pd }) => {
    const navigate = useNavigate();
    const handleProduct = (productId) => {
        navigate(`/product/${productId}`)
    }
    return (

        <div className='col-md-3 prouct-hover'>
            <div className="single-product">
                <img src={pd.productPictures[0].img} alt="" />
                <div className="product-desp">
                    <h4 onClick={() => handleProduct(pd._id)} style={{ cursor: 'pointer' }}>{pd.name}</h4>
                    <span className='price'>${pd.price}</span>
                    <button>Add To Cart</button><br />

                    <div className='review-section'>
                        {
                            pd.rating >= 1 ? <BsStarFill className="review-star" />
                                : pd.rating >= 0.5 ? <BsStarHalf className="review-star" />
                                    : <BsStar className="review-star" />
                        }
                        {
                            pd.rating >= 2 ? <BsStarFill className="review-star" />
                                : pd.rating >= 1.5 ? <BsStarHalf className="review-star" />
                                    : <BsStar className="review-star" />
                        }
                        {
                            pd.rating >= 3 ? <BsStarFill className="review-star" />
                                : pd.rating >= 2.5 ? <BsStarHalf className="review-star" />
                                    : <BsStar className="review-star" />
                        }
                        {
                            pd.rating >= 4 ? <BsStarFill className="review-star" />
                                : pd.rating >= 3.5 ? <BsStarHalf className="review-star" />
                                    : <BsStar className="review-star" />
                        }
                        {
                            pd.rating >= 5 ? <BsStarFill className="review-star" />
                                : pd.rating >= 4.5 ? <BsStarHalf className="review-star" />
                                    : <BsStar className="review-star" />
                        }
                        <span style={{ marginLeft: '10px' }}>10 Reviews</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductList;