import React from 'react';
import { Box } from '@material-ui/core';
import Slider from 'react-slick';
import categorySlider1 from 'images/categorySlider1.jpeg';
import categorySlider2 from 'images/categorySlider2.jpeg';
import categorySlider3 from 'images/categorySlider3.jpeg';
import './assets/slick.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ position: 'absolute', right: '20px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ position: 'absolute', left: '20px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default function CategorySlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Box display={{ xs: 'none', md: 'block', position: 'relative' }}>
      <Slider {...settings}>
        <div>
          <img src={categorySlider1} alt="banner" />
        </div>
        <div>
          <img src={categorySlider2} alt="banner" />
        </div>
        <div>
          <img src={categorySlider3} alt="banner" />
        </div>
      </Slider>
    </Box>
  );
}
