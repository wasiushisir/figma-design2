import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsFillTagFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Box = () => {
    return (
        <div className='mt-[60px] md:[0px] md:pl-[80px] md:pr-[80px] md:mt-[100px] grid grid-cols-2 md:grid-cols-4 gap-y-8'>
        <div className='w-[170px] md:w-[271px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px]'>

            <div className=' md:mt-[29px] ml-[29px]  '>
            <FaMapMarkerAlt style={{ color: '#5C738A',fill: '#5C738A' }} size={30}/>

            </div>

            <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
               
                <h1 className='text-[20px]  text-[#010203]  font-bold'>Physical Shops</h1>

            </div>

            <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>A a aliquam odio sit sed leo, tellus morbi. Bibendum.</p>


        </div>
        <div className='w-[170px] md:w-[271px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px]   md:mt-[0px]'>

            <div className='md:mt-[29px] ml-[29px]'>
                <FaPaperPlane size={30} style={{ color: '#5C738A', fill: '#5C738A' }} />
            </div>

            <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
               
                <h1 className='text-[20px]  text-[#010203]  font-bold'>Online Shops</h1>

            </div>
            <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>Feugiat turpis eget nisi risus. Nullam convallis velit.</p>



        </div>
        <div className='w-[170px] md:w-[261px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px]   md:mt-[0px]'>
            <div className='md:mt-[29px] ml-[29px] h-[31px] w-[31px] bg-[#DE3D3A] border border-solid border-[#4C5967] rounded-[8px] flex justify-center items-center'>

                <AiTwotoneStar size={15} style={{ color: '#FFFFFF', fill: '#FFFFFF' }}  />


            </div>

            <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
               
                <h1 className='text-[20px]  text-[#010203]  font-bold'>Hello Mall</h1>

            </div>

            <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>Feugiat turpis eget nisi risus. Nullam convallis velit ullamcorper.</p>


        </div>

        <div className='w-[170px] md:w-[261px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px]   md:mt-[0px]' >

            <div className='md:mt-[29px] ml-[29px]'>
            <BsFillTagFill style={{ color: '#5C738A',fill: '#5C738A' }} size={30}/>

            </div>


            <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
               
               <h1 className='text-[20px]  text-[#010203]  font-bold'>Brands</h1>

           </div>

           <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>Montes, dictumst tristique est lectus egestas pharetra.</p>






        </div>



    </div>
    );
};

export default Box;