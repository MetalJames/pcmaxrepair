import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from '../../constants/reviews';
import { ReviewCard } from '../common/ReviewCard';
import { NextArrow, PrevArrow } from '../common/NextPrevButtonsReview';
import { ReviewPostReadButtons } from "../common/ReviewPostReadButtons";

export const Reviews = () => {
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
        <div className='flex flex-col justify-between lg:px-24 px-6 sm:py-16 py-6'>
            <h2 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center sm:pb-10 pb-4'>Testamonials</h2>
            <SliderSlick {...settings} className='flex items-center'>
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </SliderSlick>
            <ReviewPostReadButtons />
        </div>
    )
};