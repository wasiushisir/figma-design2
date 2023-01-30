import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import ProductsForYou from './ProductsForYou/ProductsForYou';
// import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
 import FeaturedCategories from '../src/FeaturedCategories/FeaturedCategories.js';
import FlashSale from './FlashSale/FlashSale';
import HelloMall from './HelloMall/HelloMall';
import TopSellerrs from './TopSellers/TopSellerrs';


function App() {
  return (
    <div className="overflow-x-hidden">
      <Header></Header>
      
      <Banner></Banner>
      <FlashSale></FlashSale>
      <FeaturedCategories></FeaturedCategories>
      <HelloMall></HelloMall>
      <TopSellerrs></TopSellerrs>
    
      <ProductsForYou></ProductsForYou>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
