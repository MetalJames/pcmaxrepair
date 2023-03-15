import React from 'react';
import AboutUsImg from "../assets/Max_Repair_web-13.jpg";

const AboutUs = () => {
    return (
        <div className='sm:py-16 py-6 sm:px-24 px-10'>
            <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center sm:pb-10 pb-2'>About Us</h1>
            <div className='flex sm:flex-row flex-col-reverse flex-1 justify-between items-center'>
                <p className='font-poppins font-normal text-[18px] leading-[30.8px] max-w-[420px] mt-5'>
                    Hi there. We are MaxRepair, an Electronics repair store in Port
                    Credit, Mississauga. Our Google review will tell you about us much
                    better than we can! But in any case, we are the friendly repair store
                    that can help you at any time you need this the most. We can take care
                    of your gadgets in no time. With 20+ years of experience, we can
                    provide you with the best solution possible out there. We are located
                    at 106 Lakeshore Road East, Mississauga, ON, L5G 1E3, so don't wait and
                    bring us your device! If you have any questions - just give us a call
                    at (905) 517-9610!
                </p>
                <img src={AboutUsImg} alt='about us maxrepair img' className='sm:w-[50%] sm:h-[50%] w-[100%] h-[100%] sm:pb-0 pb-6'/>
            </div>
        </div>
    )
}

export default AboutUs