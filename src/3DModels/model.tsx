import React from 'react';
import { Model } from './QUARTZS';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

function Controls() {
    const { gl: { domElement } } = useThree();
    const width = 100;
    const height = 100;
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const center = new THREE.Vector3();

    camera.lookAt(center);

    return <OrbitControls args={[camera, domElement]} />
}

const StyledCanvas = styled(Canvas)`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
`;

const ProductModel2 = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // styles for screens up to 767px wide
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // styles for screens between 768px and 1023px wide
    const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // styles for screens wider than 1023px

    return (
        <>
            {isSmallScreen && <StyledCanvas style={{ height: '200px', width: 'auto' }} shadows camera={{ position: [4, 0, -12], fov: 35 }}>  <ambientLight />
                <Stage intensity={1.5} environment="city" shadows={{ type: 'accumulative', colorBlend: 2, opacity: 2 }} adjustCamera={0.9}>
                    <Model />
                </Stage>
                <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
            {isMediumScreen && <StyledCanvas style={{ height: '400px', width: 'auto' }}> <ambientLight />
                <pointLight position={[2, 2, 1]} />
                <pointLight position={[-3, -3, 2]} />
                <Controls />
                <Model />
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
            {isLargeScreen && <StyledCanvas style={{ height: '600px', width: '800px' }} shadows camera={{ position: [4, 0, -12], fov: 35 }}>
                <Stage adjustCamera={1}>
                    <ambientLight />
                    
                    <Model />
                </Stage>
                <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
        </>
    );
};


export default ProductModel2;
