/**
 * Orders
 * @description orders information card for Account page
 * @returns {node} Orders component
 */

import React from 'react';
import { ordersData } from 'data/ordersData';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useStyles } from 'pages/AccountPage/styles';

export default function Orders() {
  const classes = useStyles();
  return (
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
  );
}
