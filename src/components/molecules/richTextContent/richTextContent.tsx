import React, { Fragment, ReactNode } from 'react'

import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { MARKS } from '@contentful/rich-text-types'

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
