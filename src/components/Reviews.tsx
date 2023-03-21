import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from '../constants/reviews';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Reviews = () => {

    const NextArrow = (props:any) => {
        const { style, onClick } = props;
        return (
            <div style={{ ...style, display: "block" }} onClick={onClick}>
            <MdKeyboardDoubleArrowRight
                className="slick-arrow-icon-right sm:text-3xl text-2xl cursor-pointer"
            />
            </div>
        );
    }

    const PrevArrow = (props:any) => {
        const { style, onClick } = props;
        return (
            <div style={{ ...style, display: "block" }} onClick={onClick}>
            <MdKeyboardDoubleArrowLeft
                className="slick-arrow-icon-left sm:text-3xl text:2xl cursor-pointer"
            />
            </div>
        );
    }

        const settings = {
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            dots: true,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: "linear",
            responsive: [
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };

    return (
        <div className='flex flex-col justify-between sm:px-24 px-6 sm:py-16 py-6'>
            <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center sm:pb-10 pb-2'>Testamonials</h1>
            <SliderSlick {...settings} className='flex items-center'>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <div className='w-[80%] m-auto'>
                            <div className="flex items-center mb-2">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <h3 className="ml-2 text-sm font-semibold text-gray-900">{review.postedon}</h3>
                            </div>
                            <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{review.review}</p>
                            <h3 className='font-poppins font-semibold text-[16px] leading-[23px] mb-4 mt-4'>- {review.name}</h3>
                        </div>
                    </div>
                ))}
            </SliderSlick>
            <div className='flex justify-around mt-5 mb-5'>
                <a href='https://www.google.com/search?hl=en-CA&gl=ca&q=Max+Repair,+106+Lakeshore+Rd+E,+Mississauga,+ON+L5G+1E3&ludocid=205634231927236109&lsig=AB86z5XrG2S8qWLfmI8vrANl5NHd#lrd=0x882b47c32e09a101:0x2da8f3e93aee60d,3'>
                    <div className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300 cursor-pointer'>
                        Write a review
                    </div>
                </a>
                <div className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300 cursor-pointer'>
                    <a href='https://www.google.com/search?hl=en-CA&gl=ca&q=Max+Repair,+106+Lakeshore+Rd+E,+Mississauga,+ON+L5G+1E3&ludocid=205634231927236109&lsig=AB86z5XrG2S8qWLfmI8vrANl5NHd#lrd=0x882b47c32e09a101:0x2da8f3e93aee60d,1'>Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Reviews