import React from 'react';
import { FaPhoneAlt, FaDirections, FaDoorOpen } from "react-icons/fa";

const Banner = () => {

    const isMobile = window.innerWidth <= 500;

    return (
        <div className='flex px-4 py-4 sm:px-10 sm:justify-end justify-around items-center bg-slate-100 shadow-md'>
                <a href='tel:+6199942413'className='flex items-center sm:mr-10 mr-0'>
                    <FaPhoneAlt size='19' className='nav-linker'/>&nbsp;&nbsp;
                    <p className="">905-517-9610</p>
                </a>
                <a href='https://www.google.com/maps/dir//Max+Repair/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b47c32e09a101:0x2da8f3e93aee60d!2m2!1d-79.5836717!2d43.553694199999995' 
                    target='_blank' className='flex items-center sm:mr-10 mr-0'>
                    <FaDirections size='19' className='nav-linker'/>&nbsp;&nbsp;
                    <p>Get Direction</p>
                </a>
                <p className='hidden sm:flex items-center'>
                    <FaDoorOpen size='19' className='nav-linker'/>&nbsp;&nbsp;
                    Mon To Fri: 9:30AM - 7:30PM | Saturday: 11:00AM to 5:30PM
                </p>
        </div>
    );
}

export default Banner