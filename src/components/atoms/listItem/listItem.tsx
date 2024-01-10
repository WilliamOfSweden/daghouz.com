import React, { ComponentProps } from 'react'

import * as listItemStyles from './listItem.module.css'

export const ListItem = (props: ComponentProps<'li'>) => (
  <li className={listItemStyles.li} {...props} />
)
