import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountInfo from './AccountInfo';
import Orders from './Orders';
import AddressBook from './AddressBook';

const useStyles = makeStyles((theme) => ({
  accountContainer: {
    padding: '100px 16px 0',
    maxWidth: '1280px',
    minHeight: 'calc(100vh  - 197px)',
    margin: '0 auto 10px',
    display: 'flex',
    gridGap: '12px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '78px 8px 0',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
}));

export default function CartPage() {
  const classes = useStyles();

  return (
    <Box className={classes.accountContainer}>
      <Box width="100%">
        <Typography paragraph variant="h2" display="block" align="center">
          Account
        </Typography>
      </Box>
      <AccountInfo />
      <Orders />
      <AddressBook />
    </Box>
  );
}
