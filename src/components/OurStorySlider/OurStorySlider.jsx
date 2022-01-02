/**
 * OurStorySlider
 * @description displays banners on Our Story page
 * @return {node} OurStorySlider component
 */

import React from 'react';
import { Box } from '@material-ui/core';
import Slider from 'react-slick';
import 'components/Slider/assets/slick.css';
import story1 from 'images/story1.jpeg';
import story2 from 'images/story2.jpeg';
import story3 from 'images/story3.jpeg';
import category1 from 'images/category1.jpeg';
import category2 from 'images/category2.jpeg';
import category3 from 'images/category3.jpeg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    paddingRight: '20px'
  }
}));
export default function OurStorySlider() {
  const classes = useStyles();

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500
  };

  return (
    <Box>
      <Slider {...settings} autoplay autoplaySpeed={1500}>
        <div className={classes.container}>
          <img src={story1} alt="banner" />
        </div>
        <div className={classes.container}>
          <img src={story2} alt="banner" />
        </div>
        <div className={classes.container}>
          <img src={story3} alt="banner" />
        </div>
        <div className={classes.container}>
          <img src={category1} alt="banner" />
        </div>
        <div className={classes.container}>
          <img src={category2} alt="banner" />
        </div>
        <div className={classes.container}>
          <img src={category3} alt="banner" />
        </div>
      </Slider>
    </Box>
  );
}
