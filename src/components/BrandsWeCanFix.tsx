import React from 'react';
import { brandswecanfix } from '../constants';

const BrandsWeCanFix = () => {
    return (
        <div className='flex flex-col justify-center items-center sm:px-24 px-10 sm:py-16 py-6 bg-[#f0f8ff]'>
            <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center pb-4'>Brands we can fix</h1>
            <div className='flex flex-row flex-wrap justify-center sm:w-2/3 w-full sm:px-10 p-0 ]'>
            {brandswecanfix.map((brandwecanfix) => (
                <div key={brandwecanfix.id} className='flex justify-center items-center sm:w-[25%] w-[45%] sm:h-[150px] h-[100px] p-2'>
                    <img src={brandwecanfix.logo} alt={brandwecanfix.title} className='w-[150px]' />
                </div>
            ))}
            </div>
        </div>
    )
}

export default BrandsWeCanFix