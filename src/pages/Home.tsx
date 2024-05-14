import React, { useEffect } from 'react';
import Slider from '../components/Slider'
import { WhyChooseUs, OurServices, BrandsWeCanFix, Reviews } from '../components';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div>
            <Slider />
            <WhyChooseUs />
            <OurServices />
            <BrandsWeCanFix />
            <Reviews />
        </div>
    );
}

export default Home