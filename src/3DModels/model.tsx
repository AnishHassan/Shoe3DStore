import React from 'react';
import { Model } from './QUARTZS';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';



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
            {isSmallScreen && <StyledCanvas style={{ height: '150px', width: '150px',overflow:"visible" }} shadows camera={{ position: [4, 0, -12], fov: 35 }}>  <ambientLight />
                <Stage intensity={1.5} environment="city" shadows={{ type: 'accumulative', colorBlend: 2, opacity: 2 }} adjustCamera={0.9}>
                    <Model />
                </Stage>
                <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
            {isMediumScreen && <StyledCanvas style={{ height: '400px', width: '400px' }}> <ambientLight />
                <pointLight position={[2, 2, 1]} />
                <pointLight position={[-3, -3, 2]} />
                <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                <Model />
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
            {isLargeScreen && <StyledCanvas style={{ height: '500px', width: '500px' }} shadows camera={{ position: [4, 0, -12], fov: 35 }}>
                <Stage adjustCamera={1.3}>
                    <ambientLight />
                    <Model />
                </Stage>
                <OrbitControls makeDefault />
               
            </StyledCanvas>}
        </>
    );
};


export default ProductModel2;
