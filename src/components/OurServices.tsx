import React from 'react';
import { ourservices } from '../constants';

const OurServices = () => {
    return (
        <div className='flex flex-col sm:py-16 py-6 px-24'>
            <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center'>Our Services</h1>
            <div className='flex flex-wrap justify-center w-full'>
                {ourservices.map(({ id, title, description, logo: Icon}) => 
                <div key={id} className='bg-[#f0f8ff] text-black rounded-[20px] m-4'>
                    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]'>
                        <div className='flex text-6xl pb-6 justify-center items-center' >
                            <Icon className='w-[100px] h-[100px] p-4 bg-[#4e97d1] fill-[white] rounded-[20%]'/>
                        </div>
                        <h2 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-center'>{title}</h2>
                        <p className='font-poppins font-light text-[18px] leading-[30.8px] max-w-[470px] mt-5'>{description}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default OurServices