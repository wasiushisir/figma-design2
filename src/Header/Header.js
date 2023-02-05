import React, { useEffect, useState } from 'react';
import 'tw-elements';

import { Bars3Icon, CameraIcon, ChevronDownIcon, ClockIcon, FolderMinusIcon, HeartIcon, MicrophoneIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { AiFillHome } from 'react-icons/ai';
import { DocumentTextIcon, ChatBubbleOvalLeftEllipsisIcon, BellIcon, ShoppingCartIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { VscHome } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { createList } from '../actions/sidbarAction';




const Header = () => {

  const dispatch = useDispatch()
  const state = useSelector((state) =>state.list)
   console.log(state);

  useEffect(() => {
    dispatch(createList())
  }, [])



  const [nav, setNav] = useState(false)
  const [nav2, setNav2] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className='w-screen h-[72px] fixed z-10 bg-[#FFFFFF]  drop-shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>

      <div className='px-[24px] flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <div onClick={handleNav} className='w-[35px] h-[35px] bg-[#F0F5FA] flex justify-center items-center rounded-full cursor-pointer'>
            <Bars3BottomLeftIcon className="h-6 w-6 " />

          </div>
          <h1 className='text-[18px] font-bold pl-[16px] md:text-[25px]'>DOKAN BHAI</h1>

        </div>

        <div className='hidden   md:flex space-x-10'>
          <AiFillHome style={{ color: '#000000', fill: '#000000' }} size={25} />
          <DocumentTextIcon className="h-6 w-6 " />
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 " />
          <BellIcon className="h-6 w-6 " />
          <ShoppingCartIcon className="h-6 w-6 " />
          <button type="button" class="px-6
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
          </button>
          {/* modal */}

          {/* <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        Modal body text goes here.
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
        <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">Save changes</button>
      </div>
    </div>
  </div>
</div> */}





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
                    <p className=''>{s.name}</p>


                  </a>



                </div>

                {/* <ChevronDownIcon className="h-4 w-4" /> */}




              </div>
              {/* <div className='flex justify-between items-center'>
  <div className='flex justify-start items-center space-x-3 text-xl'>
  <MicrophoneIcon  className="h-6 w-6" />
  <p className=''>Electronics</p>

  </div>

<ChevronDownIcon  className="h-6 w-6" />




</div>
<div className='flex justify-between items-center'>
  <div className='flex justify-start items-center space-x-3 text-xl'>
  <CameraIcon  className="h-6 w-6" />
  <p className=''>Digital Devices</p>

  </div>

<ChevronDownIcon  className="h-6 w-6" />




</div>
<div className='flex justify-between items-center'>
  <div className='flex justify-start items-center space-x-3 text-xl'>
  <HeartIcon  className="h-6 w-6" />
  <p className=''>Health</p>

  </div>

<ChevronDownIcon  className="h-6 w-6" />




</div>
<div className='flex justify-between items-center'>
  <div className='flex justify-start items-center space-x-3 text-xl'>
  <ClockIcon className="h-6 w-6" />
  <p className=''>Watch & Accessories</p>

  </div>

<ChevronDownIcon  className="h-6 w-6" />




</div>
<div className='flex justify-between items-center'>
  <div className='flex justify-start items-center space-x-3 text-xl'>
  <TicketIcon className="h-6 w-6" />
  <p className=''>Pet Accessories</p>

  </div>

<ChevronDownIcon  className="h-6 w-6" />




</div> */}

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
        <div className='px-6 py-1 text-center  bg-[#DE3D3A] rounded-[8px] text-white my-[8px]'>
          profile
        </div>

      </div>




    </div>
  );
};

export default Header;