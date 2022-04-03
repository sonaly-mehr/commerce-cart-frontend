import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../App';

const ProductDescp = () => {
    const navigate = useNavigate();
    const { quantity, setQuantity } = useContext(productContext);
    const { singleProductData, setSingleProductData } = useContext(productContext);
    const {addToCart, setAddToCart} = useContext(productContext);
    // const { loggedInUser, setLoggedInUser } = useContext(productContext);

    if (quantity <= 0) {
        setQuantity(1);
    }
    const addToCartHandler = (productId) => {
        navigate(`/cart/${productId}`)
    }

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = (data) => {
    //     const userData = {
    //         user: loggedInUser._id,
    //         cartItems: {
    //             product: data.product,
    //             quantity: data.quantity,
    //             price: data.price
    //         }
    //     };
    //     console.log("user data from product desc", userData);
    //     const url = `http://localhost:4000/api/user/cart/addtocart`;


    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userData)
    //     })
    //     .then(res => res.json())
    //     .then(success => {
    //         if (success) {
    //             alert('Item added to Cart!')
    //         }

    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     })
    //     // navigate('/signin')
    //     // console.log(data)
    // };
    return (
        <>
            {
                singleProductData.map((pd) =>
                    <div className="row">

                        <div className="col-md-6">
                            <div className="product-img">
                                <img src={pd.productPictures[0].img} alt="" />
                                <div className="product-sub-image">
                                    <img src={pd.productPictures[0].img} alt="" />
                                    <img src={pd.productPictures[1].img} alt="" />
                                    <img src={pd.productPictures[2].img} alt="" />
                                    <img src={pd.productPictures[3].img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="details-content">
                                <form action="">
                                    <h4>{pd.name}</h4>
                                    {/* <Reviews pd={product}></Reviews> */}
                                    <h6>Brand: <span>{pd.brand}</span></h6>
                                    <h5 className='status'>
                                        Status: {pd.quantity <= 0 ? <span className='outofstock'>Out Of Stock</span> : <span className='instock'>In Stock</span>}
                                    </h5>
                                    <h3>Price: ${pd.price}</h3>
                                    <p>{pd.description}</p>
                                    <p className='quantity'>Quantity</p>

                                    <div className="component-quantity-input">
                                        <span style={{ cursor: 'pointer' }} onClick={() => setQuantity(quantity - 1)}>-</span>
                                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                        <span style={{ cursor: 'pointer' }} onClick={() => setQuantity(quantity + 1)}>+</span>
                                    </div>
                                    <div><button type="submit" onClick={() => {addToCartHandler(pd._id); setAddToCart(addToCart+1)}}>Add To Cart</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
};

export default ProductDescp;