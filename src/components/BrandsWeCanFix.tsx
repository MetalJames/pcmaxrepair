import React from 'react';
import { brandswecanfix } from '../constants';

const BrandsWeCanFix = () => {
    return (
        <div className='flex flex-col justify-center items-center my-4 bg-[#f0f8ff]'>
            <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center pb-4'>Brands we can fix</h1>
            <div className='flex flex-row flex-wrap justify-between w-2/3 px-10 ]'>
            {brandswecanfix.map((brandwecanfix) => (
                <div key={brandwecanfix.id} className='flex justify-center items-center w-[25%] h-[150px]'>
                    <img src={brandwecanfix.logo} alt={brandwecanfix.title} className='w-[150px]' />
                </div>
            ))}
            </div>
        </div>
    )
}

export default BrandsWeCanFix