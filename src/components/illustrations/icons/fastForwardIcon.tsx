import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  height: 2.7rem;
  margin-bottom: 1rem;

  .ecc8b8ec-319d-4bba-8418-2433b4171d07 {
    fill: #8755eb;
  }

  .fba174ff-7d02-437a-bd98-a555db5ef000 {
    fill: #00bfff;
    opacity: 0.85;
  }
`

const FastForwardIcon = () => {
  return (
    <StyledSVG
      data-name='Layer 1'
      id='ee5326b1-07bf-4a8a-891a-4a11c2b6f04c'
      viewBox='0 0 223.545 180.051'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='ecc8b8ec-319d-4bba-8418-2433b4171d07'
        d='M138.8,113.25c11.66-7.287,11.66-19.212,0-26.5L21.2,13.25C9.54,5.962,0,11.25,0,25V175c0,13.75,9.54,19.038,21.2,11.75Z'
        transform='translate(0 -9.975)'
      />

      <path
        className='fba174ff-7d02-437a-bd98-a555db5ef000'
        d='M214.8,113.25c11.66-7.287,11.66-19.212,0-26.5L97.2,13.25C85.54,5.962,76,11.25,76,25V175c0,13.75,9.54,19.038,21.2,11.75Z'
        transform='translate(0 -9.975)'
      />
    </StyledSVG>
  )
}

export default FastForwardIcon
