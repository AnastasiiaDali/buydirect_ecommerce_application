import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import CreditCardOption from './CreditCardOption';
import PaypalOption from './PaypalOption';
import StripeOption from './StripeOption';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 16px 0',
    maxWidth: '1280px',
    minHeight: 'calc(100vh - 100px)',
    margin: '0 auto 10px',
    display: 'flex',
    gridGap: '12px',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  },
  totals: {
    alignSelf: 'center',
    marginTop: '40px'
  },
  payments: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  }
}));

export default function PaymentPage() {
  const cartTotaAmount = useSelector((state) => state.cart.cartTotaAmount);
  const classes = useStyles();
  const [selected, setSelected] = React.useState('paypal');

  return (
    <Box className={classes.container}>
      <Box minWidth="100%">
        <Typography paragraph variant="h2" display="block" align="center">
          Payment Options
        </Typography>
      </Box>

      <PaypalOption selected={selected} handleChange={setSelected} />

      <CreditCardOption selected={selected} handleChange={setSelected} />

      <StripeOption selected={selected} handleChange={setSelected} />

      <Box className={classes.totals}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">Subtotal:</Typography>
          <Typography variant="h4">${cartTotaAmount.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h4">Total:</Typography>
          <Typography variant="h4">${cartTotaAmount.toFixed(2)}</Typography>
        </Box>
        <Button variant="contained" component={Link} to={'/successful'}>
          Complete payment
        </Button>
      </Box>
    </Box>
  );
}
