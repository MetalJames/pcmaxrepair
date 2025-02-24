import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { aboutus } from '../constants';

export const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='flex flex-col justify-between sm:px-24 px-10 py-8'>
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
                    <h1 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center md:pb-10 pb-4'>{about.title}</h1>
                    <div className='flex md:flex-row flex-col-reverse flex-1 justify-around items-center'>
                        <p className='font-poppins font-normal text-[18px] leading-[30.8px] max-w-[420px] mt-5'>{about.description}</p>
                        <img src={about.img} alt={about.title} className='sm:w-[60%] sm:h-[60%] md:w-1/2 md:h-1/2 w-[100%] h-[100%] sm:pb-0 pb-6'/>
                    </div>
                </div>
            ))}
        </div>
    )
};