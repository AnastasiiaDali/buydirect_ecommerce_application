/**
 * Footer
 *  @return {node} Footer component
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { socialMediaData } from 'data/socialMediaData';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { LightGreyBg } from 'theme';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
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
    },
    [theme.breakpoints.down('md')]: {
      margin: 0
    }
  },
  socialMedia: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      gridGap: '12px'
    }
  },
  gridItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    gridGap: '12px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Grid container spacing={3} className={classes.footerContainerBox}>
        {/* Categories */}
        <Hidden smDown>
          <Grid container item xs={4} md={3} spacing={1} direction="column" alignItems="flex-start">
            <Grid item>
              <Typography xs={1} variant="body1">
                CATEGORIES
              </Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Typography xs={1} variant="body1" component={Link} to="/category/women's%20clothing">
                Women Clothes
              </Typography>
            </Grid>
            <Grid item>
              <Typography xs={1} variant="body1" component={Link} to="/category/men's%20clothing">
                Men Clothes
              </Typography>
            </Grid>
            <Grid item>
              <Typography xs={1} variant="body1" component={Link} to="/category/jewelery">
                Jewerely
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        {/* Account */}
        <Hidden smDown>
          <Grid container item xs={4} md={3} spacing={1} direction="column" alignItems="flex-start">
            <Grid item>
              <Typography xs={1}>ACCOUNT</Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Typography xs={1} variant="body1" component={Link} to="/register">
                Register
              </Typography>
            </Grid>
            <Grid item>
              <Typography xs={1} variant="body1" component={Link} to="/login">
                Log In
              </Typography>
            </Grid>
            <Grid item>
              <Typography xs={1} variant="body1">
                Orders
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        {/* About us */}
        <Hidden smDown>
          <Grid container item xs={4} md={3} spacing={1} direction="column" alignItems="flex-start">
            <Grid item>
              <Typography>ABOUT US</Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body1" component={Link} to="/ourstory">
                Our Story
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" component={Link} to="/faq">
                FAQs
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        {/* Social media */}
        <Grid className={classes.socialMedia} container item xs={12} md={3} alignItems="flex-start">
          <Grid item>
            <Typography paragraph>SOCIAL MEDIA</Typography>
          </Grid>
          {socialMediaData.map((social) => {
            return (
              <Grid item key={social.id}>
                <a
                  aria-label="social media"
                  rel="noreferrer"
                  href={social.link}
                  target="_blank"
                  className={classes.gridItem}>
                  {social.icon}
                  <Box display={{ xs: 'none', md: 'inline-flex' }}>
                    <Typography variant="body1">{social.label}</Typography>
                  </Box>
                </a>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
