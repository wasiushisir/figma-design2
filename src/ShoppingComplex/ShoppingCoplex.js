import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterShop, shopList, shoppingComplexList } from '../actions/shoppingComplexAction';
import { SHOP_FILTER } from '../constants/shoppingComplexConstant';

const ShoppingCoplex = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state?.shoppingComplex?.shoppingComplex)
    console.log(state)
    const navigate=useNavigate()

    useEffect(() => {
        dispatch(shoppingComplexList())
        dispatch(shopList())

    }, [])


    const shopCard=(name)=>{

        dispatch(filterShop(name))
        navigate(`/shoptype/${name}`)
        
        

    }
    // const n=['Aysha_Shopping_Complex','Online_Shops']
    return (
        <div className='mt-[80px] md:pl-[80px] md:pr-[170px] '>
            <h1 className='md:text-[39px] text-[25px] font-semibold text-center md:text-justify'>WE ARE AT</h1>
            <div className='mt-[40px] pl-[20px] pr-[17px] md:pl-[0px] md:pr-[0px] grid grid-cols-2 md:grid-cols-5 gap-y-8'>

               {state.map((s)=><><div onClick={()=>shopCard(s?.name)} className='cursor-pointer  w-[152px]  md:w-[212px] md:h-[268px] rounded-[8px] bg-[#FFFFFF] '>
                  
                  <img className='h-[196px] md:w-[196px] w-[136px] rounded-[8px] mx-[8px] mt-[8px]' src='' alt="" />

                     
                    <div className='mx-[16px] mt-[16px] '>
                        <p className='text-base font-normal '>{s.name}</p>




                    </div>

                </div></>) }

            </div>

        </div>
    );
};

export default ShoppingCoplex;