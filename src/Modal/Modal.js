import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import {
  
  Route,
  NavLink,
  Routes,
  Outlet
 
} from "react-router-dom";
import Login from '../Login/Login';
import Home from '../Home/Home';








const Modal = ({setOpenModal}) => {
  
  
  let activeClassName = "underline";
    return (
//      <div>
//          <div class="modal fade fixed top-[45px] right-[25px] md:left-[600px]   hidden w-[300px] h-full outline-none overflow-x-hidden overflow-y-auto"
//   id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog relative w-auto pointer-events-none">
//     <div
//       class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
//       <div
//         class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
       
//         <button type="button"
//           class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
//           data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body relative px-[35px] pb-[24px]">
//         <div className='flex justify-start items-center text-[20px] text-[#2B333B] space-x-6 font-medium'>
       
//         <NavLink to="/login"
//         className={({ isActive }) =>
//               isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
//             }>
      
//           <p>Login</p>
//       </NavLink>
          
//           <NavLink to="/signup" className={({ isActive }) =>
//               isActive ? 'border-b-2 border-[#DE3D3A]' : undefined
//             }>
//           <p>Signup</p>
//       </NavLink>

//         </div>
        
//           <Routes>
       
          
//           <Route path='/login' element={<Login toggle={toggle} setToggle={setToggle} ></Login>}></Route>
//           <Route path='/signup' element={<SignUp></SignUp>}></Route>
          

        
//       </Routes>
        
        
        
//       </div>

//     </div>
//   </div>
//   <Outlet/>
// </div>
//      </div>

<div>

<div className="w-full h-screen fixed  flex justify-center z-10  bg-gray-500/50">
      <div className="h-[650px] w-[350px] border-[12px] bg-white flex flex-col p-[25px] mt-[50px]   border-white">
        <div className=" border-none text-[25px]  cursor-pointer flex justify-end">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="flex justify-start items-center text-[20px] text-[#2B333B] space-x-6 font-medium">
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


        <Routes>
       
          
         <Route path='/login' element={<Login setOpenModal={setOpenModal}></Login>}></Route>
          <Route path='/signup' element={<SignUp setOpenModal={setOpenModal}></SignUp>}></Route>
          

        
      </Routes>
        
       
      </div>
    </div>

</div>
    );
};

export default Modal;