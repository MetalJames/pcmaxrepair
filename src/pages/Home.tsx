import React from 'react';
import Slider from '../components/Slider'
import { WhyChooseUs, OurServices, BrandsWeCanFix, Reviews } from '../components';

const Home = () => {
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