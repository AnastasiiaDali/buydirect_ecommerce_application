/**
 * Hero
 * @description main banner o the top of home page
 * @returns {node} Hero component
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import mainBanner from '../../images/mainBanner.webp';
import { makeStyles } from '@material-ui/core/styles';
import { TextDarkGrey } from 'theme';

const useStyles = makeStyles((theme) => ({
  image: {
    overflow: 'hidden',
    width: '100vw',
    maxWidth: '1280px',
    position: 'relative',
    height: '500px',
    padding: '0',
    margin: '0 auto 0 auto',
    '&::before': {
      content: `''`,
      display: 'block',
      position: 'absolute',
      left: 0,
      zIndex: -1,
      top: 0,
      width: '100%',
      height: '100%',
      opacity: 0.6,
      background: `url(${mainBanner}) top center/cover no-repeat`
    }
  },
  imageText: {
    position: 'relative',
    top: '150px',
    left: '25px',
    width: '60vw',
    maxWidth: '400px',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    color: TextDarkGrey,
    [theme.breakpoints.up('md')]: {
      left: '180px'
    }
  }
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.image}>
        <Box className={classes.imageText}>
          <Typography variant="h3" gutterBottom style={{ fontFamily: 'Montserrat' }}>
            Show The New Collection Today
          </Typography>
          <Typography variant="h4" align={'justify'} paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna.
          </Typography>
          <Button variant="contained" component={Link} to={'/category/all'}>
            Shop Now
          </Button>
        </Box>
      </Box>
      <Box className={classes.background} />
    </>
  );
}
