import React from 'react';
import Products from '../Products/Products';
import ShopHomePage from '../ShopHomePage/ShopHomePage';

const Seller = () => {
    return (
        <div className='bg-black h-max'>
            <ShopHomePage></ShopHomePage>
            <Products></Products>
            
        </div>
    );
};

export default Seller;