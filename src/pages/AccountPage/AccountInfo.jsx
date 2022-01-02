/**
 * AccountInfo
 * @description account information card for Account page
 * @returns {node} AccountInfo component
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { accountData } from 'data/accountData';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useStyles } from 'pages/AccountPage/styles';

export default function AccountInfo() {
  const classes = useStyles();
  const { billingAddress, shippingAddress, storeCredit } = accountData;
  const user = useSelector((state) => state.account.user);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography paragraph variant="h3">
          Account
        </Typography>
        <Box className={classes.cardContent}>
          <Typography variant="body1">Account Name: {user.firstName}</Typography>
          <Divider flexItem />
          <Typography variant="body1">Billing Address:</Typography>
          <Typography variant="body1">{billingAddress}</Typography>
          <Divider flexItem />
          <Typography variant="body1">Shipping Address:</Typography>
          <Typography variant="body1">{shippingAddress}</Typography>
          <Divider flexItem />
          <Typography variant="body1">Store Credit: </Typography>
          <Typography variant="body1">{storeCredit}</Typography>
          <Divider flexItem />
        </Box>
      </CardContent>
      <Button className={classes.btn} fullWidth variant="text">
        Edit Account Info
      </Button>
    </Card>
  );
}
