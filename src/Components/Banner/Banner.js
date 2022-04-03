import React from 'react';
import './Banner.css';
import bannerImg from '../../banner-img.png'

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className="container">
                <div className="banner-wrap">
            <div className="banner-content">
                <h4>UP TO 50% OFF</h4>
                <h1>On All Products</h1>
                <p>Maboriosam in a nesciung eget magnae dapibus disting tloctio in the find it pereri odiy maboriosm.</p>
                <button>Shop Now</button>
            </div>
            <div className="banner-img">
                <img src={bannerImg} />
            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;