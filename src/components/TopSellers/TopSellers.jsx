import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import IconButton from '@material-ui/core/IconButton';
import { PrimaryBlue } from 'theme';
import { Link } from 'react-router-dom';

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
    minWidth: '80vw'
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

export default function TopSellers({ items }) {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h1" paragraph align="center" style={{ fontFamily: 'Montserrat' }}>
        Top Sellers
      </Typography>
      <Box className={classes.topSellersContainer}>
        {items &&
          items.map((item) => {
            const { id, title, price, image } = item;

            return (
              <Box
                component={Link}
                to={`/products/${id}`}
                key={id}
                className={classes.productContainer}>
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
    </Box>
  );
}
