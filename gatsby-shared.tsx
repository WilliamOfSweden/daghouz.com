import React, { Fragment } from 'react'
import { Script, WrapPageElementBrowserArgs } from 'gatsby'

type hjFunc = {
  (): void
  q?: any[]
}
interface ExtendedWindow extends Window {
  hj?: hjFunc
  _hjSettings?: {
    hjid: number
    hjsv: number
  }
}

export const wrapPageElement = ({ element }: WrapPageElementBrowserArgs) => (
  <Fragment>
    {element}
    <Script>
      {`
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3033272,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
    </Script>
  </Fragment>
)
