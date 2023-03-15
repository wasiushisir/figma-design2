import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import ProductsForYou from './ProductsForYou/ProductsForYou';
// import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import FeaturedCategories from '../src/FeaturedCategories/FeaturedCategories.js';
import FlashSale from './FlashSale/FlashSale';
import HelloMall from './HelloMall/HelloMall';
import TopSellerrs from './TopSellers/TopSellerrs';
import Slider from './Slider/Slide';
import Box from './Box/Box';
import MonarchSlider from './MonarchSlider/MonarchSlider';
import {
  Routes,
  Route

} from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Modal from './Modal/Modal';
import { useState } from 'react';
import ShopType from './ShopType/ShopType';
import Seller from './Seller/Seller';
import SingleProductDetails from './ProductsForYou/SingleProductDetails/SingleProductDetails';
import Shop from './Shop/Shop';
import AllProducts from './Shop/AllProducts/AllProducts';
import Profile from './Shop/Profile/Profile';



function App() {
  const [toggle, setToggle] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);





  return (
    <div>
      <div className="overflow-x-hidden ">



        <Header modalOpen={modalOpen} setModalOpen={setModalOpen}></Header>





        <Routes>

          <Route path='/' element={<Home></Home>}>
            <Route path='login' element={<Login ></Login>}></Route>
            <Route path='signup' element={<SignUp></SignUp>}></Route>
          </Route>
          <Route path='/shoptype/:name' element={<ShopType></ShopType>}></Route>
          
          <Route path='details/:id' element={<SingleProductDetails></SingleProductDetails>}></Route>

          <Route path='/shop' element={<Shop></Shop>}>
          <Route path='seller/:id' element={<Seller></Seller>}></Route>
          <Route path='products' element={<AllProducts></AllProducts>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>


          </Route>



        </Routes>
        <Footer></Footer>


      </div>
    </div>
  );
}

export default App;
