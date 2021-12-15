import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import IconButton from '@material-ui/core/IconButton';
import { PrimaryBlue } from 'theme';

const useStyles = makeStyles(() => ({
  categoryContainer: {
    marginTop: '68px',
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
    margin: '5px',
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
  let location = useLocation();
  console.log('location', location);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (location.pathname) {
      fetch(`https://fakestoreapi.com/products${location.pathname}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [location]);
  console.log(items, error, isLoaded);
  return (
    <>
      <Box className={classes.categoryContainer}>
        {items.map((item) => {
          const { id, title, price, image } = item;
          return (
            <Box key={id} className={classes.productContainer}>
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
              <div className={classes.addBtnFav}>
                <Button variant="contained">ADD TO CART</Button>
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
