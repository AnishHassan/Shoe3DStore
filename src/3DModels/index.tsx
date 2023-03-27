import React from 'react';
import { Model } from './QUARTZ';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'

function Controls() {
    const { gl: { domElement } } = useThree();
    const width = 100;
    const height = 100;
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    return <OrbitControls args={[camera, domElement]} />
}

const ProductModel = () => {
   

    return (
        <>
            <Canvas
                style={{ width: '60vw', height: '700px' }}
            >
                <ambientLight />
                <pointLight position={[2, 2, 1]} />
                <pointLight position={[-3, -3, 2]} />
                <Controls />
                <Model />
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </Canvas>
        </>
    );
};

export default ProductModel;
