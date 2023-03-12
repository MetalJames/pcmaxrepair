import React from 'react';
import { whychooseus } from '../constants';

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col sm:py-16 py-6 px-24'>
            <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center'>Why Choose MaxRepair</h1>
            <div className='flex flex-wrap sm:justify-start justify-center w-full'>
                {whychooseus.map((element) => 
                <div key={element.id} className='bg-stone-200 text-black rounded-[20px] m-4'>
                    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]'>
                        <h2 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-center'>{element.title}</h2>
                        <p className='font-poppins font-light text-[18px] leading-[30.8px] max-w-[470px] mt-5'>{element.description}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default WhyChooseUs