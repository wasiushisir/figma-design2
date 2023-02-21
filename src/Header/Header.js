import React, { useEffect, useState } from 'react';
import 'tw-elements';

import { Bars3Icon, CameraIcon, ChevronDownIcon, ClockIcon, FolderMinusIcon, HeartIcon, MicrophoneIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { AiFillHome } from 'react-icons/ai';
import { DocumentTextIcon, ChatBubbleOvalLeftEllipsisIcon, BellIcon, ShoppingCartIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { VscHome } from 'react-icons/vsc';
import {MdArrowDropDown} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { createList } from '../actions/sidbarAction';
import {

  Route,
  Link,
  Routes,
  Navigate,
  useNavigate

} from "react-router-dom";
import { signout } from '../actions/authAction';




const Header = () => {

  const dispatch = useDispatch()
  const state = useSelector((state) => state?.list?.list)
  console.log(state);

  useEffect(() => {
    dispatch(createList())
  }, [])



  const [nav, setNav] = useState(false)
  const [nav2, setNav2] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  // const userInfo = useSelector((state) => state?.userSignin?.userSignin?.userInfo?.name);
  // const userInfo2 = useSelector((state) => state?.userRegister?.userSignin.userInfo?.name);
  // const {userInfoRegister,loading1} = useSelector((state) => state?.userRegister);
  const { userInfo, loading2 } = useSelector((state) => state?.userSignin);
  const { userInfoRegister, loading1 } = useSelector((state) => state?.userRegister);
  const navigate=useNavigate()

  const signOutHandler=()=>{
    dispatch(signout())
   
    
  

    
  }





  if (loading1 || loading2) {
    return <div class="flex items-center justify-center">
    <div
      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
  </div>
  }



  return (
    <div className='w-screen h-[72px] fixed z-10 bg-[#FFFFFF]  drop-shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>

      <div className='px-[24px] flex justify-between items-center w-full h-full'>
        <div className='flex items-center justify-start md:space-x-6 space-x-12'>
          <div onClick={handleNav} className='w-[35px] h-[35px] bg-[#F0F5FA] flex justify-center items-center rounded-full cursor-pointer'>
            <Bars3BottomLeftIcon className="h-6 w-6 " />

          </div>
          {/* <h1 className='text-[18px] font-bold pl-[16px] md:text-[25px]'>DOKAN BHAI</h1> */}
          <Link to='/'><div className='flex flex-col justify-between items-center'>
            <img className='h-[40px] w-[150px]' src="https://brandatoz.com/images/atoz.png" alt="" />
            <p className='text-[14px]'>Easy Shopping</p>
          </div></Link>

        </div>

        <div className='hidden   md:flex space-x-10'>
          <AiFillHome style={{ color: '#000000', fill: '#000000' }} size={25} />
          <DocumentTextIcon className="h-6 w-6 " />
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 " />
          <BellIcon className="h-6 w-6 " />
          <ShoppingCartIcon className="h-6 w-6 " />
          {(userInfo && <> <div className='flex justify-center items-center'> <h1 className='text-[25px] font-medium '>{userInfo?.name}</h1> <div><MdArrowDropDown className='peer' size={30}/>  <div class="hidden  peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a onClick={signOutHandler} class="px-2 py-3 hover:bg-gray-200 mt-[50px]" href="#">Sign Out</a>
            
            
        </div></div> </div> </>) || (userInfoRegister && <><div className='flex justify-center items-center'><h1 className='text-[25px] font-medium '>{userInfoRegister?.name}</h1> <div><MdArrowDropDown className='' size={30}/> <div class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a onClick={signOutHandler}  class="px-5 py-3 hover:bg-gray-200 mt-[50px]" href="#">Sign Out</a>
            
        </div></div> </div></>) || <Link to='/login'><button type="button" class="px-6
            py-2.5
            bg-[#D1DEEB]
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]
            transition
            duration-150
            ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Log in
          </button></Link>}

          {/* modal */}

       





        </div>

        <div onClick={() => setNav2(!nav2)} className='md:hidden'>

          {
            !nav2 ? <Bars3Icon className="h-6 w-6 text-black" /> : <XMarkIcon className="h-6 w-6 text-black" />

          }


        </div>




      </div>


      <div className={nav ? 'fixed left-0 top-[74px] w-full h-screen bg-black/80' : ''}>
        <div className={nav ? 'fixed left-0 top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF]  ease-in-out duration-300' : 'fixed left-[-100%] top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF] ease-in duration-500'}>

          <div className='mt-[20px] px-[40px]'>
            <div className='flex justify-between items-center text-[#010203]'>
              <h1 className=' text-[20px] md:text-[24px]'>Categories</h1>
              <XMarkIcon onClick={handleNav} className="h-4 w-4 md:h-6 md:w-6 cursor-pointer" />



            </div>

            {state.map((s) => <><div className='flex flex-col mt-[25px] space-y-1 '>

              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center space-x-3 text-sm'>
                  {/* <FolderMinusIcon className="h-4 w-4" /> */}

                  <a href={`https://brandatoz.com/search/category/${s}`} rel="noopener noreferrer">
                    <p className=''>{s}</p>


                  </a>



                </div>

                




              </div>
             

            </div></>)}

          </div>

        </div>

      </div>



      <div className={!nav2 ? 'hidden' : 'absolute w-full bg-[#FFFFFF]  px-4 md:hidden'}>

        <VscHome className='border-b-2 border-zinc-300 w-full my-[8px]' size={25} />
        <DocumentTextIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px] " />
        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px]   " />
        <BellIcon className="h-6 w-full  border-b-2 border-zinc-300  my-[8px]" />
        <ShoppingCartIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px] " />
       { (userInfo|| userInfoRegister)? <a onClick={signOutHandler}  className=" " href="#"> <button className=' w-full px-6 py-2.5
            bg-[#D1DEEB]
          
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B] hover:bg-gray-200 md:mt-[50px]'>SignOut</button> </a>  :<Link to='/login' ><button type="button" class="px-6
            py-2.5
            bg-[#D1DEEB]
            w-full
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]
            transition
            duration-150
            ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Log in
        </button></Link>}
      </div>




    </div>
  );
};

export default Header;