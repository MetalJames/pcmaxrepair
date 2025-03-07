import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { repairs } from '../constants/repairs';
import { MdCheckCircle, MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Services = () => {

    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div>
            {repairs.filter(repair => repair.id === params.id).map((repair) => (
                <div key={repair.id} className='flex flex-col justify-between md:px-24 px-10 py-8'>
                    <h1 className={`font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center 
                                    ${ repair.id === 'gamingconsole_repair' && 'sm:pb-4 pb-1'}`}>
                        {repair.title}
                    </h1>
                    <div className={`flex sm:flex-row flex-col-reverse flex-1 justify-around items-center pb-8 pt-8
                                    ${ repair.id === 'gamingconsole_repair' && 'hidden'}
                                    `}>
                        <div className='max-w-[420px]'>
                            <p className='font-poppins font-semibold text-[20px] leading-[32px]'>{repair.description}</p>
                            {repair.extradescription && <p className='font-poppins font-normal text-[16px] leading-[24px] mt-4 flex items-center'>{repair.extradescription}</p>}
                            <p className='font-poppins font-semibold text-[16px] leading-[23px] mb-4 mt-4'>{repair.listTitle}</p>
                            <ul>
                                {repair.listofrepairs && repair.listofrepairs.map((itemrepair) => (
                                    <li className='font-poppins font-normal text-[16px] leading-[24px] mb-4 flex items-center' key={itemrepair.id}>
                                        <span><MdCheckCircle style={{ color: 'green' }}/></span>&nbsp;<span>{itemrepair.repair}</span>
                                    </li>
                                ))}
                            </ul>
                            {repair.logicboardfailure && <><p>{repair.logicboardfailure}</p></>}
                            {repair.inquiry && repair.inquiry.map(({ id, description, phonenumber, email }) => (
                                <div key={id}>
                                    <p>{description}</p>
                                    <div className='flex sm:flex-row flex-col justify-between md:items-center items-start'>
                                        <a href='tel:+6199942413'className='flex items-center mt-2'>
                                            <FaPhoneAlt size='19' className='nav-linker'/>&nbsp;&nbsp;
                                            <p>{phonenumber}</p>
                                        </a>
                                        <a href={email} 
                                            target='_blank' className='flex items-center mt-2'>
                                            <MdAlternateEmail size='19' className='nav-linker'/>&nbsp;&nbsp;
                                            <p>max@pcmaxrepair.ca</p>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <img src={repair.image} alt={repair.title} className='sm:w-[50%] sm:h-[50%] w-[100%] h-[100%] sm:pb-0 pb-6'/>
                    </div>
                    {repair.listofconsols && repair.listofconsols.map((console) => (
                        <div key={console.id}>
                            <h1 className='font-poppins font-semibold xs:text-[32px] text-[26px] xs:leading-[76.8px] leading-[66.8px] w-full text-center sm:pb-10 pb-2'>{console.title}</h1>
                            <div className='flex sm:flex-row flex-col-reverse flex-1 justify-between items-center pb-8'>
                                <div className='max-w-[420px]'>
                                    <p className='font-poppins font-semibold text-[20px] leading-[32px]'>{console.description}</p>
                                    <p className='font-poppins font-semibold text-[16px] leading-[23px] mb-4 mt-4'>{console.listTitle}</p>
                                    <ul>
                                        {console.listofrepairs && console.listofrepairs.map((itemrepair) => (
                                            <li className='font-poppins font-normal text-[16px] leading-[24px] mb-4 flex items-center' key={itemrepair.id}>
                                                <span><MdCheckCircle style={{ color: 'green' }}/></span>&nbsp;<span>{itemrepair.repair}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {console.inquiry && console.inquiry.map(({ id, description, phonenumber, email }) => (
                                        <div key={id}>
                                            <p>{description}</p>
                                            <div className='flex sm:flex-row flex-col justify-between md:items-center items-start'>
                                                <a href='tel:+6199942413'className='flex items-center mt-2'>
                                                    <FaPhoneAlt size='19' className='nav-linker'/>&nbsp;&nbsp;
                                                    <p>{phonenumber}</p>
                                                </a>
                                                <a href={email} 
                                                    target='_blank' className='flex items-center mt-2'>
                                                    <MdAlternateEmail size='19' className='nav-linker'/>&nbsp;&nbsp;
                                                    <p>max@pcmaxrepair.ca</p>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <img src={console.image} alt={repair.title} className='sm:w-[50%] sm:h-[50%] xl:w-[35%] xl:h-[35%] w-[100%] h-[100%] sm:pb-0 pb-6'/>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};