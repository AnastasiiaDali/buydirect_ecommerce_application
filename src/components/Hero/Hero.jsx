import React from 'react';
import mainBanner from '../../images/mainBanner.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  image: {
    backgroundImage: `url(${mainBanner})`,
    backgroundPositionX: 'inherit',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100vw',
    height: '500px',
    padding: '0',
    margin: '0'
  },
  imageText: {
    position: 'absolute',
    top: '150px',
    left: '25px',
    width: '60vw',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Montserrat'
  }
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Box className={classes.imageText}>
        <Typography variant="h2" gutterBottom style={{ fontFamily: 'Montserrat' }}>
          Show The New Collection Today
        </Typography>
        <Typography variant="h3" align={'justify'} paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna.
        </Typography>
        <Button variant="contained">Shop Now</Button>
      </Box>
    </Box>
  );
}
