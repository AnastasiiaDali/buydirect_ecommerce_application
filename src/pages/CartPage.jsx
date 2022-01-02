/**
 * CartPage
 * @description cart
 * @returns {node} CartPage component
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'store/slices/cart/cartSlice';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Counter from 'components/Counter/Counter';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import emptyCart from 'images/emptyCart.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '80px 16px 0',
    maxWidth: '1000px',
    minHeight: 'calc(100vh - 100px)',
    margin: '0 auto 10px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 100,
      padding: '0 24px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '90vw'
    }
  },
  paragraph: {
    width: '100%'
  },
  productWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '50px',
    my: 2
  },
  imageProductWrapper: {
    minWidth: '120px',
    maxWidth: '120px',
    height: '120px',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid grey',
    marginRight: 8,
    display: 'flex'
  },
  imageProduct: {
    margin: 'auto',
    maxWidth: '100px',

    height: '100%'
  },
  emptyCartImg: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '90vw',
    height: 'auto',
    margin: '80px auto 0'
  },
  totals: {
    alignSelf: 'flex-end',
    marginTop: '40px'
  },
  counterRemove: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '16px',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      width: '-webkit-fill-available',
      justifyContent: 'space-between'
    }
  },
  counterWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '16px',
    alignItems: 'flex-start'
  }
}));

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotaAmount = useSelector((state) => state.cart.cartTotaAmount);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const { pathname } = useLocation();
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <Box className={classes.container}>
          <Typography className={classes.paragraph} variant="h3" paragraph>
            Shopping Cart
          </Typography>

          <Box className={classes.productWrapper}>
            {cartItems.map((product) => {
              return (
                <Box display="flex" key={product.id}>
                  <div className={classes.imageProductWrapper}>
                    <img className={classes.imageProduct} src={product.image} alt={product.title} />
                  </div>
                  <Box className={classes.counterRemove}>
                    <Box>
                      <Typography variant="h4">{product.title}</Typography>
                      <Typography variant="h4">Price: ${product.price}</Typography>
                    </Box>
                    <Box className={classes.counterWrapper}>
                      <Counter product={product} />
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => handleRemoveFromCart(product)}>
                        remove
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Divider flexItem />
          </Box>
          <Box className={classes.totals}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h4">Subtotal:</Typography>
              <Typography variant="h4">${cartTotaAmount.toFixed(2)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h4">Total:</Typography>
              <Typography variant="h4">${cartTotaAmount.toFixed(2)}</Typography>
            </Box>
            <Button
              variant="contained"
              component={Link}
              to={isLoggedIn ? '/payment' : '/login'}
              state={{ prevPath: pathname }}>
              PROCEED TO CHECK OUT
            </Button>
          </Box>
        </Box>
      ) : (
        <img className={classes.emptyCartImg} src={emptyCart} alt="empty cart" />
      )}
    </>
  );
}
