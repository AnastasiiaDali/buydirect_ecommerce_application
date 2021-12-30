import React from 'react';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from 'components/SliderArrows/SliderArrows';
import 'components/Slider/assets/slick.css';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/slices/cart/cartSlice';
import ProductItemsSkeleton from 'components/Skeletons/ProductItemsSkeleton';
import ProductItem from 'components/ProductItem/ProductItem';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0px 16px 0',
    maxWidth: '1280px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 8px 0'
    }
  },
  topSellersContainer: {
    margin: '40px 0'
  }
}));

const settings = {
  slidesToScroll: 2,
  slidesToShow: 6,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2
      }
    }
  ]
};

export default function DiscountedItems() {
  const classes = useStyles();
  const { data: products, isLoading } = useQuery('products', () =>
    fetch('https://fakestoreapi.com/products').then((res) => res.json())
  );

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h1" align="center" style={{ fontFamily: 'Montserrat' }}>
        On Sale
      </Typography>
      {/* {`${(price * 0.7).toFixed(2)}`} */}
      <Box className={classes.topSellersContainer}>
        <ProductItemsSkeleton isLoading={isLoading} />
        <Slider {...settings}>
          {products?.map((product, index) => {
            return (
              <ProductItem
                key={index}
                specialPrice
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
