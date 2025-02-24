import { Fragment, SetStateAction, useEffect, useState } from "react";
import { FaqList } from "../components/faq_comps";

export const FAQ = () => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value: SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='md:px-24 px-10 py-8'>
            <Fragment>
                <h1 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center pb-10'>
                    Frequently Asked Question
                </h1>
                <FaqList open={open} handleOpen={handleOpen} />
            </Fragment>
        </div>
    );
};