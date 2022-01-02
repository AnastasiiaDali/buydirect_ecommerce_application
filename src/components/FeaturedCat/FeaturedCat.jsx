/**
 * FeaturedCat
 * @description 3 featured categories on the home page, banner with title
 * @return {node} FeaturedCat component
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { featuredCatData } from 'data/featuredCatData';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { BlackBg, White } from 'theme';

const useStyles = makeStyles((theme) => ({
  imageBn: {
    marginTop: '-20px',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'flex-end',
    width: '90vw',
    height: '400px',
    margin: '0 auto 50px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '300px'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '400px'
    }
  },
  container: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      maxWidth: '1280px',
      margin: '0 auto 0 auto'
    }
  },
  bannerText: {
    padding: '10px 20px',
    backgroundColor: BlackBg,
    color: White,
    minHeight: '80px',
    minWidth: '250px',
    maxWidth: '280px',
    marginBottom: '-10px',
    fontFamily: 'Montserrat',
    fontSize: theme.typography.h2.fontSize,
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function FeaturedCat() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {featuredCatData.map((category, index) => (
        <Link key={index} to={`/category/${category.url}`}>
          <Box
            className={classes.imageBn}
            style={{ background: `url(${category.image}) top center/cover no-repeat` }}>
            <Typography variant="h1" p={3} align="center" className={classes.bannerText}>
              {category.title}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
}
