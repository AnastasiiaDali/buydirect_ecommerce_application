import React from 'react';
import { useLocation } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import { Typography, Box, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { PrimaryBlue } from 'theme';
import { useQuery } from 'react-query';
import Breads from 'components/Breads/Breads';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cart/cartSlice';
import { Link } from 'react-router-dom';
import CategorySlider from 'components/CategorySlider/CategorySlider';

const useStyles = makeStyles(() => ({
  categoryContainer: {
    margin: '78px auto 0 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100vw',
    maxWidth: '1280px',
    justifyContent: 'center'
  },
  productContainer: {
    display: 'grid',
    width: '47%',
    maxWidth: '240px',
    minWidth: '180px',
    height: 'fit-content',
    border: `1px solid ${PrimaryBlue}`,
    borderRadius: '5px',
    margin: '30px 5px 5px 5px',
    backgroundColor: '#fff'
  },
  imageProduct: {
    height: '190px',
    margin: '8px',
    display: 'block'
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
  }
}));

function CategoryPage() {
  let { pathname } = useLocation();
  const classes = useStyles();

  const { data: products, isLoading } = useQuery(['category', pathname], () =>
    fetch(`https://fakestoreapi.com/products${pathname === '/category/all' ? '' : pathname}`).then(
      (res) => res.json()
    )
  );
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Box className={classes.categoryContainer}>
        <Breads category={pathname.replace('/category/', '')} />
        <CategorySlider />
        {isLoading &&
          Array.from(Array(10).keys()).map((i) => (
            <Box className={classes.productContainer} key={i}>
              <Skeleton variant="rect" className={classes.imageProduct} />
              <Skeleton variant="text" className={classes.productTitle} />
              <Box display="flex" gridGap="8px" justifyContent="center" alignItems="center">
                <Skeleton variant="rect" width={160} height={30} />
                <Skeleton variant="circle" width={40} height={40} />
              </Box>
            </Box>
          ))}
        {products?.map((product) => {
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
    </>
  );
}

export default CategoryPage;
