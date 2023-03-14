import React from 'react';
import { useParams } from "react-router-dom";
import { repairs } from '../../constants/repairs';
import { MdCheckCircle } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail} from "react-icons/md";

const IPhoneRepair = () => {

    const params = useParams();
    console.log(repairs)
    console.log(params)

    return (
        <div>
            {repairs.filter(repair => repair.id === params.id).map((repair) => (
                <div key={repair.id} className='flex flex-col justify-between px-24'>
                    <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center pb-10'>{repair.title}</h1>
                    <div className='flex flex-1 justify-between items-center'>
                        <div className='max-w-[370px]'>
                            <p className='font-poppins font-semibold text-[20px] leading-[32px]'>{repair.description}</p>
                            {repair.extradescription ? <p className='font-poppins font-normal text-[16px] leading-[24px] mt-4 flex items-center'>{repair.extradescription}</p> : <></>}
                            <p className='font-poppins font-semibold text-[16px] leading-[23px] mb-4 mt-4'>{repair.listTitle}</p>
                            <ul>
                                {repair.listofrepairs.map((itemrepair) => (
                                    <li className='font-poppins font-normal text-[16px] leading-[24px] mb-4 flex items-center' key={itemrepair.id}>
                                        <MdCheckCircle style={{ color: 'green' }} />&nbsp;{itemrepair.repair}
                                    </li>
                                ))}
                            </ul>
                            {repair.inquiry ? repair.inquiry.map(({ id, description, phonenumber, email }) => (
                                <div key={id}>
                                    <p>{description}</p>
                                    <div className='flex justify-between items-center'>
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
                            ))
                            :
                            <></>
                            }
                        </div>
                        <img src={repair.image} alt={repair.title} className='w-[50%] h-[50%]'/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IPhoneRepair