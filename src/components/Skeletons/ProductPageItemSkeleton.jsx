/**
 * ProductPageItemSkeleton
 * @description Skeleton for product component for a product page
 * @param {boolean} isLoading if its tru than display Skeleton
 * @returns {node} ProductPageItemSkeleton component
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box } from '@material-ui/core';
import { useStyles } from 'pages/ProductPage';

const ProductPageItemSkeleton = ({ isLoading }) => {
  const classes = useStyles();
  return (
    isLoading && (
      <>
        <Box marginTop="20px" marginBottom="20px">
          <Skeleton variant="text" width={200} height={30} />
        </Box>
        <Box
          display="flex"
          gridGap={{ xs: '20px', md: '70px' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center', md: 'none' }}>
          <Skeleton variant="rect" className={classes.imageProductWrapper} />
          <Box
            display="flex"
            flexDirection="column"
            gridGap="12px"
            alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Skeleton variant="text" width={300} height={80} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={300} height={80} />
            <Box display="flex" alignItems="center" className={classes.counter}>
              <Skeleton variant="rect" width={60} height={60} />
              <Skeleton variant="rect" width={20} height={20} />
              <Skeleton variant="rect" width={60} height={60} />
            </Box>
            <Box display="flex" alignItems="center" className={classes.counter}>
              <Skeleton variant="rect" width={80} height={40} />
              <Skeleton variant="rect" width={100} height={20} />
            </Box>
          </Box>
        </Box>
      </>
    )
  );
};

export default ProductPageItemSkeleton;

ProductPageItemSkeleton.propTypes = {
  isLoading: PropTypes.bool
};
