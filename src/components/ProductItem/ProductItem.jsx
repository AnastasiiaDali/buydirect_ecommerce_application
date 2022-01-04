/**
 * ProductItem
 * @description Product component for categories
 * @param {object} product
 * @param {function} handleAddToCart function that adds to the state
 * @param {boolean} specialPrice if its tru display discounted price
 * @returns {node} ProductItem component
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  productContainer: {
    display: 'grid',
    width: '47%',
    maxWidth: '200px',
    minWidth: '168px',
    height: 'fit-content',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    margin: '0 5px 5px',
    backgroundColor: '#fff',
    [theme.breakpoints.up('sm')]: {
      minWidth: '200px'
    }
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
    margin: 'auto 10px 10px'
  },
  addBtnFav: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '8px',
    [theme.breakpoints.down('xs')]: {
      margin: '4px'
    }
  },
  addButton: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    }
  }
}));

export default function ProductItem({ product, handleAddToCart, specialPrice }) {
  const classes = useStyles();

  const { id, title, price, image } = product;
  return (
    <Box key={id} className={classes.productContainer}>
      <Box component={Link} to={`/products/${id}`}>
        <Box
          className={classes.imageProduct}
          style={{ background: `url(${image}) center center/contain no-repeat` }}
        />
        <Typography variant="h4" className={classes.productTitle}>
          {title}
        </Typography>
        {specialPrice && (
          <Typography variant="subtitle1" component="p" className={classes.productPrice}>
            ${price}
          </Typography>
        )}
        {specialPrice ? (
          <Typography variant="h4" className={classes.productPrice}>
            {`${(price * 0.7).toFixed(2)}`}
          </Typography>
        ) : (
          <Typography variant="h4" className={classes.productPrice}>
            ${price}
          </Typography>
        )}
      </Box>
      <div className={classes.addBtnFav}>
        <Button
          className={classes.addButton}
          variant="contained"
          onClick={() => handleAddToCart(product)}>
          ADD TO CART
        </Button>
        <FormControlLabel
          aria-label="favorite"
          style={{ margin: '0 0 0 4px' }}
          control={
            <Checkbox
              aria-label="favorite"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="primary" />}
            />
          }
        />
      </div>
    </Box>
  );
}

ProductItem.propTypes = {
  product: PropTypes.exact({
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    itemQuantity: PropTypes.number,
    price: PropTypes.number,
    rating: PropTypes.exact({
      count: PropTypes.number,
      rate: PropTypes.number
    }),
    title: PropTypes.string
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  specialPrice: PropTypes.bool
};
