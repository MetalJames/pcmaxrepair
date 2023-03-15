import { Fragment, SetStateAction, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

import { faq_questions } from '../constants/index';

type IconProps = {
    id: number,
    open: any,
}

const Icon = ( props: IconProps ): JSX.Element => {
    return (
        <svg className='w-5 h-5 ml-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
    );
};

const FAQ = () => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value: SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <div>
                <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center pb-10'>
                    Frequently Asked Question
                </h1>
            </div>
            {faq_questions.map(({id, title, questions}) => 
                <div key={id} className='flex flex-col min-h-[140px] w-full lg:w-3/5 overflow-x-scroll rounded-lg p-10 lg:overflow-visible'>
                    <h1 className='font-poppins font-semibold text-[20px] leading-[32px]'>{title}</h1>
                    {questions.map(({id, question, answer}) => 
                        <div key={id}>
                            <Accordion open={open === id} icon={<Icon id={id} open={open} />} 
                                className='block relative w-full'>
                                <AccordionHeader onClick={() => handleOpen(id)} className='flex justify-between w-full py-4 border-b border-b-blue-gray-100 antialiased font-sans text-lg font-semibold leading-snug select-none'>
                                    <p className='text-left'>{question}</p>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className='overflow-hidden'>
                                        <div className='block w-full py-4 text-gray-700 antialiased font-sans text-base font-light leading-normal'>
                                            {answer}
                                        </div>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                        </div>
                    )}
                </div>
            )}
        </Fragment>
    );
};

export default FAQ;
