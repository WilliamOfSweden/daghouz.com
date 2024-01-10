import React, { ComponentProps } from 'react'

import * as subscribeFormStyles from './subscriptionForm.module.css'
import { Button, SubscriptionLabel } from '@components/atoms/'

interface Props extends ComponentProps<'form'> {
  buttonAriaLabel?: string | undefined
  buttonText: string | undefined
  emailInputLabelAriaLabel?: string | undefined
}

export const SubscriptionForm = ({
  buttonAriaLabel,
  buttonText,
  emailInputLabelAriaLabel,
  ...restProps
}: Props) => (
  <form
    autoComplete='on'
    className={subscribeFormStyles.form}
    data-netlify='true'
    encType='application/x-www-form-urlencoded'
    id='subscription-form'
    method='POST'
    name='subscription-form'
    {...restProps}
  >
    <SubscriptionLabel aria-label={emailInputLabelAriaLabel} />
    <input
      id='email'
      name='email'
      type='email'
      className={subscribeFormStyles.input}
    />
    <Button aria-label={buttonAriaLabel} buttonText={buttonText} />
  </form>
)
