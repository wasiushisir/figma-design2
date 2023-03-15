import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Seller from '../Seller/Seller';
import './Shop.css'

const Shop = () => {
    const id = useSelector((state) => state.user.id)
    return (
        <div className='single-shop-container'>

        {/* <!-- Navbar --> */}

        <div className='shop-nav'>
            <NavLink
                to={`/shop/seller/${id}`}
                className={({ isActive }) =>
                    isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                }
            >
                Homepage
            </NavLink>
            <NavLink
                to="/shop/products"
                className={({ isActive }) =>
                    isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                }
            >
                All Products
            </NavLink>
            <NavLink
                to="/shop/profile"
                className={({ isActive }) =>
                    isActive ? 'shop-nav-item-active' : 'shop-nav-item'
                }
            >
                Profile
            </NavLink>
            {/* <Link to={'/shop'} className='shop-nav-item'>Homepage</Link>
            <Link className='shop-nav-item' to={'/shop/products'}>All Products</Link>
            <Link className='shop-nav-item' to={'/shop/profile'}>Profile</Link> */}
        </div>

        {/* <Routes>
            <Route path='/shop/seller/id'element={<Seller></Seller>}></Route>

        </Routes> */}



        <Outlet></Outlet>

    </div>
    );
};

export default Shop;