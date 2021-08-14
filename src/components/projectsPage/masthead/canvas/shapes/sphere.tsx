import React, { FC, useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

const SphereComponent: FC = () => {
    const mesh = useRef<THREE.Mesh>(null!)
    const factor = useMemo(() => 0.5 + Math.random(), [])

    useFrame(state => {
        const t = 1 + Math.sin(state.clock.getElapsedTime() * factor) / 5
        mesh.current.position.y = t * 2 + 1.5
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
