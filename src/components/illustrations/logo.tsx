import React, { FC } from 'react'
import styled from 'styled-components'
import { PALETTE } from '../../styles/theme'


const StyledSVG = styled.svg`

    height: 2.33rem;

    .f2688ecd-c77e-4f5f-8407-cddd2399bd54 {
        
        fill: ${ PALETTE.primary };
      
    }

    .e786e155-940c-4094-8745-7f4e8190b902 {
    
        fill: ${ PALETTE.secondary };
    
    }

`

const Logo: FC = () => {

    return (
    
        <StyledSVG
            data-name='Layer 1'
            id='bea7267a-e44d-48cd-8511-7d25a9d5a5bc'
            viewBox='0 0 500 500'
            xmlns='http://www.w3.org/2000/svg'
        > 
        
            <rect className='f2688ecd-c77e-4f5f-8407-cddd2399bd54' width='500' height='500' rx='250'/>
  
            <g>
    
                <polygon className='e786e155-940c-4094-8745-7f4e8190b902' points='122.92 295.2 122.92 156.315 98.6 156.315 98.6 354.374 180.743 271.962 262.615 354.374 262.615 320.058 180.743 237.376 122.92 295.2'/>
            
                <path className='e786e155-940c-4094-8745-7f4e8190b902' d='M394.9,185.227a98.919,98.919,0,0,0-70.252-28.912H238.3V270.148l24.32,24.319V180.632h62.034a74.9,74.9,0,0,1,75.117,74.847c0,41.072-33.507,74.577-75.117,74.577H287.007v24.318h37.642A98.918,98.918,0,0,0,394.9,325.463a98.83,98.83,0,0,0,0-140.236Z' transform='translate(0 0)'/>
  
            </g>

        </StyledSVG>
    
    )

}


export default Logo
