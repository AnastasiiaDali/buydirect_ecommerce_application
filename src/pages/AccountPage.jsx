import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { accountData } from 'data/accountData';
import { ordersData } from 'data/ordersData';

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
  },
  card: {
    width: '30%',
    minWidth: '370px',
    height: '500px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #007399',
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      height: 'fit-content',
      marginRight: '0'
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      marginRight: '0'
    }
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '10px',
    marginBottom: '10px'
  },
  btn: {
    marginTop: 'auto',
    marginBottom: 16,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px'
    }
  }
}));

export default function CartPage() {
  const classes = useStyles();
  const { billingAddress, shippingAddress, storeCredit, secondaryShippingAddress } = accountData;
  const user = useSelector((state) => state.account.user);

  return (
    <Box className={classes.accountContainer}>
      <Box width="100%">
        <Typography paragraph variant="h2" display="block" align="center">
          Account
        </Typography>
      </Box>
      {/* Account */}
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
      {/* Orders */}
      <Card className={classes.card}>
        <CardContent>
          <Typography paragraph variant="h3">
            Orders
          </Typography>
          {ordersData.map((orders) => {
            return (
              <Box className={classes.cardContent} key={orders.id}>
                <Typography variant="body1">Order Number: {orders.order}</Typography>
                <Typography variant="body1">Total: {orders.total}</Typography>
                <Typography variant="body1">Delivery Date: {orders.date}</Typography>
                <Divider flexItem />
              </Box>
            );
          })}
        </CardContent>
        <Button className={classes.btn} fullWidth variant="text">
          See all orders
        </Button>
      </Card>
      {/* Addresses */}
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
    </Box>
  );
}
