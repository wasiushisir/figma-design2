import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getProducts } from '../actions/productsAction';
import { createShopHomePAge } from '../actions/shopHomePageAction';

const ShopType = () => {
    const state = useSelector((state) => state?.shoppingComplex?.FilteredShop)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const shopClick = (id) => {
        // dispatch(createShopHomePAge(id))
        // dispatch(getProducts(id))
         navigate(`/shop/seller/${id}`)
       



    }


    const [filterFloor,setFilterFloor]=useState(state)


    const filterItem=(floor)=>{
        const updatedFloor=state.filter((curElem)=>{
            return curElem?.seller?.floorNo===floor
        })


        setFilterFloor(updatedFloor)

    }




    return (
        <div className='mt-[80px] md:pl-[80px] md:pr-[90px] '>
            <h1 className='md:text-[39px] text-[25px] font-semibold text-center md:text-justify'>WE ARE AT</h1>

            <div className='md:flex justify-between items-start '>


            <div className=''>
                    <h1 className='text-[21px] font-bold my-[15px]'>Floor No</h1>
                    <div className='space-y-3'>
                    <p onClick={()=>setFilterFloor(state)} className='text-[20px] cursor-pointer text-orange-500'>All Shops</p>
                    <p onClick={()=>filterItem('1')} className='text-[20px] cursor-pointer'>Floor No 1</p>
                    <p onClick={()=>filterItem('2')} className='text-[20px] cursor-pointer'>Floor No 2</p>
                    <p onClick={()=>filterItem('3')} className='text-[20px] cursor-pointer'>Floor No 3</p>
                    </div>
                </div>





                <div className='mt-[40px] pl-[20px] pr-[17px] md:pl-[0px] md:pr-[0px] grid grid-cols-2 md:grid-cols-5 gap-5 '>
                    {
                        filterFloor.map((s) => <><div onClick={() => shopClick(s._id)} className='cursor-pointer  w-[152px]  md:w-[218px] md:h-max rounded-[8px] bg-[#FFFFFF] '>
                            <img className='h-[196px] md:w-[196px] w-[136px] rounded-[8px] mx-[8px] mt-[8px]' src={`https://brandatoz.com${s?.seller?.logo.split(",")[0]}`} alt="" />
                            <div className='mx-[16px] mt-[16px] space-y-2 '>
                                <p className='text-base font-bold text-[21px]'>{s?.seller?.shopName}</p>
                                <p className='text-base font-normal text-[16px]'>Shop Address:{s?.seller?.shopAddress.slice(0, 15)}...</p>
                                <p className='text-base font-bold text-[20px]'>Floor No:{s?.seller?.floorNo}</p>




                            </div>

                        </div></>)
                    }

                </div>


               

            </div>




        </div>
    );
};

export default ShopType;