import React from 'react'

import { IconLink } from '@components/atoms/'
import * as styles from './iconLinkList.module.css'

export interface IconLinkListProps {
  links: {
    ariaLabel: string
    icon: { svg: { content: string } }
    id: string
    link: string
  }[]
}

export const IconLinkList = ({ links }: IconLinkListProps) => (
  <ul className={styles.ul}>
    {links.map(link => (
      <li key={link.id}>
        <IconLink
          aria-label={link.ariaLabel}
          href={link.link}
          svgContent={link.icon.svg.content}
        />
      </li>
    ))}
  </ul>
)
