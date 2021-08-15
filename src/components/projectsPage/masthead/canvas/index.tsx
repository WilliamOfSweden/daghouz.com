import React, { FC, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { softShadows } from '@react-three/drei'
import SphereComponent from './shapes/sphere'
import PlaneComponent from './shapes/plane'
import BoxComponent from './shapes/box'
import TorusComponent from './shapes/torus'

softShadows()

const MyCanvas: FC = () => {
    return (
        <Canvas
            shadows
            gl={{ alpha: true, precision: 'highp' }}
            camera={{ position: [-5, 2, 10], fov: 60 }}
            style={{
                position: `absolute`,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            <ambientLight intensity={0.4} />
            <directionalLight
                castShadow
                position={[2.5, 8, 5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight
                position={[-10, 0, -20]}
                color='#8755eb'
                intensity={2.5}
            />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <Suspense fallback={null}>
                <group position={[0, -5, 0]}>
                    <PlaneComponent />
                    <SphereComponent />
                    <BoxComponent />
                    <TorusComponent />
                </group>
            </Suspense>
        </Canvas>
    )
}

export default MyCanvas
