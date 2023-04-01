import React from 'react';
import { Model } from './QUARTZS';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';



const StyledCanvas = styled(Canvas)`
  
 
  overflow:visible !important;
`;

const ProductModel2 = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // styles for screens up to 767px wide
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // styles for screens between 768px and 1023px wide
    const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // styles for screens wider than 1023px

    return (
        <>
            {isSmallScreen && <StyledCanvas style={{ height: '130px', width: '130px' }} shadows camera={{ position: [4, 0, -12], fov: 35 }}>  <ambientLight />
                <Stage intensity={1.5} environment="city" shadows={{ type: 'accumulative', colorBlend: 2, opacity: 2 }} adjustCamera={0.9}>
                    <Model />
                </Stage>
                <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

               
            </StyledCanvas>}
            {isMediumScreen && <StyledCanvas style={{ height: '300px', width: '300px' }}   camera={{ position: [4, 0, -12], fov: 35 }}> <ambientLight />
            <Stage adjustCamera={0.9}>
                    <ambientLight />
                    <Model />
                </Stage>
                <OrbitControls makeDefault />
             
            </StyledCanvas>}
            {(isLargeScreen) && <StyledCanvas style={{ height: '500px', width: '500px' }} shadows camera={{ position: [4, 0, -12], fov: 35 }}>
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
