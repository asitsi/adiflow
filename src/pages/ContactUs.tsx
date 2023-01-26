import React from 'react';
import { IFormInputValues } from '../types/interface';
import supabase from '../supabase';
import TextField from '@mui/material/TextField';

const ContactUs = () => {
    const [values, setValues] = React.useState<IFormInputValues>({ email: '', message: '', fullName: '', telephone: '', typeOfBusiness: '' });
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((previousValues) => ({
            ...previousValues,
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const { data, error } = await supabase
            .from('adiflow-web-contact')
            .insert([
                { email: values.email, message: values.message, fullName: values.fullName, telephone: values.telephone, typeOfBusiness: values.typeOfBusiness }
            ])
        // console.log(data,error)
        setLoading(false);
        setValues({ email: '', message: '', fullName: '', telephone: '', typeOfBusiness: '' })
    }

    return (
        <main>
            <div className='content'>
                <header className='content-header'>
                    <h1 className='content-main-heading'>Contact Adiflow</h1>
                    <h3 className='content-heading'>Feel free to get in touch with us.</h3>
                </header>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <TextField id="outlined-basic fullName" label="Full Name" variant="outlined" name="fullName" placeholder="Mr. Anyisob Baidoo" onChange={handleChange} value={values.fullName} />
                        <small>An identifiable name which we can use to contact you.</small>
                    </label>
                    <label htmlFor="email">
                        <TextField id="outlined-basic email" label="Email" variant="outlined" name="email" placeholder="e.g. user.email@domain.com" onChange={handleChange} value={values.email} />
                    </label>
                    <label htmlFor="telephone">
                        <TextField id="outlined-basic telephone" label="Telephone" variant="outlined" name="telephone" placeholder="e.g. +233(0)-392-498-2882" onChange={handleChange} value={values.telephone} />
                    </label>
                    <label htmlFor="typeOfBusiness">
                        <TextField id="outlined-basic typeOfBusiness" label="Type Of Business" variant="outlined" name="typeOfBusiness" placeholder="Type Of Business" onChange={handleChange} value={values.typeOfBusiness} />
                    </label>
                    <label htmlFor="message">
                        <TextField id="outlined-multiline-static message" multiline rows={4} label="Message" variant="outlined" name="message" placeholder="Message" onChange={handleChange} value={values.message} />
                        <small>Your contact message for us</small>
                    </label>
                    {loading ? <button type="submit" disabled={loading} className='content-form-button'>loading... </button> : <button type="submit" disabled={loading} className='content-form-button'>Submit</button>}
                </form>
            </div>
        </main>
    );
}

export default ContactUs;
