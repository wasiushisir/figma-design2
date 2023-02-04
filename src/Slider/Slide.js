import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const Slide = () => {
 

  const slides=[
    {
      url:'https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
    },
    {
      url:'https://mdbcdn.b-cdn.net/img/new/slides/042.webp'
    },
    {
      url:'https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
    }
  ]

  const [currentIndex,setCurrentIndex]=useState(0)
  const prevButton=()=>{
    const firstSlide=currentIndex===0
    const newIndex=firstSlide?slides.length-1: currentIndex-1
    setCurrentIndex(newIndex)
  }

  const nextButton=()=>{
    const lastSlide=currentIndex===slides.length-1;
    const newIndex=lastSlide?0:currentIndex+1;
    setCurrentIndex(newIndex)
  }

  const gotoSlide=(slideIndex)=>{
    setCurrentIndex(slideIndex)

  }
  



    return (
      <div className=' h-[780px] w-full m-auto  z-0 mt-[40px] relative'>

        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full md:h-full h-[300px]  rounded-2xl bg-center bg-cover duration-500'>

        </div>
        

       { currentIndex!==0&&<div className='absolute md:top-[50%] -translate-x-0 md:translate-y-[-50%] translate-y-[-345%] left-5 text-2xl rounded-full p-2 bg-white text-black/20 cursor-pointer'>
          
          <BsChevronCompactLeft size={30} onClick={prevButton}/>
          
        </div>}
       {currentIndex!==slides.length-1&& <div className='absolute top-[50%] -translate-x-0 md:translate-y-[-50%] translate-y-[-545%] right-5 text-2xl rounded-full p-2 bg-white text-black/20 cursor-pointer'>
        <BsChevronCompactRight size={30} onClick={nextButton}/>

        </div>}


        <div className='flex justify-center mt-[-40px]'>
         {slides.map((slide,slideIndex)=>(<div key={slideIndex} onClick={()=>gotoSlide(slideIndex)}>
          <RxDotFilled className='text-3xl cursor-pointer'/>


         </div>))}

        </div>
        
         
      </div>

    
    );
};

export default Slide;