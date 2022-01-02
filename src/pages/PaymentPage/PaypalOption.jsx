import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import paypal from 'images/paypal.svg';
import { useStyles } from 'pages/PaymentPage/styles';

export default function PaypalOption({ selected, handleChange }) {
  const classes = useStyles();

  return (
    <Card
      onClick={() => handleChange('paypal')}
      style={{ backgroundColor: `${selected === 'paypal' ? '#f2f2f2' : 'white'}` }}
      className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography align="center" paragraph variant="h3">
          Paypal
        </Typography>
        <Box display="flex" justifyContent="space-around">
          <Box className={classes.img}>
            <img src={paypal} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
