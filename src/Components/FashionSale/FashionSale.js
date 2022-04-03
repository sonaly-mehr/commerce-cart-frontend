import React from 'react';
import './FashionSale.css'
import sale1 from '../../sale1.png';
import sale2 from '../../sale2.png';
import sale3 from '../../sale3.png';

const FashionSale = () => {
    return (
        <div className='sale-section'>
            <div className="row">
                <div className="col-md-4">
                    <div className="single-sale">
                        <img src={sale1} alt="" />
                        <div className="sale-content">
                            <p>Man's Collectons</p>
                            <h4>Summer travel<br /> collection</h4>
                            <button>Discover Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="single-sale">
                        <img src={sale2} alt="" />
                        <div className="sale-content">
                            <p>Bag Collectons</p>
                            <h4>Awesome Bag<br /> 2020</h4>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="single-sale">
                        <img src={sale3} alt="" />
                        <div className="sale-content">
                            <p>Flash Sale</p>
                            <h4>Mid Season <br />Up to 40% Off</h4>
                            <button>Discover Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FashionSale;