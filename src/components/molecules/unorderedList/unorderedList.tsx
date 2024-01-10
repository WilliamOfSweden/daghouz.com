import React, { ComponentProps } from 'react'

import * as unorderedListStyles from './unorderedList.module.css'

export const UnorderedList = (props: ComponentProps<'ul'>) => (
  <ul className={unorderedListStyles.ul} {...props} />
)
