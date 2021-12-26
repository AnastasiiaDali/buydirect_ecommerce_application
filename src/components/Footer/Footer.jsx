import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import { LightGreyBg } from 'theme';
import { socialMediaData } from 'data/socialMediaData';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    maxWidth: '100vw',
    padding: '20px 40px 0',
    backgroundColor: LightGreyBg,
    margin: '20px 0 0 0',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      padding: 16
    }
  },
  footerContainerBox: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  },
  socialMedia: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  gridItem: {
    display: 'flex',
    gridGap: '10px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Grid container spacing={3} className={classes.footerContainerBox}>
        <Grid container item xs={4} md={3} spacing={1} direction="column" alignItems="flex-start">
          <Grid item>
            <Typography xs={1} variant="body1">
              CATEGORIES
            </Typography>
          </Grid>
          <Grid item>
            <Typography xs={1} variant="body1">
              Women Clothes
            </Typography>
          </Grid>
          <Grid item>
            <Typography xs={1} variant="body1">
              Men Clothes
            </Typography>
          </Grid>
          <Grid item>
            <Typography xs={1} variant="body1">
              Jewerely
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} md={3} spacing={1} direction="column" alignItems="flex-start">
          <Grid item>
            <Typography xs={1}>ACCOUNT</Typography>
          </Grid>
          <Grid item>
            <Typography xs={1} variant="body1">
              Register
            </Typography>
          </Grid>
          <Grid item>
            <Typography xs={1} variant="body1">
              Log In
            </Typography>
          </Grid>
          <Grid item>
            <Typography xs={1} variant="body1">
              Orders
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} md={3} spacing={1} direction="column">
          <Grid item>
            <Typography>ABOUT US</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Our Story</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">FAQs</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.socialMedia} container item xs={12} md={3}>
          <Grid item>
            <Typography paragraph>SOCIAL MEDIA</Typography>
          </Grid>
          {socialMediaData.map((social) => {
            return (
              <Grid item key={social.id} className={classes.gridItem}>
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.icon}
                </a>
                <Box display={{ xs: 'none', md: 'flex' }}>
                  <Typography variant="body1">{social.label}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
