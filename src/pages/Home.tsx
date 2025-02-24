import { useEffect } from 'react';
import { Slider, WhyChooseUs, OurServices, BrandsWeCanFix, Reviews } from '../components/home_comps';

export const Home = () => {

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
};