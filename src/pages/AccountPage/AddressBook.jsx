import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { accountData } from 'data/accountData';
import { useStyles } from 'pages/AccountPage/styles';

export default function AddressBook() {
  const classes = useStyles();
  const { billingAddress, shippingAddress, secondaryShippingAddress } = accountData;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" paragraph>
          Addresses
        </Typography>
        <Box className={classes.cardContent}>
          <Typography variant="body1">Billing Address:</Typography>
          <Typography variant="body1" paragraph>
            {billingAddress}
          </Typography>
          <Divider flexItem />
          <Typography variant="body1">Main Shipping Address:</Typography>
          <Typography variant="body1" paragraph>
            {shippingAddress}
          </Typography>
          <Divider flexItem />
          <Typography variant="body1">Secondary Shipping Address:</Typography>
          <Typography variant="body1">{secondaryShippingAddress}</Typography>
          <Divider flexItem />
        </Box>
      </CardContent>
      <Button className={classes.btn} fullWidth variant="text">
        Edit Addresses
      </Button>
    </Card>
  );
}
