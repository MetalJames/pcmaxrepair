import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { navLinks, openhours } from '../../constants';
import { close, menu } from '../../assets';

export const NavBar = () => {

    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    let openday = weekday[date.getDay()];

    return (
        <nav className='w-full flex md:mt-[60px] mt-[90px] py-4 justify-between items-center navbar fixed top-0 z-40 bg-white'>
            <ul key={1} className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map(({ id, title, link, links }) => (
                    <div key={id}>
                    {'services' === id ? 
                        <li className='mr-10' onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                            <div className='dropdown inline-block relative'>
                                <button className='inline-flex items-center font-poppins font-semibold cursor-pointer text-[16px] text-black hover:text-blue-500 transition-all duration-200'>
                                    <span className='mr-1'>{title}</span>
                                    <svg className={`w-4 h-4 object-contain ml-2 ${open ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <ul className={`w-[200px] dropdown-menu hidden absolute text-gray-700 pt-1 z-50 ${open ? 'visible transition-all' : 'invisible transition-all mt-1'}`}>
                                    {links!.map(({ id, title, sublink }) => (
                                        <Link key={id} to={`${sublink}`}>
                                            <li key={id} onClick={() => setOpen(false)} className="bg-slate-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{title}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        :
                        <Link key={id} to={`${link}`}>
                            <li key={id} className='font-poppins font-semibold cursor-pointer text-[16px] text-black mr-10 hover:text-blue-500 transition-all duration-200'>
                                {title}
                            </li>
                        </Link>
                    }
                    </div>
                ))}
            </ul>
            {/* mobile menu starts here */}
            <div className='sm:hidden flex flex-1 justify-between items-center px-10'>
                <Link to='/' onClick={() => setToggle(false)}>
                    Home
                </Link>
                {openhours.filter(day => day.id === openday).map((day) => (
                    <div key={day.id} className='flex flex-col items-center justify-center'>
                        <p>Today open</p>{day.hours}
                    </div>
                ))}
                <img src={toggle ? close : menu} alt='menu' title='menu' loading='eager' width={'auto'} height={'auto'} className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => (!prev))}
                />
                <div className={`${toggle ? 'flex' : 'hidden'}
                p-6 bg-slate-100 absolute top-[80%] right-5 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
                >
                    <ul key={1} className='list-none flex flex-col flex-1'>
                        {navLinks.filter(link => link.id != 'home').map(({ id, title, link, links }) => (
                            <div key={id}>
                            {'services' === id ? 
                                <li className='mr-10 mb-2 text-[18px]' onClick={() => setOpen((prev) => (!prev))}>
                                    <div className='dropdown inline-block relative'>
                                        <button className='inline-flex items-center'>
                                            <span className='mr-1'>{title}</span>
                                            <svg className={`w-4 h-4 object-contain ml-2 ${open ? 'rotate-180 transition-all' : 'rotate-0 transition-all'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                        </button>
                                        <ul className={`w-[200px] dropdown-menu hidden absolute bg-slate-100 text-gray-700 pt-1 z-50 ${open ? 'opacity-100 transition-all' : 'opacity-0 transition-all mt-1'}`}>
                                            {links!.map(({ id, title, sublink }) => (
                                                <Link key={id} to={`${sublink}`}>
                                                    <li key={id} onClick={() => setToggle(false)} className="hover:bg-gray-400 py-2 px-4 block text-[18px] whitespace-no-wrap">{title}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                :
                                <Link key={id} to={`${link}`}>
                                    <li key={id} onClick={() => setToggle(false)} className='font-poppins font-normal cursor-pointer text-[18px] text-black mr-10 mb-2'>
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
};