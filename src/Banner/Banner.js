import { ArrowDownIcon, ArrowUpIcon, CheckIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { CiWallet} from 'react-icons/ci';
import { FaMapMarkerAlt,FaPaperPlane} from 'react-icons/fa';
import { AiTwotoneStar} from 'react-icons/ai';
import { BsFillTagFill} from 'react-icons/bs';
import React from 'react';
import FlashSale from '../FlashSale/FlashSale';
import HelloMall from '../HelloMall/HelloMall';

import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import TopSellerrs from '../TopSellers/TopSellerrs';
import img1 from '../image/scenery1-1604951752791-bb724dd11721.jpg'
import img2 from '../image/sceneryRight-1669038045897-3869080bf458.jpg'
import Modal from '../Modal/Modal';


const Banner = () => {
    return (
       <div>
        <Modal></Modal>
         <div className='pl-[80px] pr-[60px] md:pl-[80px] md:pr-[52px] md:mt-[100px] mt-[34px] md:[60px]'>
            <div className='md:flex justify-between items-center space-y-2 md:space-y-0'>
                <div className='flex justify-between h-[40px] md:mt-[5px] border border-[#5C738A] rounded-[8px]  bg-[#FFFFFF] w-[230px]   md:w-[760px] mt-[20px]'>
                    <div className=''>
                        <input className=' text-[#5C738A] font-medium w-[200px]  my-[8px] ml-[16px] outline-none ' type="text" placeholder='Search' />
                    </div>
                    <div className='bg-[#DE3D3A] w-[40px] flex justify-center items-center rounded-r-[8px]'>
                        <MagnifyingGlassIcon className="md:h-6 h-4 w-4 md:w-6 text-[#FFFFFF] " />



                    </div>

                </div>

                <div className='h-[40px] flex justify-between items-center rounded-[8px] bg-[#DE3D3A] px-[15px] w-[230px] text-white font-semibold'>
                    <p>Farmgate</p>
                    <ChevronDownIcon className="h-4 w-4" />


                </div>
                <div className='h-[40px] flex justify-center items-center rounded-[8px] bg-[#DE3D3A]  w-[230px] text-white font-semibold'>
                    <p>Advance Search</p>
                    


                </div>
                

            </div>


            {/* <div className='flex justify-between items-center mt-[25px] space-x-4  md:space-x-0 '>
                <img className='w-[300px] md:w-[892px] md:h-[383px] rounded-[16px]' src={img1} alt="" />
                <img className='w-[60px] h-[90px] md:w-[300px] md:h-[383px] mr-[15px] rounded-[16px]' src={img2} alt="" /> 
                
                
            </div> */}



{/* <div
  id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative mt-[25px] space-x-4  md:space-x-0 mx-[-15px] md:mx-[0px] z-0"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block w-[230px] md:w-full md:h-[383px] rounded-[16px]"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-[230px] md:w-full md:h-[383px] rounded-[16px]"
        alt="Camera"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-[230px] md:w-full md:h-[383px] rounded-[16px]"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


           


            {/* skip banner image */}

            {/* <div className='mt-[60px] md:flex justify-between items-center md:space-x-6'>
                    <div className='w-[200px] md:w-[271px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px]'>

                        <div className=' md:mt-[29px] ml-[29px]  '>
                        <FaMapMarkerAlt style={{ color: '#5C738A',fill: '#5C738A' }} size={30}/>

                        </div>

                        <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
                           
                            <h1 className='text-[20px]  text-[#010203]  font-bold'>Physical Shops</h1>

                        </div>

                        <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>A a aliquam odio sit sed leo, tellus morbi. Bibendum.</p>


                    </div>
                    <div className='w-[200px] md:w-[271px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px] mt-[35px]  md:mt-[0px]'>

                        <div className='mt-[29px] ml-[29px]'>
                            <FaPaperPlane size={30} style={{ color: '#5C738A', fill: '#5C738A' }} />
                        </div>

                        <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
                           
                            <h1 className='text-[20px]  text-[#010203]  font-bold'>Online Shops</h1>

                        </div>
                        <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>Feugiat turpis eget nisi risus. Nullam convallis velit.</p>



                    </div>
                    <div className='w-[200px] md:w-[271px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px] mt-[35px]  md:mt-[0px]'>
                        <div className='mt-[29px] ml-[29px] h-[31px] w-[31px] bg-[#DE3D3A] border border-solid border-[#4C5967] rounded-[8px] flex justify-center items-center'>

                            <AiTwotoneStar size={15} style={{ color: '#FFFFFF', fill: '#FFFFFF' }}  />


                        </div>

                        <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
                           
                            <h1 className='text-[20px]  text-[#010203]  font-bold'>Hello Mall</h1>

                        </div>

                        <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>Feugiat turpis eget nisi risus. Nullam convallis velit ullamcorper.</p>


                    </div>

                    <div className='w-[200px] md:w-[271px] h-[261px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px] mt-[35px]  md:mt-[0px]' >

                        <div className='mt-[29px] ml-[29px]'>
                        <BsFillTagFill style={{ color: '#5C738A',fill: '#5C738A' }} size={30}/>

                        </div>


                        <div className='mx-[24px] mt-[27px] w-[92px] h-[64px]'>
                           
                           <h1 className='text-[20px]  text-[#010203]  font-bold'>Brands</h1>

                       </div>

                       <p className='mt-[16px] mx-[24px] text-sm text-[#4C5967]'>Montes, dictumst tristique est lectus egestas pharetra.</p>






                    </div>



                </div> */}
                
                
               
                
                
                
                


        </div>
       </div>
    );
};

export default Banner;