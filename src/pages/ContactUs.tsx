import { useEffect } from "react";
import { useContactForm } from "../hooks/useContactForm";

export const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { formState, submitting, message, submitForm, updateFormControl } = useContactForm();

    return (
        <div className='flex flex-col justify-between sm:px-24 px-6 py-8'>
            <h1 className='font-poppins font-semibold xs:text-[28px] md:text-[36px] text-[30px] leading-tight w-full text-center sm:pb-10 pb-2'>
                Contact Us
            </h1>
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







// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import axios from "axios";

// type FormState = {
//     email: string;
//     name: string;
//     message: string;
// };

// type ServiceMessage = {
//     class: string;
//     text: string;
// };

// export const ContactUs = () => {

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     });

//     const formId = "xdXy6LgPr";
//     const formSparkUrl = `https://submit-form.com/${formId}`;

//     const regName = /^[a-zA-Z ]+$/;
//     const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     const initialFormState = {
//         email: '',
//         name: '',
//         message: '',
//     };

//     const [formState, setFormState] = useState<FormState>(initialFormState);
//     const [submitting, setSubmitting] = useState<boolean>(false);
//     const [message, setMessage] = useState<ServiceMessage>();
    
//     const submitForm = async (event: FormEvent) => {
//         event.preventDefault();
//         // Validate all fields before proceeding
//         const isNameValid = formState.name !== '' && regName.test(formState.name);
//         const isEmailValid = formState.email !== '' && regEmail.test(formState.email);
//         const isMessageValid = formState.message !== '';
        
//         if (!isNameValid) {
//             setMessage({
//                 class: "bg-red-500",
//                 text: "*Name is required and must contain only letters and spaces.",
//             });
//             return;
//         } else if (!isEmailValid) {
//             setMessage({
//                 class: "bg-red-500",
//                 text: "*Valid email is required.",
//             });
//             return;
//         } else if (!isMessageValid) {
//             setMessage({
//                 class: "bg-red-500",
//                 text: "*Please leave your message.",
//             });
//             return;
//         }

//         // If everything is valid, submit the form
//         setSubmitting(true);
//         await postSubmission();
//         setSubmitting(false);
//     };

//     const postSubmission = async () => {
//         const payload = {
//             ...formState,
//         };

//         try {

//             // validate name input field
//             if (formState.name === '') {
//                 setMessage({
//                     class: "bg-red-500",
//                     text: "*Name is required",
//                 });
//             } 
//             else if (!regName.test(formState.name)) {
//                 setMessage({
//                     class: "bg-red-500",
//                     text: "*Only letters and white spaces allowed in Name Field",
//                 });
//             }

//             // validate email input field
//             else if (formState.email === '') {
//                 setMessage({
//                     class: "bg-red-500",
//                     text: "*EMail is required",
//                 });
//             } 
//             else if (!regEmail.test(formState.email)) {
//                 setMessage({
//                     class: "bg-red-500",
//                     text: "*Invalid Email Format",
//                 });
//             }

//             //validate messege input field
//             else if (formState.message === '') {
//                 setMessage({
//                     class: "bg-red-500",
//                     text: "*Please leave your message",
//                 });
//             } 
//                 const result = await axios.post(formSparkUrl, payload);
//                 console.log(result);
//                 setMessage({
//                     class: 'bg-green-500',
//                     text: 'Thanks, someone will be in touch shortly.',
//                 });
//                 setFormState(initialFormState);
//         } catch (error) {
//             console.log(error);
//             setMessage({
//                 class: 'bg-red-500',
//                 text: 'Sorry, there was a problem. Please try again or contact support.',
//             });
//         }
//     };

//     const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//             const { id, value } = event.target;
//             const formKey = id as keyof FormState;
//             const updatedFormState = { ...formState };
//             updatedFormState[formKey] = value;
//             setFormState(updatedFormState);
//     };

//     return (
//         <div className='flex flex-col justify-between sm:px-24 px-6 sm:py-4 py-2'>
//             <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center sm:pb-10 pb-2'>
//                     Contact Us
//             </h1>
//             <div className='h-full flex justify-center flex-col pb-8'>
//                 <div className='sm:w-2/3 w-[100%] sm:m-auto m-0 sm:p-8 p-3 shadow-lg'>
//                     {message && (
//                         <div className={`my-4 text-white w-full p-4 ${message.class}`}>
//                             {message.text}
//                         </div>
//                     )}
//                     <form onSubmit={submitForm} className='flex flex-col'>
//                         <div className='my-2 flex flex-col'>
//                             <label htmlFor='name'>Name</label>
//                             <input
//                                 onChange={updateFormControl}
//                                 className='border-2 p-2'
//                                 type='text'
//                                 id='name'
//                                 value={formState?.name}
//                             />
//                         </div>
//                         <div className='my-2 flex flex-col'>
//                             <label htmlFor='email'>Email</label>
//                             <input
//                                 onChange={updateFormControl}
//                                 className='border-2 p-2'
//                                 type='email'
//                                 id='email'
//                                 value={formState?.email}
//                             />
//                         </div>
//                         <div className='my-2 flex flex-col'>
//                             <label htmlFor="message">Message</label>
//                             <textarea
//                                 onChange={updateFormControl}
//                                 className='border-2 p-2'
//                                 id='message'
//                                 value={formState?.message}
//                             ></textarea>
//                         </div>
//                         <button disabled={submitting}
//                             className='mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200'>
//                             {submitting ? 'Submitting...' : 'Submit'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };


        // <div className='flex flex-col justify-between sm:px-24 px-6 sm:py-4 py-2'>
        //     <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center sm:pb-10 pb-2'>
        //         Contact Us
        //     </h1>
        //     <div className='h-full flex justify-center flex-col pb-8'>
        //         <div className='sm:w-2/3 w-[100%] sm:m-auto m-0 sm:p-8 p-3 shadow-lg'>
        //             {message && <div className={`my-4 text-white w-full p-4 ${message.class}`}>{message.text}</div>}
        //             <form onSubmit={submitForm} className='flex flex-col'>
        //                 <input className='border-2 p-2' type='text' id='name' value={formState.name} onChange={updateFormControl} placeholder="Name" />
        //                 <input className='border-2 p-2' type='email' id='email' value={formState.email} onChange={updateFormControl} placeholder="Email" />
        //                 <textarea className='border-2 p-2' id='message' value={formState.message} onChange={updateFormControl} placeholder="Message"></textarea>
        //                 <button disabled={submitting} className='mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900'>
        //                     {submitting ? 'Submitting...' : 'Submit'}
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </div>