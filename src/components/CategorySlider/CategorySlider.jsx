import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import allBanner from 'images/allBanner.png';
import womenBanner from 'images/womenBanner.jpeg';
import menBanner from 'images/menBanner.jpeg';
import withWidth from '@material-ui/core/withWidth';

const images = [{ url: allBanner }, { url: womenBanner }, { url: menBanner }];

const CategorySlider = ({ width }) => {
  return (
    <SimpleImageSlider
      width={width === 'xs' || width === 'sm' || width === 'md' ? '90vw' : 'calc(1280px - 48px)'}
      height={300}
      images={images}
      showBullets={true}
      showNavs={true}
      slideDuration={0.5}
      autoPlay
      bgColor={'#f2f2f2'}
    />
  );
};

export default withWidth()(CategorySlider);
