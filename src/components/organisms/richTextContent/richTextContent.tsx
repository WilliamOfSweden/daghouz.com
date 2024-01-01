import React, { Fragment, ReactNode } from 'react'

import { MARKS } from '@contentful/rich-text-types'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

type Props = {
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

const renderRichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text?: ReactNode) => <strong>{text}</strong>,
  },
}

export const RichTextContent = ({ richText }: Props) => (
  <Fragment>{renderRichText(richText, renderRichTextOptions)}</Fragment>
)
