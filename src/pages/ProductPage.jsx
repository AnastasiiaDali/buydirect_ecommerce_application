import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Button, Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import PrimaryBlue from 'theme';

const useStyles = makeStyles(() => ({
  productContainer: {
    margin: '60px auto auto 0',
    backgroundColor: PrimaryBlue,
    width: '100vw'
  },
  imageProduct: {
    objectFit: 'scale-down',
    width: '190px',
    height: '190px',
    margin: '5px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

function ProductPage() {
  let location = useLocation();
  console.log('location', location);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (location.pathname) {
      fetch(`https://fakestoreapi.com${location.pathname}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setProduct(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [location]);
  console.log(product, error, isLoaded);

  return (
    <>
      <Grid
        container
        spacing={5}
        className={classes.productContainer}
        direction="column"
        alignContent="center"
        alignItems="center">
        <Grid item xs={12}>
          <Box
            className={classes.imageProduct}
            style={{
              background: `url(${product.image}) center center/contain no-repeat`
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.titleProduct} variant="h3">
            {product.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">${product.price}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{product.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Button variant="contained">ADD TO CART</Button>
            <FormControlLabel
              control={
                <Checkbox
                  size="medium"
                  color="secondary"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="primary" />}
                  name="checked"
                />
              }
              label="Add to Favorite"
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductPage;
