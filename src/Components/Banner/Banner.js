import React, { useContext, useState } from 'react';
import './Banner.css';
import bannerImg from '../../banner-img.png'
import { productContext } from '../../App';

const Banner = () => {
    const {searchProduct, setSearchProduct} = useContext(productContext);
    // const bannerSection = () => {
    //     if(searchProduct!== ''){

    //     }
    // }
    // const [showBanner, setShowBanner] = useState(searchProduct);
    return (
        <div>
      {(() => {
        if (searchProduct === '') {
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
          )
        }  
      })()}
    </div>
        
    );
};

export default Banner;