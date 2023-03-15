import React from 'react';
import AboutUsImg from "../assets/Max_Repair_web-13.jpg";

const AboutUs = () => {
    return (
        <div className='flex md:flex-row flex-col sm:py-16 py-6 px-24'>
            <div className='flex-1 flex justify-center items-start flex-col'>
                <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>About Us</h1>
                <p className='font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
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
                {/* <div className='py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite bg-black rounded-[10px] outline-none mt-10'>Learn More</div> */}
            </div>
            <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
                <img src={AboutUsImg} alt='about us maxrepair img' className='w-[100%] h-[auto]'/>
            </div>
        </div>
    )
}

export default AboutUs