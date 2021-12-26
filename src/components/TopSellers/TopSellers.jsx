import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { PrimaryBlue } from 'theme';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cart/cartSlice';

const useStyles = makeStyles(() => ({
  imageProduct: {
    objectFit: 'scale-down',
    width: '190px',
    height: '190px',
    margin: '5px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  productContainer: {
    display: 'grid',
    minWidth: '200px',
    height: 'auto',
    border: `1px solid ${PrimaryBlue}`,
    borderRadius: '5px',
    margin: '5px',
    backgroundColor: '#fff'
  },
  topSellersContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    width: '90vw',
    maxWidth: '1280px',
    margin: '40px auto 40px auto'
  },
  productTitle: {
    display: '-webkit-box',
    lineClamp: 2,
    minHeight: '52px',
    boxOrient: 'vertical',
    overflow: 'hidden',
    margin: '10px'
  },
  productPrice: {
    padding: '2px',
    margin: 'auto 10px 10px 10px'
  },
  addBtnFav: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '4px'
  },
  favorite: {
    margin: '0px'
  }
}));

export default function TopSellers() {
  const classes = useStyles();
  const { data: products } = useQuery('products', () =>
    fetch('https://fakestoreapi.com/products').then((res) => res.json())
  );

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <Box>
      <Typography variant="h1" paragraph align="center" style={{ fontFamily: 'Montserrat' }}>
        Top Sellers
      </Typography>
      <Box className={classes.topSellersContainer}>
        {products &&
          products.map((product) => {
            const { id, title, price, image } = product;

            return (
              <Box key={id} className={classes.productContainer}>
                <Box component={Link} to={`/products/${id}`}>
                  <Box
                    className={classes.imageProduct}
                    style={{ background: `url(${image}) center center/contain no-repeat` }}
                  />
                  <Typography variant="h3" className={classes.productTitle}>
                    {title}
                  </Typography>
                  <Typography variant="h3" className={classes.productPrice}>
                    ${price}
                  </Typography>
                </Box>
                <div className={classes.addBtnFav}>
                  <Button variant="contained" onClick={() => handleAddToCart(product)}>
                    ADD TO CART
                  </Button>
                  <FormControlLabel
                    className={classes.favorite}
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color="primary" />}
                      />
                    }
                  />
                </div>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}
