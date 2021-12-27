import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Breads from 'components/Breads/Breads';
import TopSellers from 'components/TopSellers/TopSellers';
import { useQuery } from 'react-query';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cart/cartSlice';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '80px 16px 0',
    overflow: 'hidden',
    maxWidth: '1280px',
    margin: '0 auto 10px',
    [theme.breakpoints.up('sm')]: {
      padding: '80px 48px 0'
    },
    [theme.breakpoints.up('xl')]: {
      width: '90vw'
    }
  },
  fullProductInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: '24px',
    marginBottom: '40px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '60px'
    }
  },
  productDescContainer: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '32px',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      alignItems: 'start',
      textAlign: 'justify'
    }
  },
  productInforAndButtons: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '24px',
    [theme.breakpoints.up('md')]: {
      width: '60%'
    }
  },
  imageProductWrapper: {
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid grey',
    marginRight: 8,
    display: 'flex',
    width: '240px',
    height: '240px',
    [theme.breakpoints.up('md')]: {
      width: '380px',
      height: '380px'
    }
  },
  imageProduct: {
    margin: 'auto',
    height: '100%'
  },

  counterFavAdd: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '32px',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  addBtnFav: {
    display: 'flex',
    gap: '20px'
  },
  counter: {
    display: 'flex',
    gridGap: '20px',
    alignItems: 'center'
  },
  divider: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default function ProductPage() {
  const { pathname } = useLocation();
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const { data: product, isLoading } = useQuery(['product', pathname], () =>
    fetch(`https://fakestoreapi.com${pathname}`).then((res) => res.json())
  );

  const handleDecreaseQuantity = () => {
    setCount(count - 1);
  };

  const handleIncreaseQuantity = () => {
    setCount(count + 1);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, itemQuantityTemp: count }));
  };

  if (isLoading) return 'Loading...';

  return (
    <Box className={classes.container}>
      <Breads category={product.category} title={product.title} />
      {/* Ful product info with image */}
      <Box className={classes.fullProductInfoContainer}>
        {/* Product Image */}

        <div className={classes.imageProductWrapper}>
          <img className={classes.imageProduct} src={product.image} alt={product.title} />
        </div>
        {/* Product info + buttons */}
        <Box className={classes.productInforAndButtons}>
          {/* Product Description */}
          <Box className={classes.productDescContainer}>
            <Typography variant="h3">{product.title}</Typography>

            <Divider className={classes.divider} flexItem />

            <Typography variant="h4">${product.price}</Typography>

            <Divider className={classes.divider} flexItem />

            <Typography variant="body1">{product.description}</Typography>

            <Divider className={classes.divider} flexItem />
          </Box>
          {/* COUNTER and FAVORITE/ADD */}
          <Box className={classes.counterFavAdd}>
            {/* Counter */}
            <Box className={classes.counter}>
              <Button
                variant="contained"
                disabled={count === 0}
                onClick={() => handleDecreaseQuantity()}>
                <RemoveIcon color="secondary" className={classes.icon} />
              </Button>
              <Box className={classes.counter}>{count}</Box>
              <Button variant="contained" onClick={() => handleIncreaseQuantity()}>
                <AddIcon color="secondary" className={classes.icon} />
              </Button>
            </Box>
            {/* Add FAVORITE and Add to CART button */}
            <Box className={classes.addBtnFav}>
              <Button
                variant="contained"
                disabled={count === 0}
                onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </Button>
              <FormControlLabel
                control={
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="primary" />} />
                }
                label="Add to Favorite"
              />{' '}
            </Box>
          </Box>
        </Box>
      </Box>
      <TopSellers />
    </Box>
  );
}
