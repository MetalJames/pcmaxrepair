import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

const formId = "xdXy6LgPr";
const formSparkUrl = `https://submit-form.com/${formId}`;

const regName = /^[a-zA-Z ]+$/;
const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type FormState = {
    email: string;
    name: string;
    message: string;
};

type ServiceMessage = {
    class: string;
    text: string;
};

export const useContactForm = () => {
    const [formState, setFormState] = useState<FormState>({ email: '', name: '', message: '' });
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();

    const validateForm = (): boolean => {
        if (!regName.test(formState.name)) {
            setMessage({ class: "bg-red-500", text: "*Only letters and spaces allowed in Name Field" });
            return false;
        }
        if (!regEmail.test(formState.email)) {
            setMessage({ class: "bg-red-500", text: "*Invalid Email Format" });
            return false;
        }
        if (formState.message === '') {
            setMessage({ class: "bg-red-500", text: "*Please leave your message" });
            return false;
        }
        return true;
    };

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();
        if (!validateForm()) return;

        setSubmitting(true);
        try {
            await axios.post(formSparkUrl, formState);
            setMessage({ class: 'bg-green-500', text: 'Thanks, someone will be in touch shortly.' });
            setFormState({ email: '', name: '', message: '' });
        } catch (error) {
            setMessage({ class: 'bg-red-500', text: 'Sorry, there was a problem. Please try again.' });
        }
        setSubmitting(false);
    };

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
    };

    return { formState, submitting, message, submitForm, updateFormControl };
};