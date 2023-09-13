import React, { ComponentProps } from 'react'

import * as styles from './iconLink.module.css'

type IconLinkProps = Omit<
  ComponentProps<'a'>,
  'children' | 'dangerouslySetInnerHTML'
> & {
  dangerouslySetInnerHTML:
    | {
        svg: { content: string | null } | null
      }
    | undefined
}

export const IconLink = ({
  dangerouslySetInnerHTML,
  ...restProps
}: IconLinkProps) => {
  if (!dangerouslySetInnerHTML?.svg?.content) return null

  return (
    <a
      className={styles.a}
      dangerouslySetInnerHTML={{
        __html: dangerouslySetInnerHTML.svg.content,
      }}
      {...restProps}
    />
  )
}
