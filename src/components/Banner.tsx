import React from 'react';
import { FaPhoneAlt, FaDirections, FaDoorOpen } from "react-icons/fa";

const Banner = () => {

    const isMobile = window.innerWidth <= 500;

    return (
        <div className='flex'>
            <div className="w-full flex flex-row py-6 justify-between items-center navbar">
                <a href='tel:+6199942413'>
                    <FaPhoneAlt size='19' className='nav-linker'/>
                    <p className="text-3xl font-bold underline">905-517-9610</p>
                </a>
                <a href='https://www.google.com/maps/dir//Max+Repair/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b47c32e09a101:0x2da8f3e93aee60d!2m2!1d-79.5836717!2d43.553694199999995' target='_blank'>
                    <FaDirections size='19' className='nav-linker'/>
                    <p>Get Direction</p>
                </a>
                <p>
                    <FaDoorOpen size='19' className='nav-linker'/>
                    Mon To Fri: 9:30AM - 7:30PM | Saturday: 11:00AM to 5:30PM
                </p>
                <p className="text-3xl font-bold underline">{ isMobile ? 'Mobile' : 'Desktop'}</p>
            </div>
        </div>
    );

    // return ;
}

export default Banner