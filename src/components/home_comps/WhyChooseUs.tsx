import { whychooseus } from '../../constants';

export const WhyChooseUs = () => {
    return (
        <div className='flex flex-col sm:py-16 lg:px-24 px-6 py-6 bg-[#f0f8ff]'>
            <h2 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center mb-6'>Why Choose MaxRepair</h2>
            <div className='flex flex-wrap flex-row justify-center w-full'>
                {whychooseus.map(({ id, title, description, logo: Icon}) => 
                    <div key={id} className='text-black sm:w-[20%] w-[100%] rounded-[20px] sm:m-4 m-0 sm:mb-4 mb-4 flex flex-col items-center'>
                        <div className='flex justify-start flex-col p-2 rounded-[20px] w-full'>
                            <div className='flex items-center justify-center sm:ml-0 -ml-6'>
                                <Icon className='fill-[#4e97d1] text-4xl'/>
                                <h2 className='font-poppins font-semibold text-[18px] leading-[23px] text-center'>{title}</h2>
                            </div>
                            <p className='font-poppins font-light text-[18px] leading-[30.8px] max-w-[470px] sm:mt-5 mt-0 text-center'>{description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};