/**
 * AccountPage
 * @description account page infomation
 * @returns {node} AccountPage component
 */

import React from 'react';
import AccountInfo from './AccountInfo';
import Orders from './Orders';
import AddressBook from './AddressBook';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accountContainer: {
    padding: '100px 16px 0',
    maxWidth: '1280px',
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

export default function AccountPage() {
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
