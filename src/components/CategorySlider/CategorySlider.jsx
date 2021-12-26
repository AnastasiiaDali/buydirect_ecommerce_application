import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { makeStyles } from '@material-ui/core/styles';
import allBanner from 'images/allBanner.png';
import womenBanner from 'images/womenBanner.jpeg';
import menBanner from 'images/menBanner.jpeg';
import { Box } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

const images = [{ url: allBanner }, { url: womenBanner }, { url: menBanner }];
const useStyles = makeStyles(() => ({
  sliderContainer: {
    width: '100%',
    margin: '50px 0 50px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  slider: {}
}));

const CategorySlider = ({ width }) => {
  const classes = useStyles();
  console.log(width);
  return (
    <Box className={classes.sliderContainer}>
      <SimpleImageSlider
        className={classes.slider}
        width={width === 'xs' || width === 'sm' || width === 'md' ? '90vw' : 1280}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay
        bgColor={'#f2f2f2'}
      />
    </Box>
  );
};

export default withWidth()(CategorySlider);
