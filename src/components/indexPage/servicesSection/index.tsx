import React from 'react'

import * as servicesSectionStyles from './servicesSection.module.css'
import JamstackLogo from '../../illustrations/brandLogos/jamstackLogo'
import PwaLogo from '../../illustrations/brandLogos/pwaLogo'
import AmpLogo from '../../illustrations/brandLogos/ampLogo'

const ServicesSection = () => (
  <section className={`${servicesSectionStyles.section} container`}>
    <div className={servicesSectionStyles.serviceWrapper}>
      <JamstackLogo />
      <h2>Jamstack</h2>
      <p>
        Leverage modern web architecture to your advantage by providing your
        customers with state-of-the-art web experiences.
      </p>
    </div>
    <div className={servicesSectionStyles.serviceWrapper}>
      <PwaLogo />
      <h2>Progressive Web Apps</h2>
      <p>
        You don't have to choose between a website or an app. With PWA's you get
        the power of both to the price one.
      </p>
    </div>
    <div className={servicesSectionStyles.serviceWrapper}>
      <AmpLogo />
      <h2>Accelerated Mobile Pages</h2>
      <p>
        Stand out from the competition with ultra-modern AMP's, specifically
        developed for extreme performance on mobile devices.
      </p>
    </div>
  </section>
)

export default ServicesSection
