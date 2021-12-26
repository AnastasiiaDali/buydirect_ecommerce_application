import React from 'react';
import Counter from 'components/Counter/Counter';
import { Typography, Box, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'features/cart/cartSlice';
import { makeStyles } from '@material-ui/core/styles';
import emptyCart from 'images/emptyCart.png';

const useStyles = makeStyles((theme) => ({
  imageProduct: {
    minWidth: '120px',
    height: '120px',
    margin: '5px',
    display: 'block'
  },
  emptyCartImg: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '90vw',
    height: 'auto',
    margin: '0 auto 0 auto'
  },
  counterRemove: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      minWidth: '70vw'
    }
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
        <Box width="90vw" maxWidth="1000px" margin="80px auto 10px auto">
          <Box>
            <Typography variant="h3" paragraph>
              Cart
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            maxWidth="700px"
            gridGap="50px"
            mb="40px"
            mt="40px">
            {cartItems.map((product) => {
              console.log(product);
              return (
                <Box display="flex" flexDirection="row" gridGap="16px" key={product.id}>
                  <div
                    className={classes.imageProduct}
                    style={{
                      background: `url(${product.image}) center center/contain no-repeat`
                    }}
                  />
                  <Box
                    className={classes.counterRemove}
                    display="flex"
                    flexDirection="column"
                    gridGap="16px"
                    alignItems="flex-start">
                    <Box>
                      <Typography variant="h4">{product.title}</Typography>
                      <Typography variant="h4">Price: ${product.price}</Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      gridGap="15px"
                      alignItems="flex-start">
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
          <Box
            gridGap="10px"
            margin="0 10px 0 auto"
            display="flex"
            flexDirection="column"
            maxWidth="70vw"
            alignItems="flex-end">
            <Box display="flex" justifyContent="space-between">
              <Typography paragraph variant="h4">
                Total:{' '}
              </Typography>
              <Typography paragraph variant="h4">
                ${cartTotaAmount.toFixed(2)}
              </Typography>
            </Box>
            <Button variant="contained">PROCEED TO CHECK OUT</Button>
          </Box>
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
