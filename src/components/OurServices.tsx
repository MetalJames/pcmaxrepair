import React from 'react';
import { Link } from "react-router-dom";
import { ourservices } from '../constants';
import { MdArrowRightAlt } from 'react-icons/md';

const OurServices = () => {
    return (
        <div className='flex flex-col sm:px-24 px-10 sm:py-16 py-6'>
            <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center'>Our Services</h1>
            <div className='flex flex-wrap justify-center w-full'>
                {ourservices.map(({ id, title, description, logo: Icon, link}) => 
                <div key={id} className='bg-[#f0f8ff] text-black rounded-[20px] m-4 hover:-translate-y-2 shadow-sm shadow-black hover:shadow-lg hover:shadow-[blue] ease-in-out duration-300'>
                    <Link key={id} to={`${link}`}>
                        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]'>
                            <div className='flex text-6xl pb-6 justify-center items-center' >
                                <Icon className='w-[100px] h-[100px] p-4 bg-[#4e97d1] fill-[white] rounded-[20%]'/>
                            </div>
                            <h2 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-center'>{title}</h2>
                            <p className='font-poppins font-light text-[18px] leading-[30.8px] max-w-[470px] mt-5'>{description}</p>
                            <div className='flex items-center pt-4'>
                                <h4>READ MORE</h4><MdArrowRightAlt />
                            </div>
                        </div>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}

export default OurServices