/**
 * CategorySlider
 * @description banners slider for the top of the category page
 * @return {node} Category slider
 */

import React from 'react';
import 'components/Slider/assets/slick.css';
import Slider from 'react-slick';
import Box from '@material-ui/core/Box';
import { SampleNextArrow, SamplePrevArrow } from 'components/SliderArrows/SliderArrows';
import categorySlider1 from 'images/categorySlider1.webp';
import categorySlider2 from 'images/categorySlider2.webp';
import categorySlider3 from 'images/categorySlider3.webp';

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
