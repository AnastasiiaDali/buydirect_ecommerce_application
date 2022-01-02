/**
 * CategoryPage
 * @description category
 * @returns {node} CategoryPage component
 */

import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/slices/cart/cartSlice';
import { useLocation } from 'react-router-dom';
import CategorySlider from 'components/CategorySlider/CategorySlider';
import ProductItem from 'components/ProductItem/ProductItem';
import ProductItemsSkeleton from 'components/Skeletons/ProductItemsSkeleton';
import Box from '@material-ui/core/Box';
import Breads from 'components/Breads/Breads';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  categoryContainer: {
    padding: '80px 16px 0',
    maxWidth: '1280px',
    margin: '0 auto 10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 8px 0'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '60px 24px 0'
    },
    [theme.breakpoints.up('xl')]: {
      width: '90vw'
    }
  },
  slider: {
    maxWidth: '1280px',
    margin: '15px auto 10px',
    width: '100%'
  }
}));

export default function CategoryPage() {
  let { pathname } = useLocation();
  const classes = useStyles();

  const { data: products, isLoading } = useQuery(
    pathname === '/category/all' ? 'products' : ['category', pathname],
    () =>
      fetch(
        `https://fakestoreapi.com/products${pathname === '/category/all' ? '' : pathname}`
      ).then((res) => res.json())
  );
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box className={classes.categoryContainer}>
      <Box className={classes.slider}>
        <CategorySlider />
      </Box>
      <Breads category={pathname.replace('/category/', '')} />
      <ProductItemsSkeleton isLoading={isLoading} />
      {products?.map((product, index) => (
        <ProductItem key={index} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </Box>
  );
}
