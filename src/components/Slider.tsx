import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mySlideOne from '../assets/img/mySlideOne.jpg'
import mySlideOneMobile from "../assets/img/mySlideOneMobile.jpg";
import mySlideTwo from '../assets/img/mySlideTWo.jpg'
import mySlideTwoMobile from "../assets/img/mySlideTWoMobile.jpg";
import mySlideThree from '../assets/img/mySlideThree.jpg'
import mySlideThreeMobile from "../assets/img/mySlideThreeMobile.jpg";

import iphonerepairimg from '../assets/Max_Repair_web-05.jpg';
import logicboardrepair from "../assets/logicboardrepair.png";
import { computerrepairfaq, xboxrepair, playstationrepair, nintendoswitchrepair } from '../assets';

import { slidercontent } from '../constants';


const Slider = () => {

    const isMobile = window.innerWidth <= 500;

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {breakpoint:500,
                settings: {slidesToShow:1}
            }]
    };

    return (
        <>
            <SliderSlick {...settings}>
                    {slidercontent.map((slide) => (
                        <div>
                            <div key={slide.id} className={`flex w-full justify-between sm:items-stretch items-center
                            ${slide.id === 'repair_logicboard' || slide.id === 'repair_console' ? 'sm:flex-row-reverse flex-col-reverse' : 'sm:flex-row flex-col-reverse'}`}>
                                <div className='flex flex-col w-full justify-around items-center'>
                                    <h3 className='font-poppins font-semibold xs:text-[48px] text-[32px] xs:leading-[76.8px] leading-[32px] w-full text-center'>
                                        {slide.title}
                                    </h3>
                                    <p className='font-poppins font-light text-[18px] leading-[30px] text-center'>{slide.description}</p>
                                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300'>Maybe Learn More?</button>
                                </div>
                                <img src={slide.img} alt={slide.title} className='w-[50%] h-[50%]'/> 
                            </div>
                        </div>
                    ))}
            {/* <div>
                { isMobile ? <img style={{width: '100%'}} src={mySlideOneMobile} /> : 
                        <div className='flex w-full justify-between'>
                            <div className='flex flex-col w-full justify-around items-center'>
                                <h3 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center'>
                                    iPhone Repair < br /> Port Creadit
                                </h3>
                                <p>What needs to be done - we can do! Any repair on iPhones in Port Credit</p>
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300'>Maybe Learn More?</button>
                            </div>
                            <img src={iphonerepairimg} className='w-[50%] h-[50%]'/> 
                        </div>
                }
            </div> */}
            {/* <div>
                { isMobile ? <img style={{width: '100%'}} src={mySlideTwoMobile} /> : 
                        <div className='flex w-full justify-between flex-row-reverse'>
                            <div className='flex flex-col w-full justify-around items-center'>
                                <h3 className='font-poppins font-semibold xs:text-[48px] text-[40px] w-full text-center'>
                                    Logic Repair < br /> Port Creadit
                                </h3>
                                <p>What needs to be done - we can do! Any repair on iPhones in Port Credit</p>
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300'>Maybe Learn More?</button>
                            </div>
                            <img src={logicboardrepair} className='w-[50%] h-[50%]'/> 
                        </div>
                }
            </div>
            <div>
                { isMobile ? <img style={{width: '100%'}} src={mySlideThreeMobile} /> : 
                        <div className='flex w-full justify-between'>
                            <div className='flex flex-col w-full justify-around items-center'>
                                <h3 className='font-poppins font-semibold xs:text-[48px] text-[40px] w-full text-center'>
                                    MacBook or Laptop Repair < br /> Port Creadit
                                </h3>
                                <p>What needs to be done - we can do! Any repair on iPhones in Port Credit</p>
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300'>Maybe Learn More?</button>
                            </div>
                            <img src={computerrepairfaq} className='w-[50%] h-[50%]'/> 
                        </div>
                }
            </div>
            <div>
                { isMobile ? <img style={{width: '100%'}} src={mySlideThreeMobile} /> : 
                        <div className='flex w-full justify-between flex-row-reverse'>
                            <div className='flex flex-col w-[50%] justify-around items-center'>
                                <h3 className='font-poppins font-semibold xs:text-[48px] text-[40px] w-full text-center'>
                                    Gaming Console Repair < br /> Port Creadit
                                </h3>
                                <p>What needs to be done - we can do! Any repair on iPhones in Port Credit</p>
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300'>Maybe Learn More?</button>
                            </div>
                            <img src={playstationrepair} className='w-[30%] h-[30%]'/> 
                        </div>
                }
            </div> */}
            </SliderSlick>
        </>
    )
}

export default Slider;