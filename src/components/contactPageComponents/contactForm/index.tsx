import React from 'react'

import * as formStyles from './contactForm.module.css'

const ContactForm = () => (
  <form
    autoComplete='on'
    className={formStyles.form}
    data-netlify='true'
    data-netlify-honeypot='bot-field'
    id='contact-form'
    encType='application/x-www-form-urlencoded'
    method='POST'
    name='contact-form'
  >
    <input type='hidden' name='form-name' value='contact-form' />
    <p hidden>
      <label>
        <input name='bot-field' />
      </label>
    </p>
    <div className={formStyles.inputWrapper}>
      <label htmlFor='name'>Name *</label>
      <input
        araia-invalid={false}
        autoComplete=''
        className={formStyles.input}
        id='name'
        name='name'
        required
      />
    </div>
    <div className={formStyles.inputWrapper}>
      <label htmlFor='email'>Email *</label>
      <input
        araia-invalid={false}
        className={formStyles.input}
        id='email'
        name='email'
        required
        type='email'
      />
    </div>
    <div className={formStyles.inputWrapper}>
      <label htmlFor='organization'>Company</label>
      <input
        araia-invalid={false}
        className={formStyles.input}
        id='organization'
        name='organization'
        type='text'
      />
    </div>
    <div className={formStyles.inputWrapper}>
      <label htmlFor='message'>Message</label>
      <textarea
        className={formStyles.textarea}
        id='message'
        name='message'
        required
      />
    </div>
    <button className={formStyles.btn} name='send' type='submit'>
      Send
    </button>
  </form>
)

export default ContactForm
