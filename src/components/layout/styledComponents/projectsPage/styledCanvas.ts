import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'

const StyledCanvas = styled(Canvas)`
  height: 100%;
  padding-top: 97.375%;
  position: relative !important;

  & > canvas {
    position: absolute !important;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export default StyledCanvas
