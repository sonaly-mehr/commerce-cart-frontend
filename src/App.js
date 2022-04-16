import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer/Footer';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ShoppingCart from './Components/Cart/ShoppingCart';
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import AddService from './Components/Admin/AddService';
import Users from './Components/Admin/Users';
import ProductRecords from './Components/Admin/ProductRecords';
import ReviewRecords from './Components/Admin/ReviewRecords';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import OrderHistory from './Components/UserDashboard/OrderHistory';
import ManageProfile from './Components/UserDashboard/ManageProfile';
import { createContext, useEffect, useState } from 'react';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute';
import Payment from './Components/MakePayment.js/Payment';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import AdminSignin from './Components/Auth/AdminSignin';
import UpdateProduct from './Components/Admin/UpdateProduct';
import AdminSingup from './Components/Auth/AdminSingup';
export const productContext = createContext();
function App() {
  const [productData, setProductData] = useState([]);
  const [singleProductData, setSingleProductData] = useState([]);
  const [list, setList] = useState([]);
  const [updateProduct, setUpdateProduct] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [adminLoggedIn, setAdminLoggedIn] = useState({});
  const [shippingData, setShippingData] = useState(null);
  const [addToCart, setAddToCart] = useState(0);

  const value = {
    productData, setProductData,
    list, setList,
    quantity, setQuantity,
    loggedInUser, setLoggedInUser,
    searchProduct, setSearchProduct,
    adminLoggedIn, setAdminLoggedIn,
    singleProductData, setSingleProductData,
    shippingData, setShippingData,
    orderData, setOrderData,
    addToCart, setAddToCart,
    updateProduct, setUpdateProduct
  };

  return (
    <productContext.Provider
      value={value}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<AddService />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/product-list" element={<ProductRecords />} />
          <Route path="/admin/product/edit/:pdId" element={<UpdateProduct />} />
          <Route path="/admin/reviews" element={<ReviewRecords />} />
          <Route path="/cart/:productId" element={<ShoppingCart />} />
          <Route
            path='/cart/chehckout'
            element={(() => {
              if (loggedInUser && loggedInUser._id) {
                return <Checkout />
              } else {
                return <Signin />
              }
            })()}
          />
          <Route path="/cart/place-order/:productId" element={<PlaceOrder />} />
          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/signup" element={<AdminSingup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/order-history" element={<OrderHistory />} />
          <Route path="/user/profile/update/:userId" element={<ManageProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </productContext.Provider>
  );
}

export default App;
