import { ourservices } from '../../constants';
import { ServiceCard } from '../common/ServiceCard';

export const OurServices = () => {

    return (
        <div className='flex flex-col sm:px-24 px-6 sm:py-16 py-6'>
            <h2 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center mb-6'>Our Services</h2>
            <div className='flex flex-wrap justify-center w-full'>
                {ourservices.map((service, index) =>
                    <ServiceCard key={service.id} service={service} index={index} totalServices={ourservices.length} />
                )}
            </div>
        </div>
    )
};