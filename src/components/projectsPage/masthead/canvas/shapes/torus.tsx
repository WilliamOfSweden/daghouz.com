import React, { FC, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus } from '@react-three/drei'

const TorusComponent: FC = () => {
    const mesh = useRef<THREE.Mesh>(null!)

    useFrame(state => {
        mesh.current.rotation.y = state.clock.getElapsedTime() / 2
        mesh.current.rotation.x = state.clock.getElapsedTime() / 3
    })

    return (
        <Torus
            castShadow
            ref={mesh}
            args={[1.5, 0.75, 24, 24]}
            position={[7, 0, 0]}
        >
            <meshStandardMaterial
                color='#000055'
                roughness={0.5}
                metalness={0}
                wireframe
            />
        </Torus>
    )
}

export default TorusComponent
