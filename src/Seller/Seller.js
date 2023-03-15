import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import ShopHomePage from '../ShopHomePage/ShopHomePage';

const Seller = () => {
    const {id}=useParams()
    return (
        <div className='bg-black h-max'>
            <ShopHomePage id={id}></ShopHomePage>
            <Products id={id}></Products>
            
        </div>
    );
};

export default Seller;