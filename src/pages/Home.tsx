import React from 'react';
import Slider from '../components/Slider'
import AboutUsHome from '../components/AboutUsHome';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';
import IphoneRepair from '../components/IphoneRepair';
import BrandsWeCanFix from '../components/BrandsWeCanFix';

const Home = () => {
    return (
        <div>
            <Slider />
            <WhyChooseUs />
            {/* <AboutUsHome /> */}
            <OurServices />
            {/* <IphoneRepair /> */}
            <BrandsWeCanFix />
        </div>
    );
}

export default Home