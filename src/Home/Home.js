import React from 'react';
import Slider from '../Slider/Slide';
import Banner from '../Banner/Banner';
import Box from '../Box/Box';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import HelloMall from '../HelloMall/HelloMall';
import MonarchSlider from '../MonarchSlider/MonarchSlider';
import ProductsForYou from '../ProductsForYou/ProductsForYou';
import TopSellerrs from '../TopSellers/TopSellerrs';
import {
    Routes,
    Route
   
  } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* <Routes>
                <Route path='/' element={<><Slider></Slider>
      <MonarchSlider></MonarchSlider>
      <Banner></Banner>
      <Box></Box>
      
      <FeaturedCategories></FeaturedCategories>
      <HelloMall></HelloMall>
      <TopSellerrs></TopSellerrs>
    
      <ProductsForYou></ProductsForYou></>}></Route>
            </Routes> */}
         
     <Slider></Slider>
      <MonarchSlider></MonarchSlider>
      <Banner></Banner>
      <Box></Box>
      
      <FeaturedCategories></FeaturedCategories>
      <HelloMall></HelloMall>
      <TopSellerrs></TopSellerrs>
    
      <ProductsForYou></ProductsForYou>
            
        </div>
    );
};

export default Home;