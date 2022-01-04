/**
 * SpecialSale
 * @description Special Sale banner on the home page with description
 * @returns {node} SpecialSale component
 */

import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import blackFriday from '../../images/blackFriday.webp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90vw',
    margin: '0 auto 50px auto',
    maxWidth: '1280px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 50%',
      gridGap: '80px'
    }
  },
  image: {
    width: '100%',
    height: 'auto'
  }
}));

export default function SpecialSale() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box>
        <Typography paragraph variant="h3" align="center">
          Take Advantage of the Black friday TODAY!
        </Typography>
        <Typography paragraph variant="h4" align="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
        </Typography>
      </Box>
      <Box className={classes.image}>
        <img width="100%" src={blackFriday} alt="bonus" />
      </Box>
    </Box>
  );
}
