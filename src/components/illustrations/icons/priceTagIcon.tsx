import React, { FC } from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  height: 2.7rem;
  margin-bottom: 1rem;

  .b3f9b7aa-84a0-4c8b-b279-ea5b9da51738 {
    fill: #8755eb;
  }

  .e0a17bed-a420-40f9-bb55-9834376bb18f {
    fill: #00bfff;
    opacity: 0.85;
  }
`

const PriceTagIcon: FC = () => {
  return (
    <StyledSVG
      data-name='Layer 1'
      id='e1eaa5f7-9ff6-4e61-ad1b-e71b0b25c5d9'
      viewBox='0 0 177.426 200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='b3f9b7aa-84a0-4c8b-b279-ea5b9da51738'
        d='M174.3,45.755,128.836,2.726a9.961,9.961,0,0,0-13.694,0L69.679,45.755a9.73,9.73,0,0,0-3.11,7.753V186.775a10.016,10.016,0,0,0,10.017,10.016h90.805a10.016,10.016,0,0,0,10.017-10.016V53.508A9.73,9.73,0,0,0,174.3,45.755ZM121.989,57.879a16.243,16.243,0,1,1,16.242-16.242A16.242,16.242,0,0,1,121.989,57.879Z'
        transform='translate(0 0)'
      />

      <path
        className='e0a17bed-a420-40f9-bb55-9834376bb18f'
        d='M165.15,71.308,147.292,11.313a9.962,9.962,0,0,0-11.859-6.847L74.547,19a9.728,9.728,0,0,0-6.57,5.159L1.344,139.571A10.016,10.016,0,0,0,5.01,153.254l78.64,45.4a10.015,10.015,0,0,0,13.682-3.666L163.966,79.578A9.734,9.734,0,0,0,165.15,71.308ZM113.786,55.654a16.243,16.243,0,1,1,22.188-5.946A16.242,16.242,0,0,1,113.786,55.654Z'
        transform='translate(0 0)'
      />
    </StyledSVG>
  )
}

export default PriceTagIcon
