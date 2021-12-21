import React from 'react';
import Counter from 'components/Counter/Counter';
import { Typography, Box, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'features/cart/cartSlice';
import { makeStyles } from '@material-ui/core/styles';
import emptyCart from 'images/emptyCart.png';

const useStyles = makeStyles(() => ({
  imageProduct: {
    minWidth: '120px',
    height: '120px',
    margin: '5px',
    display: 'block'
  },
  emptyCartImg: {
    maxWidth: '90vw',
    height: 'auto'
  }
}));

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <Box width="90vw" margin="80px auto 10px auto">
          <Box>
            <Typography variant="h3" paragraph>
              Cart
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gridGap="10px" mb="40px" mt="40px">
            {cartItems.map((product) => {
              return (
                <Box display="flex" flexDirection="row" gridGap="16px" key={product.id}>
                  <div
                    className={classes.imageProduct}
                    style={{
                      background: `url(${product.image}) center center/contain no-repeat`
                    }}
                  />
                  <Box display="flex" flexDirection="column" gridGap="16px" alignItems="flex-start">
                    <Typography variant="h4">{product.title}</Typography>
                    <Typography variant="h4">{product.price}</Typography>
                    <Counter product={product} />
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleRemoveFromCart(product)}>
                      REMOVE
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Typography paragraph>Total:</Typography>
          <Button variant="contained">PROCEED TO CHECK OUT</Button>
        </Box>
      ) : (
        <Box width="90vw" margin="80px auto 10px">
          <Box>
            <Typography variant="h3" paragraph>
              Cart
            </Typography>
            <img className={classes.emptyCartImg} src={emptyCart} alt="empty cart" />
          </Box>
        </Box>
      )}
    </>
  );
}
