import React from 'react'
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './screens/home'
import Login from './screens/login';
import Wisthlist from './screens/wishlist';
import Cart from './screens/cart';
import ForgotPassword from './screens/forgotPassword';
import Signup from './screens/signup';
import EmptyCart from "./screens/emptyCart";
import Profile from './screens/profile';
import Products from './screens/products';
import CreateProduct from './screens/createProduct';
import SearchResult from './screens/searchResult';
import Payment from './screens/payment';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wisthlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/empty-cart" element={<EmptyCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );


}

export default App;
