import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { aboutus } from '../constants';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className='flex flex-col justify-between sm:px-24 px-10 sm:py-4 py-2'>
            <Helmet>
                <title>
                    Max Repair - iPhone, Cell Phone and Laptop Repair Store in Port
                    Credit Mississauga
                </title>
                <meta
                    name="description"
                    content="About PCMaxRepair Store in Port Credit Mississauga"
                />
            </Helmet>
            { aboutus.map((about) => (
                <div key={about.id} className='pb-8'>
                    <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center sm:pb-10 pb-2'>{about.title}</h1>
                    <div className='flex sm:flex-row flex-col-reverse flex-1 justify-between items-center'>
                        <p className='font-poppins font-normal text-[18px] leading-[30.8px] max-w-[420px] mt-5'>{about.description}</p>
                        <img src={about.img} alt={about.title} className='sm:w-[50%] sm:h-[50%] w-[100%] h-[100%] sm:pb-0 pb-6'/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutUs