import React from 'react';
import Banner from '../Banner/Banner';
import FashionSale from '../FashionSale/FashionSale';
import Header from '../Header/Header';
import NavBar from '../Header/NavBar';
import Products from '../Products/Products';
const Home = ({loggedInUser}) => {
    return (
        <div>
            <Header loggedInUser={loggedInUser}></Header>
            <NavBar></NavBar>
            <Banner></Banner>
            <Products></Products>
            <FashionSale></FashionSale>
        </div>
    );
};

export default Home;