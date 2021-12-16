import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Breads from 'components/Breads/Breads';
import TopSellers from 'components/TopSellers/TopSellers';
import { useQuery } from 'react-query';
import Counter from 'components/Counter/Counter';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  productContainer: {
    margin: '76px auto 40px 0',
    flexDirection: 'column',
    display: 'flex',
    gridGap: '24px',
    px: 6,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageProduct: {
    objectFit: 'scale-down',
    width: '190px',
    height: '190px',
    margin: '5px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  addBtnFav: {
    display: 'flex',
    gap: '20px'
  }
}));

export default function ProductPage() {
  const { pathname } = useLocation();
  const classes = useStyles();

  const { data: product, isLoading } = useQuery(['product', pathname], () =>
    fetch(`https://fakestoreapi.com${pathname}`).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  return (
    <>
      <Box className={classes.productContainer}>
        <Breads category={product.category} title={product.title} />
        <div
          className={classes.imageProduct}
          style={{
            background: `url(${product.image}) center center/contain no-repeat`
          }}
        />
        <Typography variant="h3">{product.title}</Typography>

        <Divider flexItem />

        <Typography variant="h4">${product.price}</Typography>

        <Divider flexItem />

        <Typography variant="body1">{product.description}</Typography>

        <Divider flexItem />

        <Counter />

        <Divider flexItem />

        <div className={classes.addBtnFav}>
          <Button variant="contained">ADD TO CART</Button>
          <FormControlLabel
            control={
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="primary" />} />
            }
            label="Add to Favorite"
          />
        </div>
      </Box>

      <TopSellers />
    </>
  );
}
