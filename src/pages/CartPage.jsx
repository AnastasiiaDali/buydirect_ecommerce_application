import React from 'react';
import Counter from 'components/Counter/Counter';
import { Typography, Box, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'features/cart/cartSlice';
import { makeStyles } from '@material-ui/core/styles';
import emptyCart from 'images/emptyCart.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '80px 16px 0',
    maxWidth: '1000px',
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
    height: '120px',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid grey',
    marginRight: 8,
    display: 'flex'
  },
  imageProduct: {
    margin: 'auto',
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
    mt: 2
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
            <Button variant="contained">PROCEED TO CHECK OUT</Button>
          </Box>
        </Box>
      ) : (
        <img className={classes.emptyCartImg} src={emptyCart} alt="empty cart" />
      )}
    </>
  );
}
