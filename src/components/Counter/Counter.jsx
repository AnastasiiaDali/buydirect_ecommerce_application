/**
 * Counter component
 *
 * @param {object} product get the product
 * @return {node} Returns Counter component for exact product
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decreaseQuantity, addToCart } from 'store/slices/cart/cartSlice';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { White } from 'theme';

const useStyles = makeStyles((theme) => ({
  counter: {
    display: 'flex',
    width: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.body1.fontSize
  },
  icon: {
    fill: White
  }
}));

export default function Counter({ product }) {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemIndex = cartItems.findIndex((item) => item.id === product.id);
  const productQuantity =
    useSelector((state) => state.cart.cartItems[itemIndex]?.itemQuantity) || 0;

  const dispatch = useDispatch();

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box display="flex">
      <Button variant="contained" onClick={() => handleDecreaseQuantity(product)}>
        <RemoveIcon className={classes.icon} />
      </Button>
      <Box className={classes.counter}>{productQuantity}</Box>
      <Button variant="contained" onClick={() => handleAddToCart(product)}>
        <AddIcon className={classes.icon} />
      </Button>
    </Box>
  );
}
