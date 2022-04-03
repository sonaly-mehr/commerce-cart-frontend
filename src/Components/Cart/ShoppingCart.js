import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Cart.css';
import { MdDelete } from 'react-icons/md';
import { productContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const {singleProductData, setSingleProductData} = useContext(productContext);
    const {quantity, setQuantity} = useContext(productContext);
    const [removeCart, setRemoveCart] = useState([]);
    const {addToCart, setAddToCart} = useContext(productContext);
    const navigate = useNavigate();

    if (quantity <= 0) {
        setQuantity(1);
    }
    const deleteShoppingCart = (id)=> {
        const deleteCard = singleProductData.filter((cart)=> cart._id !== id);
        setRemoveCart(deleteCard);
        if(removeCart){
            alert('Item deleted from cart')
            setSingleProductData([]);
        }
    }
    const checkOut = () => {
        navigate(`/cart/chehckout`)
    }
    const removeFromCart = () => {
            setAddToCart(0)
    }

    return (
        <div className='shopping-cart-section'>
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
                <div className="shopping-cart">
                    <h4>Shopping Cart</h4>
                    <p><span>{singleProductData.length}</span> items in your cart</p>

                    <div className="shopping-cart-content">
                        <table className='cart-table'>
                            <tr className='cart-header'>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                            {
                                singleProductData.map((product) =>
                                <tr className='product-details-wrap'>
                                <td>
                                <div className="poduct-wrap">
                                        <img src={product.productPictures[0].img} alt="" />
                                        <div className="name-brand">
                                            <h6>{product.name}</h6>
                                            <p>Brand: <span>{product.brand}</span></p>
                                        </div>
                                    </div>
                                </td>
                                <td><h6 className='price cart-price'>${product.price}</h6></td>
                                <td>
                                <form action="">
                                    <div className="component-quantity-input cart-quantity-input">
                                        <span style={{cursor: 'pointer'}} onClick={() => setQuantity(quantity-1)}>-</span>
                                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                        <span style={{cursor: 'pointer'}} onClick={() => setQuantity(quantity+1)}>+</span>
                                    </div>
                                </form>
                                </td>
                                <td>
                                <div className="product-delete" onClick={()=> {deleteShoppingCart(product._id); removeFromCart()}}>
                                <MdDelete className='delete-icon'/>
                                </div>
                                </td>
                            </tr>
                                )
                            }
                            {/* {
                                singleProductData.map((product)=> 
                                <tr className='product-details-wrap'>
                                <td>
                                <div className="poduct-wrap">
                                        <img src={product.productPictures[0].img} alt="" />
                                        <div className="name-brand">
                                            <h6>{product.name}</h6>
                                            <p>Brand: <span>{product.brand}</span></p>
                                        </div>
                                    </div>
                                </td>
                                <td><h6 className='price cart-price'>${product.price}</h6></td>
                                <td>
                                <form action="">
                                    <div className="component-quantity-input cart-quantity-input">
                                        <span style={{cursor: 'pointer'}} onClick={() => setQuantity(quantity-1)}>-</span>
                                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                        <span style={{cursor: 'pointer'}} onClick={() => setQuantity(quantity+1)}>+</span>
                                    </div>
                                </form>
                                </td>
                                <td>
                                <div className="product-delete" onClick={()=> deleteShoppingCart(product._id)}>
                                <MdDelete className='delete-icon'/>
                                </div>
                                </td>
                            </tr>
                                )
                            } */}
                            
                        </table>
                    </div>
                    
                    <div className="cart-subtotal">
                        {
                            singleProductData.map((pd)=> <>
                            <h4>Subtotal({singleProductData.length}): $ {quantity* pd.price}</h4>
                            </>)
                        }
                        <button onClick={checkOut}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;