import React from 'react';
import { useParams } from "react-router-dom";
import { repairs } from '../../constants/repairs';
import { MdCheckCircle } from "react-icons/md";

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
                            <p className='font-poppins font-semibold text-[16px] leading-[23px] mb-4 mt-4'>{repair.listTitle}</p>
                            <ul>
                                {repair.listofrepairs.map((itemrepair) => (
                                    <li className='font-poppins font-normal text-[16px] leading-[24px] mb-4 flex items-center' key={itemrepair.id}>
                                        <MdCheckCircle style={{ color: 'green' }} />&nbsp;{itemrepair.repair}
                                    </li>
                                ))}
                            </ul>
                            <p>{repair.inquiry}</p>
                        </div>
                        <img src={repair.image} alt={repair.title} className='w-[50%] h-[50%]'/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IPhoneRepair