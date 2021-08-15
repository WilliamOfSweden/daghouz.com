import React, { FC, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus } from '@react-three/drei'

const TorusComponent: FC = () => {
    const mesh = useRef<THREE.Mesh>(null!)
    const factor = useMemo(() => 0.5 + Math.random(), [])

    useFrame(state => {
        const t = 1 + Math.sin(state.clock.getElapsedTime() * factor) / 5
        mesh.current.position.y = t
        mesh.current.rotation.y += t / 1000
        mesh.current.rotation.x += t / 1000
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
