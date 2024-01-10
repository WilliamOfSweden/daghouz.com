import React, { ComponentProps } from 'react'

import * as subscriptionLabelStyles from './subscriptionLabel.module.css'

export const SubscriptionLabel = (props: ComponentProps<'label'>) => (
  <label className={subscriptionLabelStyles.label} htmlFor='email' {...props}>
    @
  </label>
)
