import React, { Fragment } from 'react'

import { Script, WrapPageElementBrowserArgs } from 'gatsby'

import { getHotjarScript } from './src/scripts/'
import './src/styles/global.css'

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => (
  <Fragment>
    {element}
    <Script>{getHotjarScript()}</Script>
  </Fragment>
)
