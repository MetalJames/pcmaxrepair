import React from 'react';
import Slider from '../components/Slider'
import AboutUsHome from '../components/AboutUsHome';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Slider />
            <WhyChooseUs />
            <AboutUsHome />
        </div>
    );
}

export default Home