import React, { FC, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

const SphereComponent: FC = () => {
    const mesh = useRef<THREE.Mesh>(null!)

    useFrame(state => {
        mesh.current.position.y =
            Math.sin(state.clock.getElapsedTime() * 0.8) + 3
    })

    return (
        <Sphere castShadow ref={mesh} position={[-3.5, 0, 0]}>
            <meshStandardMaterial
                color='#8755eb'
                roughness={0.5}
                metalness={0.1}
            />
        </Sphere>
    )
}

export default SphereComponent
