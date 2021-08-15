import React, { FC, useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

const BoxComponent: FC = () => {
    const mesh = useRef<THREE.Mesh>(null!)
    const factor = useMemo(() => 0.5 + Math.random(), [])

    useFrame(state => {
        const t = 1 + Math.sin(state.clock.getElapsedTime() * factor) / 5
        mesh.current.position.y = t * 2 + 8
        mesh.current.rotation.z = t + 10
    })

    return (
        <RoundedBox
            castShadow
            ref={mesh}
            radius={0.3}
            args={[2, 2, 2]}
            position={[5, 0, -8]}
        >
            <meshStandardMaterial
                color='darkorange'
                roughness={0.5}
                metalness={0.1}
            />
        </RoundedBox>
    )
}

export default BoxComponent
