import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { BlackBg, White } from 'theme';
import { featuredCatData } from 'data/featuredCatData';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  imageBn: {
    marginTop: '-20px',
    zIndex: 3,
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'flex-end',
    width: '90vw',
    height: '400px',
    padding: '0',
    margin: '0 auto 50px'
  },
  bannerText: {
    padding: '10px 20px',
    backgroundColor: BlackBg,
    color: White,
    maxWidth: '70vw',
    marginBottom: '-10px',
    fontFamily: 'Montserrat'
  }
}));

export default function FeaturedCat() {
  const classes = useStyles();
  return featuredCatData.map((category, index) => (
    <Link key={index} to="">
      <Box
        className={classes.imageBn}
        style={{ background: `url(${category.image}) center center/cover no-repeat` }}>
        <Typography variant="h1" p={3} align="center" className={classes.bannerText}>
          {category.title}
        </Typography>
      </Box>
    </Link>
  ));
}
