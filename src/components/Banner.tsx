import React from 'react';
import { FaPhoneAlt, FaDirections, FaDoorOpen } from "react-icons/fa";
import { openhours } from "../constants";

const Banner = () => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    let openday = weekday[date.getDay()];

    return (
        <div className='flex px-4 py-4 sm:px-10 justify-center md:justify-between items-center bg-slate-100 shadow-md fixed top-0 w-full z-30'>
            <a href='/'className='flex items-center sm:mr-10 mr-0'>
                <p className="font-bold text-[22px] text-center md:text-left w-[60px] md:w-full">Max Repair</p>
            </a>
            <div className='flex sm:justify-end justify-around items-center'>
                <a href='tel:+6199942413'className='flex items-center sm:mr-10 mr-0'>
                    <FaPhoneAlt size='19' className='nav-linker hidden md:block'/>&nbsp;&nbsp;
                    <p className="px-[20px] sm:px-0">905-517-9610</p>
                </a>
                <a href='https://www.google.com/maps/dir//Max+Repair/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b47c32e09a101:0x2da8f3e93aee60d!2m2!1d-79.5836717!2d43.553694199999995' 
                    target='_blank' className='flex items-center sm:mr-10 mr-0'>
                    <FaDirections size='19' className='nav-linker hidden md:block'/>&nbsp;&nbsp;
                    <p className='w-[60px] md:w-full text-center md:text-left'>Get Direction</p>
                </a>
                <div className='hidden sm:flex items-center'>
                    <FaDoorOpen size='19' className='nav-linker'/>&nbsp;&nbsp;
                    {openhours.filter(day => day.id === openday).map((day) => (
                        <div key={day.id} className='flex items-center justify-center'>
                            <p>Today open</p>&nbsp;&nbsp;{day.hours}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner