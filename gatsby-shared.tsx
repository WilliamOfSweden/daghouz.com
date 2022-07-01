import React, { Fragment } from 'react'
import { Script, WrapPageElementBrowserArgs } from 'gatsby'

import { getHotjarScript } from './src/scripts/getHotjarScript'

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => (
  <Fragment>
    {element}
    <Script>
      {getHotjarScript()}
    </Script>
  </Fragment>
)
