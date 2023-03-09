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
            <div>
                { isMobile ? <img style={{width: '100%'}} src={mySlideOneMobile} /> : <img src={mySlideOne} /> }
            </div>
            <div>
                { isMobile ? <img style={{width: '100%'}} src={mySlideTwoMobile} /> : <img src={mySlideTwo} /> }
            </div>
            <div>
                { isMobile ? <img style={{width: '100%'}} src={mySlideThreeMobile} /> : <img src={mySlideThree} /> }
            </div>
            </SliderSlick>
        </>
    )
}

export default Slider;