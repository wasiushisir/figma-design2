import React from 'react';

const Login = () => {
    return (
        <div>
        <h1 className='text-3xl font-semibold my-[24px]'>Welcome Back</h1>
  <div className='flex flex-col  space-y-6 '>
    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" placeholder='Phone No/Email'/>
    
    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" placeholder='Password' />
    
    <button type='button' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-7/12 '>Sign In</button>
   
    


  </div>
      
  </div>
    );
};

export default Login;