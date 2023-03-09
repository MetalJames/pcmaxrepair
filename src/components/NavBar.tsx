import React, { useState } from 'react'
import "./navbar.css";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <ul className='flex py-4 px-10 justify-end items-center'>
                <li className='mr-10'>About Us</li>
                <li className='mr-10' onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    <div className='dropdown inline-block relative'>
                        <button className='inline-flex items-center'>
                            <span className='mr-1'>Services</span>
                            <svg className={`w-4 h-4 object-contain ml-2 ${open ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className='transition-all dropdown-menu absolute hidden text-gray-700 pt-1 z-50'>
                            <li className=""><a className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap' href="#">One</a></li>
                            <li className=""><a className='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap' href="#">Two</a></li>
                            <li className=""><a className='rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap' href="#">Three is the magic number</a></li>
                        </ul>
                    </div>
                </li>
                <li className='mr-10'>FAQ</li>
                <li className='mr-10'>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar