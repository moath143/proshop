import React from 'react'
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './screens/home'
import Login from './screens/login';
import Wisthlist from './screens/wishlist';
import Cart from './screens/cart';
import ForgotPassword from './screens/forgotPassword';
import Signup from './screens/signup';


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
      </Routes>
    </div>
  );


}

export default App;
