import { Link } from 'react-router-dom';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidercontent } from '../../constants';
import './slider.css'


export const Slider = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            {breakpoint:500,
                settings: {slidesToShow:1}
            }]
    };

    return (
        <SliderSlick {...settings} className='sm:mt-10 lg:mt-7 mt-7 mb-10'>
                {slidercontent.map((slide) => (
                    <div key={slide.id}>
                        <div className={`flex w-full justify-between sm:items-stretch items-center
                        ${slide.id === 'repair_logicboard' || slide.id === 'repair_console' ? 'sm:flex-row-reverse flex-col-reverse' : 'sm:flex-row flex-col-reverse'}`}>
                            <div className='flex flex-col justify-around items-center sm:w-1/2 w-full sm:h-[300px] md:h-[400px] h-auto my-auto'>
                                {slide.id === 'repair_iphone' ?
                                    <h1 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[24px] leading-tight sm:w-[75%] w-[80%] sm:py-0 py-4 text-center whitespace-pre-line'>
                                        {slide.title}
                                    </h1>
                                    :
                                    <h1 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[24px] leading-tight sm:w-[75%] w-[80%] sm:py-0 py-4 text-center whitespace-pre-line'>
                                        {slide.title}
                                    </h1>
                                }
                                <p className='font-poppins font-light sm:text-[20px] md:text-[24px] text-[16px] leading-tight text-center sm:w-full w-[80%] sm:pb-0 pb-4 whitespace-pre-line'>{slide.description}</p>
                                <Link key={slide.id} to={`${slide.link}`} className='sm:pb-0 pb-6'>
                                    <div key={slide.id} className='bg-blue-600 text-white font-semibold py-2 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-md md:hover:shadow-lg md:hover:bg-blue-500'>Learn More</div>
                                    {/* <div key={slide.id} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300 cursor-pointer'>Learn More</div> */}
                                </Link>
                            {/* <Link key={slide.id} to={`${slide.link}`} className='mt-2 sm:mt-4'>
                                <button className='bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'>
                                    Learn More
                                </button>
                            </Link> */}
                            </div>
                            {/* <img src={slide.img} alt={slide.title} title={slide.title} loading='eager' className='sm:w-[45%] w-[80%] sm:h-auto h-auto max-w-[350px] sm:max-w-none rounded-lg shadow-lg' />  */}
                            <img src={slide.img} alt={slide.title} title={slide.title} loading='eager' width={'auto'} height={'auto'} className='sm:w-[50%] sm:h-[50%] w-full h-full'/> 
                        </div>
                    </div>
                ))}
        </SliderSlick>
    )
};