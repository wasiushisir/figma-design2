import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../actions/authAction';


const Login = () => {
  const navigate = useNavigate()
  
  const {userInfo,loading2} = useSelector((state) => state?.userSignin);
  // const data = JSON.parse(localStorage.getItem('userInfo'))
  // console.log(data)

  useEffect(()=>{
    if(userInfo){
      navigate('/')

    }
  },[userInfo,navigate])



  // console.log(userInfo)
  
  // useEffect(()=>{
  //   if(userInfo){
  //    navigate('/')
  //   console.log('oops')
  //   }
  
  // },[userInfo,navigate])
  const [formData, setFormData] = useState({

    phnNo: '',
    password: '',


  })
  const { phnNo, password } = formData
  const onChange = (e) => {

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))



  }

  const phnRef = useRef(null)
  const passwordRef = useRef(null)
  const dispatch=useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()



    const userData = { phnNo, password }
    console.log(userData)

    dispatch(signin(userData));



    phnRef.current.value = ""
    passwordRef.current.value = ""


  }


  if(loading2){
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
    <div>
      <h1 className='text-3xl font-semibold my-[24px]'>Welcome Back</h1>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col  space-y-6 '>
          <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={phnNo} name='phnNo' ref={phnRef} placeholder='Phone No' onChange={onChange} />

          <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={password} name='password' ref={passwordRef} placeholder='Password' onChange={onChange} />

          <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-7/12 '>Sign In</button>




        </div>
      </form>

    </div>
  );
};

export default Login;