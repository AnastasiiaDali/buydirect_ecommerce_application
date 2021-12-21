import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import IconButton from '@material-ui/core/IconButton';
import { PrimaryBlue } from 'theme';
import { useQuery } from 'react-query';
import Breads from 'components/Breads/Breads';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cart/cartSlice';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  categoryContainer: {
    marginTop: '78px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minWidth: '100vw',
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
    fetch(`https://fakestoreapi.com/products${pathname}`).then((res) => res.json())
  );

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return 'Loading...';

  return (
    <>
      <Box className={classes.categoryContainer}>
        <Breads category={pathname.replace('/category/', '')} />
        {products.map((product) => {
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
                <IconButton>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </div>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default CategoryPage;
