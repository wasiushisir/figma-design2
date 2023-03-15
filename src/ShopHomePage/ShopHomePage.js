import React, { useEffect } from 'react';
import { AiFillCaretDown, AiFillLike, AiOutlineLike, AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { RiMessengerFill } from 'react-icons/ri';
import { GiShoppingBag } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterShop } from '../actions/shoppingComplexAction';
import { createShopHomePAge } from '../actions/shopHomePageAction';

const ShopHomePage = ({id}) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(createShopHomePAge(id))
    },[dispatch,id])
   
    const state = useSelector((state)=>state)
    return (
        <div>
            <div className='md:px-[220px] md:mt-[20px]'>
                {
                    state?.user?.user?.map((s) => <>
                        <img className='w-full md:h-[400px]' src={`https://brandatoz.com${s?.seller?.sellerbannerimg.split(",")[0]}`}  alt="" />
                        <div className='px-[10px] pt-[20px] '>
                            <div className='flex justify-between items-center md:items-end'>
                                <div className='flex justify-start items-center space-x-2.5 md:space-x-8'>
                                    <div className='h-[101px] w-[101px] md:h-[148px] md:w-[150px] md:mt-[-35px]   rounded-full border-4 border-blue-800'>
                                        <img className='h-[90px] w-[83px] md:h-[138px] md:w-[132px]  rounded-full ml-[6px] mt-[3.5px]' src={`https://brandatoz.com${s?.seller?.logo.split(",")[0]}`} alt="" />
                                       

                                    </div>
                                    <div className=''>
                                    <p className='text-white text-xl w-[150px] md:w-max  md:text-3xl md:font-bold'>{s?.seller?.shopName}</p>
                                    <div className='flex justify-start items-center space-x-1 '>
                                    {/* <svg class="w-6 h-6  text-yellow-400  ml-[-7px] mr-[-5px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                                    {/* <p className='text-slate-400 font-bold '>4.9</p> */}
                                    {/* <p className='text-slate-400 font-bold'>(116)</p> */}
                                    {/* <div className='text-white h-[20px] w-[20px] rounded-full flex justify-center items-center bg-[#40444b]'>
                                        <p className='text-black'>i</p>
                                    </div> */}
                                    {/* <p className='text-slate-400 font-bold '>{s?.seller?.description}</p> */}

                                    </div>

                                    </div>

                                </div>

                                {/* <div className=' '>
                                <AiOutlineLike className='text-white md:hidden' size={45} />
                                <p className='text-slate-400 font-bold ml-[5px] md:hidden'>like</p>

                                <div className='hidden md:flex md:flex-col md:justify-center md:items-center  '>
                                <div className=' hidden md:flex md:justify-between md:items-center md:px-[82px] md:py-[8px] md: bg-blue-700 text-white md:rounded-[4px] md:space-x-2'>
                                <RiMessengerFill className='text-white' size={20} />
                                <p>Send message</p>


                                </div>
                                 <p className='hidden md:block md:text-slate-300 md:text-sm '> Hi! Please let us know how we can help.</p> 

                                </div>
                               



                                </div> */}

                               

                            </div>
                            {/* <p className='hidden md:block md:text-slate-400 '> Hi! Please let us know how we can help.</p> */}


                            {/* <div className='flex  justify-between items-center my-[20px] md:hidden'>
                                <div>
                                    <div className=' flex justify-between items-center px-[55px] py-[8px] bg-blue-700 space-x-1 text-white rounded-[4px]'>
                                       
                                        <GiShoppingBag className='' size={20} />
                                        <p>View shop</p>

                                    </div>

                                </div>
                                <div className='px-[15px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                <RiMessengerFill className='text-white' size={20} />

                                </div>
                                <div className='px-[20px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                <BsThreeDots className='text-white' size={20} />

                                </div>

                            </div> */}


                            {/* <div className='flex justify-start items-center space-x-5 md:hidden'>
                                <div className='flex justify-start items-center'>
                                    <img className='h-[50px] w-[50px] rounded-full z-10' src='' alt="" />
                                    <img className='h-[50px] w-[50px] rounded-full ml-[-6px] z-0' src='' alt="" />

                                </div>

                                <div>
                                    <p className='text-slate-400 font-bold'>Mahmud,Riana and 50880 others like this</p>

                                </div>

                            </div> */}
                           
                            

                        </div>


                        {/* <div className='hidden md:flex justify-between items-center md:px-[10px] md:mt-[15px]' >
                            <div className='flex justify-start items-center space-x-1   md:space-x-5 text-slate-400 font-semibold'>
                                <p>Home</p>
                                <p>Events</p>
                                <p>Photos</p>
                                <p>Groups</p>
                                <div className='flex justify-center items-center space-x-1'>
                                <p>More</p>
                                <AiFillCaretDown size={13}/>
                                </div>

                            </div>
                            <div className='flex justify-center items-center space-x-2'>
                                <div className='px-[20px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px] space-x-1 text-blue-600'>
                                <AiFillLike className=' ' size={23} />
                                <p className='font-semibold'>Like</p>
            
                                </div>
                                <div className='px-[20px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                <AiOutlineSearch className='text-white ' size={23} />
                                </div>
                                <div className='px-[20px] py-[8px] bg-[#454545] flex justify-center items-center rounded-[4px]'>
                                <BsThreeDots className='text-white ' size={23} />
                                </div>


                            </div>

                        </div> */}

                        {/* <div className='flex justify-between items-center px-[15px] mt-[15px] text-slate-400 font-bold md:hidden'>
                            <p>Home</p>
                            <p>Groups</p>
                            <p>Posts</p>
                            <p>Reviews</p>
                            <p>Videos</p>
                            <p>Photos</p>

                        </div> */}
                        
                    </>)
                }

                
                
            </div>

        </div>
    );
};

export default ShopHomePage;