/**
 * ProductItemSkeleton
 * @description Skeleton for product component used inside categories
 * @param {boolean} isLoading if its tru than display Skeleton
 * @returns {node} ProductItemSkeleton component
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

import { useStyles } from 'components/ProductItem/ProductItem';

const ProductItemsSkeleton = ({ isLoading }) => {
  const classes = useStyles();
  return (
    isLoading &&
    Array.from(Array(10).keys()).map((i) => (
      <Box className={classes.productContainer} key={i}>
        <Skeleton variant="rect" className={classes.imageProduct} />
        <Skeleton variant="text" className={classes.productTitle} />
        <Box display="flex" gridGap="8px" justifyContent="center" alignItems="center">
          <Skeleton variant="rect" width={110} height={20} />
          <Skeleton variant="circle" width={30} height={30} />
        </Box>
      </Box>
    ))
  );
};

export default ProductItemsSkeleton;

ProductItemsSkeleton.propTypes = {
  isLoading: PropTypes.bool
};
