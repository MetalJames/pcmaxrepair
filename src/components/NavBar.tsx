import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <ul key={1} className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map(({ id, title, link, links }) => (
                    <div key={id}>
                    {'services' === id ? 
                        <li className='mr-10' onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                            <div className='dropdown inline-block relative'>
                                <button className='inline-flex items-center'>
                                    <span className='mr-1'>{title}</span>
                                    <svg className={`w-4 h-4 object-contain ml-2 ${open ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <ul className={`w-[200px] dropdown-menu hidden absolute text-gray-700 pt-1 z-50 ${open ? 'visible transition-all' : 'invisible transition-all mt-1'}`}>
                                    {links!.map(({ id, title, sublink }) => (
                                        <Link key={id} to={`${sublink}`}>
                                            <li key={id} onClick={() => setOpen(false)} className="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{title}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        :
                        <Link key={id} to={`${link}`}>
                            <li key={id} className='font-poppins font-normal cursor-pointer text-[16px] text-black mr-10'>
                                {title}
                            </li>
                        </Link>
                    }
                    </div>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-between items-center'>
                <Link to='/'>
                    Home
                </Link>
                <p>Today open until 5</p>
                <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => (!prev))}
                />
                <div className={`${toggle ? 'flex' : 'hidden'}
                p-6 bg-[#fefefe] absolute top-[15%] right-5 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
                >
                    <ul key={1} className='list-none flex flex-col flex-1'>
                        {navLinks.map(({ id, title, link, links }) => (
                            <div key={id}>
                            {'services' === id ? 
                                <li className='mr-10' onClick={() => setOpen((prev) => (!prev))}>
                                    <div className='dropdown inline-block relative'>
                                        <button className='inline-flex items-center'>
                                            <span className='mr-1'>{title}</span>
                                            <svg className={`w-4 h-4 object-contain ml-2 ${open ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                        </button>
                                        <ul className={`w-[200px] dropdown-menu hidden absolute text-gray-700 pt-1 z-50 ${open ? 'opacity-100 transition-all' : 'opacity-0 transition-all mt-1'}`}>
                                            {links!.map(({ id, title, sublink }) => (
                                                <Link key={id} to={`${sublink}`}>
                                                    <li key={id} onClick={() => setToggle(false)} className="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{title}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                :
                                <Link key={id} to={`${link}`}>
                                    <li key={id} onClick={() => setToggle(false)} className='font-poppins font-normal cursor-pointer text-[16px] text-black mr-10'>
                                        {title}
                                    </li>
                                </Link>
                            }
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar




// {/* <ul className='flex py-4 px-10 justify-end items-center'>
//                 <Link to='/'>
//                     <li className='mr-10'>Home</li>
//                 </Link>
//                 <Link to='/about_us'>
//                     <li className='mr-10'>About Us</li>
//                 </Link>
//                 <li className='mr-10' onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
//                     <div className='dropdown inline-block relative'>
//                         <button className='inline-flex items-center'>
//                             <span className='mr-1'>Services</span>
//                             <svg className={`w-4 h-4 object-contain ml-2 ${open ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
//                         </button>
//                         <ul className={`dropdown-menu hidden absolute text-gray-700 pt-1 z-50 ${open ? 'opacity-100 transition-all' : 'opacity-0 transition-all mt-1'}`}>
//                             <Link to='/iphone_repair'>
//                                 {/* <li className=""><a className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap' href="#">iPhone Repair</a></li> */}
//                                 <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">iPhone Repair</li>
//                             </Link>
//                             <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Two</li>
//                             <li className="ounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Three is the magic number</li>
//                         </ul>
//                     </div>
//                 </li>
//                 <Link to='/faq'>
//                     <li className='mr-10'>FAQ</li>
//                 </Link>
//                 <Link to='/contact_us'>
//                     <li className='mr-10'>Contact Us</li>
//                 </Link>
//             </ul> */}