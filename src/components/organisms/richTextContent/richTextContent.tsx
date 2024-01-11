import React, { Fragment, ReactNode } from 'react'

import { BLOCKS, MARKS, Node } from '@contentful/rich-text-types'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { ListItem } from '@components/atoms'
import { UnorderedList } from '@components/molecules'

type Props = {
  richText: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

const renderRichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text?: ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.LIST_ITEM]: (_node: Node, children: ReactNode) => {
      return <ListItem>{children}</ListItem>
    },
    [BLOCKS.UL_LIST]: (_node: Node, children: ReactNode) => (
      <UnorderedList>{children}</UnorderedList>
    ),
  },
}

export const RichTextContent = ({ richText }: Props) => (
  <Fragment>{renderRichText(richText, renderRichTextOptions)}</Fragment>
)
