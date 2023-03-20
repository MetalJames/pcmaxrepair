import React from 'react';
import Slider from '../components/Slider'
// import AboutUsHome from '../components/AboutUsHome';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';
// import IphoneRepair from '../components/IphoneRepair';
import BrandsWeCanFix from '../components/BrandsWeCanFix';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div>
            <Slider />
            <WhyChooseUs />
            {/* <AboutUsHome /> */}
            <OurServices />
            {/* <IphoneRepair /> */}
            <BrandsWeCanFix />
            <Reviews />
        </div>
    );
}

export default Home