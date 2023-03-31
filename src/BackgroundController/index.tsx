import React, { ReactNode } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
interface BackgroundControllerProps {
  children: ReactNode;
}

const ParentContainer = styled.div`
  min-height: 100vh;
`;

const BackgroundContainer = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  background-color: ${(props) => props.selectedColorhex};
  position: fixed;
  width : 100vw;
  height : 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  @media(max-width:768px){
    width:100%;
    height:100%;
  }
`;

const RectangleOne = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
 position: fixed;
   left: 0;
  top: 0;
  width: 36.25rem;
height: 28.125rem;
  background: linear-gradient(to top left, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 0 0 580px 0;
`;

const RectangleTwo = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
 position: fixed;
  right: 0;
  top: 0;
 width: 36.25rem;
height: 28.125rem;
  background: linear-gradient(to top right, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 0 0 0 580px;
`;

const RectangleThree = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 39.375rem;
height: 25rem;

  background: linear-gradient(to top right, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 630px 630px 0 0;
  margin: 0 auto;
 
  @media(max-width:576px){
    height: 38rem;
  }
`;



const BackgroundController = ({ children }: BackgroundControllerProps) => {

  const selectedColor = useSelector((state: RootState) => state.app.selectedColor);
  console.log(selectedColor);
  return (
    <>
      
      <BackgroundContainer selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} />
      <RectangleOne selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} ></RectangleOne>
      <RectangleTwo selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} ></RectangleTwo>
      <RectangleThree selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec}  ></RectangleThree >
      {children}
    </ >
  );
};

export default BackgroundController;

