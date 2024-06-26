import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

type FormState = {
    email: string;
    name: string;
    message: string;
};

type ServiceMessage = {
    class: string;
    text: string;
};

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const formId = "xdXy6LgPr";
    const formSparkUrl = `https://submit-form.com/${formId}`;
    //const recaptchaKey = '6LepcP8kAAAAAGxI9BguXECVdyLG5BXO0QUDIEAu';
    //const recaptchaRef = useRef<any>();

    const regName = /^[a-zA-Z ]+$/;
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const initialFormState = {
        email: '',
        name: '',
        message: '',
    };

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();
    // const [recaptchaToken, setReCaptchaToken] = useState<string>();
    //const [recaptchaToken, setReCaptchaToken] = useState<boolean>(false);
    
    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
            ...formState,
            //"g-recaptcha-response": recaptchaToken,
        };

        try {

            // validate name input field

            if (formState.name === '') {
                setMessage({
                    class: "bg-red-500",
                    text: "*Name is required",
                });
            } 
            else if (!regName.test(formState.name)) {
                setMessage({
                    class: "bg-red-500",
                    text: "*Only letters and white spaces allowed in Name Field",
                });
            }

            // validate email input field
            
            else if (formState.email === '') {
                setMessage({
                    class: "bg-red-500",
                    text: "*EMail is required",
                });
            } 
            else if (!regEmail.test(formState.email)) {
                setMessage({
                    class: "bg-red-500",
                    text: "*Invalid Email Format",
                });
            }

            //validate messege input field

            else if (formState.message === '') {
                setMessage({
                    class: "bg-red-500",
                    text: "*Please leave your message",
                });
            } 
            // else if (recaptchaToken === false) {
            //     setMessage({
            //         class: "bg-red-500",
            //         text: "*Please tell us if you are robot or not!",
            //     });
            // } 
            //else {
                const result = await axios.post(formSparkUrl, payload);
                console.log(result);
                setMessage({
                    class: 'bg-green-500',
                    text: 'Thanks, someone will be in touch shortly.',
                });
                setFormState(initialFormState);
                //recaptchaRef.current.reset();
            //}
        } catch (error) {
            console.log(error);
            setMessage({
                class: 'bg-red-500',
                text: 'Sorry, there was a problem. Please try again or contact support.',
            });
        }
    };

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { id, value } = event.target;
            const formKey = id as keyof FormState;
            const updatedFormState = { ...formState };
            updatedFormState[formKey] = value;
            setFormState(updatedFormState);
    };

    // const updateRecaptchaToken = (token: string | null) => {
    //     // setReCaptchaToken(token as string);
    //     setReCaptchaToken(token as unknown as boolean);
    // };

    return (
        <div className='flex flex-col justify-between sm:px-24 px-6 sm:py-4 py-2'>
            {/* <div className='flex flex-col items-center'> */}
                <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center sm:pb-10 pb-2'>
                    {/* <span>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="pb-4 mr-2 h-12 transform rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </span> */}
                    {/* <span> */}
                        Contact Us
                    {/* </span> */}
                </h1>
            {/* </div> */}
            <div className='h-full flex justify-center flex-col pb-8'>
                <div className='sm:w-2/3 w-[100%] sm:m-auto m-0 sm:p-8 p-3 shadow-lg'>
                    {message && (
                        <div className={`my-4 text-white w-full p-4 ${message.class}`}>
                            {message.text}
                        </div>
                    )}
                    <form onSubmit={submitForm} className='flex flex-col'>
                        <div className='my-2 flex flex-col'>
                            <label htmlFor='name'>Name</label>
                            <input
                                onChange={updateFormControl}
                                className='border-2 p-2'
                                type='text'
                                id='name'
                                value={formState?.name}
                            />
                        </div>
                        <div className='my-2 flex flex-col'>
                            <label htmlFor='email'>Email</label>
                            <input
                                onChange={updateFormControl}
                                className='border-2 p-2'
                                type='email'
                                id='email'
                                value={formState?.email}
                            />
                        </div>
                        <div className='my-2 flex flex-col'>
                            <label htmlFor="message">Message</label>
                            <textarea
                                onChange={updateFormControl}
                                className='border-2 p-2'
                                id='message'
                                value={formState?.message}
                            ></textarea>
                        </div>
                        {/* <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaKey} onChange={updateRecaptchaToken}/> */}
                        <button disabled={submitting}
                            className='mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200'>
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;