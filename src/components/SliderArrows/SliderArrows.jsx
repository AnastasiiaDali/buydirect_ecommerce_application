/**
 * SliderArrows
 * @description styled arrors for slider components
 * @returns {node} SliderArrows component
 */

import React from 'react';

export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ position: 'absolute', right: '20px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ position: 'absolute', left: '20px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}
