import React from 'react';
import { Link } from 'react-router-dom';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidercontent } from '../constants';
import './style.css'


const Slider = () => {

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
        <SliderSlick {...settings} className='mb-10'>
                {slidercontent.map((slide) => (
                    <div key={slide.id}>
                        <div className={`flex w-full justify-between sm:items-stretch items-center
                        ${slide.id === 'repair_logicboard' || slide.id === 'repair_console' ? 'sm:flex-row-reverse flex-col-reverse' : 'sm:flex-row flex-col-reverse'}`}>
                            <div className='flex flex-col w-full justify-around items-center'>
                                <h3 className='font-poppins font-semibold xs:text-[48px] text-[32px] xs:leading-[76.8px] leading-[32px] sm:w-[75%] w-[80%] sm:py-0 py-4 text-center'>
                                    {slide.title}
                                </h3>
                                <p className='font-poppins font-light text-[18px] leading-[30px] text-center sm:w-full w-[80%] sm:pb-0 pb-4'>{slide.description}</p>
                                <Link key={slide.id} to={`${slide.link}`} className='sm:pb-0 pb-6'>
                                    <div key={slide.id} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300 cursor-pointer'>Maybe Learn More?</div>
                                </Link>
                            </div>
                            <img src={slide.img} alt={slide.title} className='sm:w-[50%] sm:h-[50%] w-full h-full'/> 
                        </div>
                    </div>
                ))}
        </SliderSlick>
    )
}

export default Slider;