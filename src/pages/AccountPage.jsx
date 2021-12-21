import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { accountData } from 'data/accountData';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  accountContainer: {
    width: '100vw',
    margin: '78px auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridGap: '40px'
  },
  account: {
    width: '70vw',
    display: 'flex',
    flexDirection: 'column',
    gridGap: '10px'
  }
}));

export default function CartPage() {
  const classes = useStyles();
  const { billingAddress, shippingAddress, storeCredit } = accountData;
  const user = useSelector((state) => state.account.user);

  return (
    <>
      <Box className={classes.accountContainer}>
        <Typography variant="h5">Account</Typography>
        <Box className={classes.account}>
          <Typography variant="h4">Name:</Typography>
          <Typography variant="h4" paragraph>
            {user.email}
          </Typography>
          <Typography variant="h4">Billing Address:</Typography>
          <Typography variant="h4" paragraph>
            {billingAddress}
          </Typography>
          <Typography variant="h4">Shipping Address:</Typography>
          <Typography variant="h4" paragraph>
            {shippingAddress}
          </Typography>
          <Typography variant="h4">Store Credit: </Typography>
          <Typography variant="h4">{storeCredit}</Typography>
          <Button variant="text">See all orders</Button>
        </Box>
      </Box>
    </>
  );
}
