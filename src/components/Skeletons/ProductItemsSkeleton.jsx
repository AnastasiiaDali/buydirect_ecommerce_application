import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { Box } from '@material-ui/core';
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
          <Skeleton variant="rect" width={160} height={30} />
          <Skeleton variant="circle" width={40} height={40} />
        </Box>
      </Box>
    ))
  );
};

export default ProductItemsSkeleton;
