import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

let slidesToShow=6
function SampleNextArrow({onClick,slideCount,currentSlide}) {
  
    return (
     <>{currentSlide!==slideCount-slidesToShow&&<div className='text-[25px] rounded-[50%] bg-[#FF5733] h-[40px] w-[40px] absolute text-white top-[100px] flex justify-center items-center cursor-pointer right-[-25px]' onClick={onClick}>
      <BsArrowLeft/>
       
       
      </div>}
      </> 
    );
  }
  
  
  function SamplePrevArrow({onClick,currentSlide}) {
    
    return (
     <> {currentSlide!==0&&<div className='text-[25px] rounded-[50%] bg-[#FF5733] h-[40px] w-[40px] absolute text-white top-[100px] flex justify-center items-center cursor-pointer left-[-56px]' onClick={onClick}>
        
        <BsArrowRight />
      </div>}
      </>
    );
  }


const MonarchSlider = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: slidesToShow,
      slidesToScroll: 3,
       
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    var settings2={
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: slidesToShow,
      slidesToScroll: 3,
      arrows:false,
       
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  
    }

    const state = useSelector((state) =>state.list)

    useEffect(()=>{
      const content= state.list.map((s)=><>
      <a href={`https://brandatoz.com/search/category/${s}`} rel="noopener noreferrer">
      <h1 className='text-black w-[180px] md:w-[200px]  text-center font-bold'>{s}</h1>


        </a>
      

      </>)

    },[])
    
    return (
        <div className='px-[80px] mt-[-430px] md:mt-[90px] '>
          <div className='w-[100%] h-[300px] md:[300px]'>
          <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
          <a href={'https://brandatoz.com/search/category/Babies%20&%20Toys'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
          
              <a href={'https://brandatoz.com/search/category/Electronic%20Devices'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/Health%20&%20Beauty'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/Babies%20&%20Toys'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/Home%20&%20lifestyle'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={"https://brandatoz.com/search/category/Men's%20Fashion"}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/Motorbikes%20and%20Automobiles'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/Pets'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/Sports%20&%20Outdoor'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/TV%20&%20Home%20Appliances'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={'https://brandatoz.com/search/category/Watches%20&%20Accessories'}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
              <a href={"https://brandatoz.com/search/category/Women's%20Fashion"}  rel="noopener noreferrer">
          <div className='h-[250px] w-[200px]'>
            <img className='h-[250px] w-[180px] md:w-[200px] rounded-[16px]' src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
          </div>

              </a>
        </Slider>
        <Slider {...settings2} asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
      >
          
         
        
        
            {
                state.list.map((s)=><>
                <a href={`https://brandatoz.com/search/category/${s}`} rel="noopener noreferrer">
                <h1 className='text-black w-[180px] md:w-[200px]  text-center font-bold'>{s}</h1>


                  </a>
                

                </>)
            }

        
        
          
        </Slider>
          </div>
        
        </div>
    );
};

export default MonarchSlider;