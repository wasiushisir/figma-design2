import React from 'react';
import SignUp from '../SignUp/SignUp';
import {
  
  Route,
  NavLink,
  Routes,
  Outlet
 
} from "react-router-dom";
import Login from '../Login/Login';
import Home from '../Home/Home';







const Modal = () => {
  let activeClassName = "underline";
    return (
        <div class="modal fade fixed top-[45px] right-[25px] md:left-[600px]   hidden w-[300px] h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        {/* <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5> */}
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative px-[35px] pb-[24px]">
        <div className='flex justify-start items-center text-[20px] text-[#2B333B] space-x-6 font-medium'>
       
        <NavLink to="/login"
        className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
            }>
      
          <p>Login</p>
      </NavLink>
          
          <NavLink to="/signup" className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
            }>
          <p>Signup</p>
      </NavLink>

        </div>
        {/* <h1 className='text-3xl font-semibold my-[24px]'>Create Account</h1>
        <div className='flex flex-col  space-y-6 '>
          <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" placeholder='Phone No/Email'/>
          <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" placeholder='Username'/>
          <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" placeholder='Password' />
          <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" placeholder='Confirm Password' />
          <button type='button' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-7/12 '>Sign up</button>
         
          


        </div> */}
         {/* <SignUp></SignUp>
         <Login></Login> */}
          <Routes>
       
          
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          

        
      </Routes>
        
        
        
        {/* <Routes>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        </Routes> */}
      </div>

    </div>
  </div>
  <Outlet/>
</div>
    );
};

export default Modal;