/**
 * PaypalOption
 * @description Paypal for Payment page
 * @param {function} handleChange function to choose payment method
 * @param {boolean} selected used to indicate which card is chosen to cahnge style
 * @returns {node} PaypalOption component
 */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

PaypalOption.propTypes = {
  handleChange: PropTypes.func,
  selected: PropTypes.bool
};
