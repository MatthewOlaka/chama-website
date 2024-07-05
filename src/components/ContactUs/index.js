import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import "../styles.scss";
import emailjs from 'emailjs-com';
import SuccessModal from '../Generic/Modal';
import Modal from 'react-modal';


// Initialize EmailJS (you'll need to sign up for an account and get the required keys)
const serviceID = 'service_hidlct2';
const templateID = 'template_xs1i3dj';
const userID = 'r9VcOclcSZfkVU1lU';

const ContactUs = () => {
    Modal.setAppElement('#root');
    const { register, handleSubmit, control, watch, formState: { errors }, reset } = useForm();
    console.log('formValues :', watch());
    console.log('errors :', errors);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [status, setStatus] = useState('');

    const onSubmit = data => {
        setStatus('')
        data.reason = data.reason.label;
        emailjs.send(serviceID, templateID, data, userID)
            .then((response) => {
                reset();
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success')
                setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
            }, 5000);
            }, (err) => {
                console.log('FAILED...', err);
                setStatus('fail')
                reset();
            });
    };

    const options = [
        { value: 'other', label: 'Other' },
        { value: 'account-deletion', label: 'Account Deletion' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'support', label: 'Support' },
        { value: 'sales', label: 'Sales' },
    ];

    return (
        <div className='form-container'>
            <form className='form-inner-container' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-wrapper'>
                    <h1 className='form-title'>Contact Us</h1>
                    <p className='form-subtitle'>Let us know your queries and we will get back to you in 1-3 business days!</p>
                    <div className='text-field-row'>
                        <div className='text-field-wrapper'>
                            <input className={ `text-field ${errors.fname && "error-styling"}` } placeholder='First Name' type='fname' {...register('fname', { required: true })} />
                            {errors.fname && <span className='error-text'>This field is required</span>}
                        </div>
                        <div className='text-field-wrapper'>
                            <input className={ `text-field ${errors.lname && "error-styling"}` } placeholder='Last Name' type='lname' {...register('lname')} />
                            {errors.lname && <span className='error-text'>This field is required</span>}
                        </div>
                    </div>
                    <div className='text-field-row'>
                        <div className='text-field-wrapper'>
                            <input className={ `text-field ${errors.email && "error-styling"}` } placeholder='Email' type="email" {...register('email', { required: true })} />
                            {errors.email && <span className='error-text'>This field is required</span>}
                        </div>

                        <div className='text-field-wrapper'>
                            <input className={ `text-field ${errors.phone && "error-styling"}` } placeholder='Phone Number' type="tel" {...register('phone')} />
                        </div>
                    </div>
                    <div className='text-field-wrapper'>
                        <p className='label-text'>Reason</p>
                        <Controller
                            name="reason"
                            control={control}
                            defaultValue={options[0]}
                            render={({ field }) => (
                            <Select
                                className='select-field'
                                {...field}
                                options={options}
                            />
                            )}
                        />
                        {errors.reason && <span className='error-text'>This field is required</span>}
                    </div>
                    <div className='text-field-wrapper'>
                        <textarea className={ `text-area ${errors.message && "error-styling"}` } placeholder='Message' {...register('message', { required: true })}></textarea>
                        {errors.message && <span className='error-text'>This field is required</span>}
                    </div>
                    <button className='submit-button' type="submit">Submit</button>
                </div>
            </form>
            <SuccessModal type={ status } isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />

        </div>
    );
};

export default ContactUs;
