import React, { Fragment, ReactNode } from 'react'

import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { MARKS } from '@contentful/rich-text-types'

type Props = {
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference> | null
}

const renderRichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text?: ReactNode) => <strong>{text}</strong>,
  },
}

export const RichTextContent = ({ richText }: Props) => {
  if (!richText) return null

  return <Fragment>{renderRichText(richText, renderRichTextOptions)}</Fragment>
}
