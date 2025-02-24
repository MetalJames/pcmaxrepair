import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { faq_questions } from '../../constants/index';
import { FaqIcon } from "./FaqIcon";

export const FaqList = ({ open, handleOpen }: {open: number, handleOpen: (value: number) => void}) => (
    <>
        {faq_questions.map(({id, title, questions, img}) =>
            <div key={id} className='flex flex-col justify-between sm:pb-12 pb-8'>
                <div className='flex sm:flex-row flex-col-reverse min-h-[140px] w-full overflow-x-scroll rounded-lg lg:overflow-visible justify-around items-center sm:pb-0 pb-8'>
                    <div className='xxs:max-w-[270px] sm:max-w-[500px] xl:max-w-[620px]'>
                        <h1 className='font-poppins font-semibold text-[20px] leading-[32px]'>{title}</h1>
                        {questions.map(({id, question, answer}) => 
                            <div key={id}>
                                <Accordion open={open === id} icon={<FaqIcon />} 
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
                    <img src={img} alt={title} className='sm:w-[50%] sm:h-[50%] w-[100%] h-[100%] sm:p-6 p-0 sm:pb-6 pb-6'/>
                </div>
            </div>
        )}
    </>
);