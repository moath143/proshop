import React from "react";
import Categories from "../../components/categories";
import Products from "../../components/products";
import TopRateProducts from "../../components/topRateProducts";
import Navbars from './../../components/navbar'
import Slider from './../../components/slider'
import "./style.css";

const Home = () => {
  return (
    <>
      <Navbars />
      <Slider />
      <Categories />
      <Products />
      <TopRateProducts />
    </>
  );
};

export default Home;
