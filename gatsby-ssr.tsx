import React, { Fragment } from 'react'

import { RenderBodyArgs, Script, WrapPageElementBrowserArgs } from 'gatsby'

import { getHotjarScript } from './src/scripts/'

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => (
  <Fragment>
    {element}
    <Script>{getHotjarScript()}</Script>
  </Fragment>
)

export const onRenderBody = ({ setHtmlAttributes }: RenderBodyArgs) => {
  setHtmlAttributes({ lang: 'en' })
}
