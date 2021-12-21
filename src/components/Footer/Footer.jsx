import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { LightGreyBg } from 'theme';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  footerContainer: {
    maxWidth: '100vw',
    padding: '20px 40px 0',
    backgroundColor: LightGreyBg,
    margin: '20px 0 0 0',
    fontSize: '16px'
  },
  '@media(minWidth: 780px)': {
    width: '80%'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Grid container spacing={3}>
        <Grid container item xs={6} spacing={1} direction="column" alignItems="flex-start">
          <Grid item>
            <Typography xs={1}>ACCOUNT</Typography>
          </Grid>
          <Grid item>
            <Typography xs={1}>Register</Typography>
          </Grid>
          <Grid item>
            <Typography xs={1}>Log In</Typography>
          </Grid>
          <Grid item>
            <Typography xs={1}>Orders</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={6} spacing={1} direction="column">
          <Grid item>
            <Typography>ABOUT US</Typography>
          </Grid>
          <Grid item>
            <Typography>Our Story</Typography>
          </Grid>
          <Grid item>
            <Typography>FAQs</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="space-between">
          <Grid item>
            <Typography>SOCIAL MEDIA</Typography>
          </Grid>
          <Grid item>
            {/* <Link to={{ pathname: 'https://www.instagram.com/' }} target="_blank"> */}
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            {/* </Link> */}
          </Grid>
          <Grid item>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
