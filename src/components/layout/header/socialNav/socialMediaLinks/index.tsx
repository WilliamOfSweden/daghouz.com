import React, { Fragment } from 'react'

import { links } from './links'

export const SocialMediaLinks = () => (
  <Fragment>
    {links.map(({ ariaName, link, icon }) => (
      <a
        aria-label={`Link to ${ariaName} account.`}
        href={link}
        key={link}
        rel='noreferrer noopener'
        target='_blank'
      >
        {icon}
      </a>
    ))}
  </Fragment>
)
