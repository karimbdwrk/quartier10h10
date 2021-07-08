import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
// import { useState } from 'react'
// import { fetchAPI } from '../utils/api'
import * as yup from 'yup'

import emailjs from 'emailjs-com';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const resetForm = () => {
    const form = document.getElementById('contactForm')
    setTimeout(() => {
      form.querySelectorAll('input').forEach(element => element.value = '')
      form.querySelector('textarea').value = ''
    }, 500)
    console.log('resetForm')
}

const validationSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup.string()
        .email('invalid email')
        .required('Required'),
    subject: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})

const ContactForm = () => (
  <div>
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await sleep(500);
        console.log(JSON.stringify(values, null, 2));
        fetch('https://quartier10h10-admin.herokuapp.com/contact-forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,

            }),
        })
        .then(response => response.json())
        .then(data => console.log(data));

        resetForm()
      }}
    >
      {({ isSubmitting }) => (
        <Form id="contactForm">
            <div className="inputs">
                <div><Field name="name" placeholder="Name *" /></div>
                <div><Field name="email" placeholder="Email *" type="email" /></div>
            </div>
            <div className="sujet">
                <Field name="subject" placeholder="Subject *" />
            </div>
            <div className="textarea">
                <Field name="message" placeholder="Message *" as="textarea" />
            </div>
            <button type="submit" disabled={isSubmitting ? 'disabled' : ''}>
                Submit
            </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default ContactForm