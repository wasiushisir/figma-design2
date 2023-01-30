import React from 'react';
import img1 from '../image/tech1-1597733336794-12d05021d510.jpg'
import img2 from '../image/tech2-1550745165-9bc0b252726f.jpg'
import img3 from '../image/tech3-1504610926078-a1611febcad3.jpg'
import img4 from '../image/ac1-1569388330292-79cc1ec67270.jpg'
import img5 from '../image/ac2-1670963024940-6439eac892a9.jpg'
import img6 from '../image/ac3-1559563458-527698bf5295.jpg'
import img7 from '../image/jw1-1651160670627-2896ddf7822f.jpg'
import img8 from '../image/jw2-1617038220319-276d3cfab638.jpg'
import img9 from '../image/jw3-1608042314453-ae338d80c427.jpg'

const FeaturedCategories = () => {
    return (
        <div className='mt-[80px] px-[35px] md:pl-[80px] md:pr-[170px]'>
            <h1 className='text-[39px] font-semibold text-center md:text-justify'>Featured Categories</h1>
            <div className='mt-[40px] grid grid-cols-2 md:grid-cols-3  gap-y-8'>
                <div className='w-[145px] h-max md:w-[374px] md:h-[193px] rounded-[8px] md:bg-[#FFFFFF]'>
                    <div className='mt-[16px] px-[10px]'>
                        <p className='text-[25px] text-[#2B333B] hidden md:block'>Tech</p>
                        <div className='mt-[17px]   md:space-y-0 flex justify-between items-center'>
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img1} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img2} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img3} alt="" />
                            


                        </div>
                        <p className='text-[18px] mt-[13px] text-[#2B333B] block md:hidden '>Tech</p>

                    </div>

                </div>
                <div className='w-[145px] h-max md:w-[374px] md:h-[193px] rounded-[8px] md:bg-[#FFFFFF]'>
                    <div className='mt-[16px] px-[10px]'>
                        <p className='text-[25px] text-[#2B333B] hidden md:block'>Jwellery</p>

                        <div className='mt-[17px]  md:space-y-0 flex justify-between items-center'>
                        <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img4} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img5} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img6} alt="" />
                            


                        </div>

                        <p className='text-[18px] mt-[13px] text-[#2B333B] block md:hidden '>Jwellery</p>



                    </div>

                </div>
                <div className='w-[145px] h-max md:w-[374px] md:h-[193px] rounded-[8px] md:bg-[#FFFFFF]'>
                    <div className='mt-[17px] px-[10px]'>
                        <p className='text-[25px] text-[#2B333B] hidden md:block'>Accesories</p>
                        <div className='mt-[17px]  md:space-y-0 flex justify-between items-center'>
                        <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img1} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img2} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img3} alt="" />
                            


                        </div>

                        <p className='text-[18px] mt-[13px] text-[#2B333B] block md:hidden '>Accesories</p>

                    </div>

                </div>
                <div className='w-[145px] h-max md:w-[374px] md:h-[193px] rounded-[8px] md:bg-[#FFFFFF]'>
                    <div className='mt-[17px] px-[10px]'>
                        <p className='text-[25px] text-[#2B333B] hidden md:block'>Electric</p>
                        <div className='mt-[17px]  md:space-y-0 flex justify-between items-center'>
                        <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img4} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img5} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img6} alt="" />
                            


                        </div>
                        <p className='text-[18px] mt-[13px] text-[#2B333B] block md:hidden '>Electric</p>

                    </div>

                </div>
                <div className='w-[145px] h-max md:w-[374px] md:h-[193px] rounded-[8px] md:bg-[#FFFFFF]'>
                    <div className='mt-[17px] px-[10px]'>
                        <p className='text-[25px] text-[#2B333B] hidden md:block'>Mobile</p>
                        <div className='mt-[17px]  md:space-y-0 flex justify-between items-center'>
                        <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img4} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img5} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img6} alt="" />
                            


                        </div>

                        <p className='text-[18px] mt-[13px] text-[#2B333B] block md:hidden '>Mobile</p>


                    </div>

                </div>
                <div className='w-[145px] h-max md:w-[374px] md:h-[193px] rounded-[8px] md:bg-[#FFFFFF]'>
                    <div className='mt-[17px] px-[10px]'>
                        <p className='text-[25px] text-[#2B333B] hidden md:block'>Cloth</p>
                        <div className='mt-[17px]  md:space-y-0 flex justify-between items-center'>
                        <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img4} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img5} alt="" />
                            <img className='w-[40px] h-[40px] md:h-[108px] md:w-[108px] rounded-[8px]' src={img6} alt="" />
                            


                        </div>
                        <p className='text-[18px] mt-[13px] text-[#2B333B] block md:hidden '>Cloth</p>

                    </div>

                </div>


            </div>
            
        </div>
    );
};

export default FeaturedCategories;