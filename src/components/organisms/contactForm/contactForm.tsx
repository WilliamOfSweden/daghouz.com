import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Button } from '@components/atoms'
import * as styles from './contactForm.module.css'

export interface ContactFormDataProps {
  contactForm: {
    companyInputLabelText: string
    emailInputLabelText: string
    messageInputLabelText: string
    nameInputLabelText: string
    submitButtonText: string
  }
}

export const ContactForm = () => {
  const { contactForm } = useStaticQuery<ContactFormDataProps>(graphql`
    query ContactForm {
      contactForm {
        companyInputLabelText
        emailInputLabelText
        messageInputLabelText
        nameInputLabelText
        submitButtonText
      }
    }
  `)

  return (
    <form
      autoComplete='on'
      className={styles.form}
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      encType='application/x-www-form-urlencoded'
      id='contact-form'
      method='POST'
      name='contact-form'
    >
      <p hidden>
        <label htmlFor='bot-field'>BOT FIELD</label>
        <input name='bot-field' />
      </p>
      <label className='bg-main block text-sm font-bold mb-2' htmlFor='name'>
        *&nbsp;{contactForm.nameInputLabelText}
      </label>
      <input
        autoComplete='name'
        id='name'
        name='name'
        required={true}
        type='text'
      />
      <label className='bg-main block text-sm font-bold mb-2' htmlFor='email'>
        *&nbsp;{contactForm.emailInputLabelText}
      </label>
      <input
        autoComplete='email'
        id='email'
        name='email'
        required={true}
        type='email'
      />
      <label htmlFor='organization'>{contactForm.companyInputLabelText}</label>
      <input
        autoComplete='organization'
        id='organization'
        name='organization'
        type='text'
      />
      <label className='bg-main block text-sm font-bold mb-2' htmlFor='message'>
        *&nbsp;{contactForm.messageInputLabelText}
      </label>
      <textarea id='message' name='message' required={true}></textarea>
      <Button buttonText={contactForm.submitButtonText} type='submit' />
    </form>
  )
}
