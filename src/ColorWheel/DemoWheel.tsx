import React, { useState } from 'react';
import styled from 'styled-components';
import './DemoWheel.css'

// import ColourWheel from "./components/colour-wheel/ColourWheel";
const yourDefaultColour = "rgb(255, 255, 255)";


type ColorWheelProps = {
  size: number;
};

// type ColorButtonProps = {
//   color: string;
//   isSelected: boolean;
// };

// const colors = [
//   '#ff0000', // Red
//   '#ff8000', // Orange
//   '#ffff00', // Yellow
//   '#80ff00', // Chartreuse
//   '#00ff00', // Green
//   '#00ff80', // Spring Green
//   '#00ffff', // Cyan
//   '#0080ff', // Azure
//   '#0000ff', // Blue
//   '#8000ff', // Violet
//   '#ff00ff', // Magenta
//   '#ff0080', // Rose
// ];

const ColorWheel2: React.FC<ColorWheelProps> = ({ size }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorButtonClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div id="colorWheel">
      <span className="color01"></span>
      <span className="color02"></span>
      <span className="color03"></span>
      <span className="color04"></span>
      <span className="color05"></span>
      <span className="color06"></span>
      <span className="color07"></span>
      <span className="color08"></span>
      <span className="color09"></span>
      <span className="color10"></span>
      <span className="color11"></span>
      <span className="color12"></span>
      <span className="color13"></span>
      <span className="color14"></span>
      <span className="color15"></span>
      <span className="color16"></span>
      <span className="color17"></span>
      <span className="color18"></span>
      <span className="color19"></span>
      <span className="color20"></span>
      <span className="color21"></span>
      <span className="color22"></span>
      <span className="color23"></span>
      <span className="color24"></span>
    </div>
  );
};

// const ColorWheelWrapper = styled.div<{ size: number }>`
//   position: relative;
//   width: ${({ size }) => size}px;
//   height: ${({ size }) => size}px;
//   border-radius: 50%;
//   background-image: conic-gradient(${colors.join(', ')});
// `;

// const ColorButton = styled.button<ColorButtonProps>`
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: 2px solid ${({ isSelected }) => (isSelected ? '#fff' : 'transparent')};
//   background-color: ${({ color }) => color};
//   cursor: pointer;
// `;

export default ColorWheel2;
