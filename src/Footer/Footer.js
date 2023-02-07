import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='w-screen md:h-[356px] bg-[#010203] mt-[20px]'>
            <div className='px-[64px] pt-[80px]'>
                <div className='space-y-14 pb-[30px] md:pb-[0px] md:space-y-0 md:flex justify-between items-start text-[#FFFFFF]'>
                    <div>
                        <h1 className='text-[20px] md:text-[25px]'>Menu</h1>
                        <div className='mt-[20px] md:mt-[40px] text-[13px] space-y-2'>
                            <p>Privacy policy</p>
                            <p>Purchasing and delivery policy</p>
                            <p>Terms and condition</p>
                            <p>Career</p>

                        </div>

                    </div>
                    <div>
                        <h1 className='text-[20px] md:text-[25px]'>Customar Care</h1>
                        <div className='mt-[20px] md:mt-[40px] text-[13px] space-y-2'>
                            <p>Help center</p>
                            <p>How to buy</p>
                            <p>Return & Refund</p>
                            <p>FAQ</p>

                        </div>

                    </div>
                    <div>
                        <h1 className='text-[20px] md:text-[25px]'>Contact Us</h1>
                        <div className='mt-[20px] md:mt-[40px] text-[13px] space-y-2'>
                            <p>255 West Bashundhara RA, Dhaka</p>
                            <p>+88 01987654321</p>
                            <p>dokanvai@gmail.com</p>


                        </div>

                    </div>
                    <div>
                        <h1 className='text-[20px] md:text-[25px]'>Give us Feedback</h1>
                        <h1 className='text-[#FFFFFF] text-[20px] md:text-[25px] mt-[16px] md:mt-[0px]'>Follow Us</h1>

                        <div className='mt-[22px] flex justify-start items-center space-x-6'>

                            <FaFacebookF size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />
                            <RiInstagramFill size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />
                            <FaTwitter size={20} style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />


                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;