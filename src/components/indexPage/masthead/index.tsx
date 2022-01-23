import React from 'react'

import { DefaultSectionData } from '../../../@types/'
import * as mastheadStyles from './masthead.module.css'
import TextWrapper from './textWrapper/'
// import MobileImage from './mobileImage'
import Canvas from './canvas/'
import ContactButton from './contactButton/'

interface MastheadData extends DefaultSectionData {
  coloredTitle: string
}

interface Props {
  mastheadData: MastheadData
}

const Masthead = ({ mastheadData }: Props) => (
  <section className={`${mastheadStyles.masthead} container`}>
    <TextWrapper sectionContent={mastheadData} />
    {/* <MobileImage /> */}
    <Canvas />
    <ContactButton limitedVisibility='mobile-only' />
  </section>
)

export default Masthead
