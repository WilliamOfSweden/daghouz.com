import React from 'react'
import styled from 'styled-components'

import THEME from '../../styles/theme'

const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${THEME.spacing(10)});
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: ${THEME.spacing(5)};
    width: 100%;

    input,
    textarea {
      background-color: ${THEME.palette.bg};
      border: none;
      border-bottom: 2px solid ${THEME.palette.primary};
      color: ${THEME.palette.text};
      height: 40px;
      padding: ${THEME.spacing(1)};

      &:focus {
        outline: 2px solid ${THEME.palette.primary};
      }
    }

    textarea {
      height: 100px;
      resize: none;
    }
  }

  button {
    background: ${THEME.palette.primary};
    border: none;
    border-radius: ${THEME.shapes(1)};
    color: ${THEME.palette.text};
    cursor: pointer;
    font-family: ${THEME.fonts.body};
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin-top: ${THEME.spacing(4)};
    padding: ${THEME.spacing(1.5)};
    text-align: center;
    text-transform: uppercase;
    transition: background-color 0.33s ease;

    &:hover {
      background: ${THEME.palette.primary}cc;
    }

    @media (min-width: ${THEME.breakpoints.sm}) {
      width: 238px;
    }
  }
`

const ContactForm = () => (
  <StyledForm
    autoComplete='on'
    name='contact-form'
    method='POST'
    encType='application/x-www-form-urlencoded'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
    id='contact-form'
  >
    <input type='hidden' name='form-name' value='contact-form' />
    <p hidden>
      <label>
        <input name='bot-field' />
      </label>
    </p>
    <div>
      <label htmlFor='name'>Name *</label>
      <input
        araia-invalid={false}
        autoComplete=''
        id='name'
        name='name'
        required
      />
    </div>
    <div>
      <label htmlFor='email'>Email *</label>
      <input
        araia-invalid={false}
        id='email'
        name='email'
        required
        type='email'
      />
    </div>
    <div>
      <label htmlFor='organization'>Company</label>
      <input
        araia-invalid={false}
        id='organization'
        name='organization'
        type='text'
      />
    </div>
    <div>
      <label htmlFor='message'>Message</label>
      <textarea required id='message' name='message' />
    </div>
    <button name='send' type='submit'>
      Send
    </button>
  </StyledForm>
)

export default ContactForm
