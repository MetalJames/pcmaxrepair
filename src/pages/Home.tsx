import React from 'react';
import Slider from '../components/Slider'
import AboutUsHome from '../components/AboutUsHome';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';
import IphoneRepair from '../components/IphoneRepair';

const Home = () => {
    return (
        <div>
            <Slider />
            <WhyChooseUs />
            <AboutUsHome />
            <OurServices />
            <IphoneRepair />
        </div>
    );
}

export default Home