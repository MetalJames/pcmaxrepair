import { Link } from "react-router-dom";
import { MdArrowRightAlt } from 'react-icons/md';
import { IconType } from "react-icons";

type ServiceCardProps = {
    service: {
        id: string;
        title: string;
        description: string;
        Icon: IconType;
        link: string;
    };
    index: number;
    totalServices: number;
}

export const ServiceCard = ({ service, index, totalServices }: ServiceCardProps) => {

    const { id, title, description, Icon, link } = service;

    return (
        <div key={id} className={`bg-[#f0f8ff] text-black rounded-[20px] sm:m-4 m-0 sm:mb-4 mb-8
                                sm:hover:-translate-y-2 shadow-sm shadow-black sm:hover:shadow-lg sm:hover:shadow-[blue] 
                                ease-in-out duration-300
                                ${index === totalServices - 1 ? 'mb-0' : 'mb-8'}`}>
            <Link to={link}>
                    <div className='flex flex-col justify-between sm:px-10 px-6 sm:py-12 py-8 rounded-[20px] max-w-[370px] h-full'>
                        <div>
                            <div className='flex text-6xl pb-6 justify-center items-center' >
                                <Icon className='w-[100px] h-[100px] p-4 bg-[#4e97d1] fill-[white] rounded-[20%]'/>
                            </div>
                            <h2 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-center'>{title}</h2>
                            <p className='font-poppins font-light text-[18px] leading-[30.8px] max-w-[470px] mt-5'>{description}</p>
                        </div>
                        <div className='flex justify-end items-center pt-4'>
                            <p className='text-[14px]'>READ MORE</p><MdArrowRightAlt />
                        </div>
                    </div>
            </Link>
        </div>
    )
};