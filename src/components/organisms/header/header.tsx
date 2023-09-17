import React from 'react'

import { IconLinkList, IconLinkListProps } from '@components/molecules/'
import * as styles from './header.module.css'

interface Props {
  socialMediaLinks: IconLinkListProps['links']
}

export const Header = ({ socialMediaLinks }: Props) => (
  <header className={styles.header}>
    <IconLinkList links={socialMediaLinks} />
  </header>
)
