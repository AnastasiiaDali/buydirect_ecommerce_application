/**
 * Header
 * @description header
 * @returns {node} Header component
 */

import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from 'components/SideBar/SideBar';
import Search from 'components/Search/Search';
import CategoryList from 'components/CategoryList/CategoryList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    position: 'absolute',
    left: '50%',
    fontFamily: 'Montserrat',
    transform: 'translateX(-50%)',
    fontSize: theme.typography.h1.fontSize,
    [theme.breakpoints.up('md')]: {
      position: 'initial',
      transform: 'none'
    }
  },
  appbar: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.white,
    maxWidth: '100vw'
  },
  toolbar: {
    justifyContent: 'space-between',
    maxWidth: 1280,
    [theme.breakpoints.up('lg')]: {
      margin: '0 auto',
      minWidth: 1280
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const { data: products } = useQuery('products', () =>
    fetch('https://fakestoreapi.com/products').then((res) => res.json())
  );
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <SideBar products={products} />
        <Typography className={classes.logo} variant="h2">
          <Link to="/">BuyDirect</Link>
        </Typography>
        <Box display={{ xs: 'none', md: 'block' }}>
          <CategoryList />
        </Box>
        <Box display="flex" flexDirection="row">
          <Search products={products} />
          <Box display={{ xs: 'none', md: 'flex' }}>
            <IconButton component={Link} to={isLoggedIn ? '/account' : '/register'}>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton component={Link} to="/cart">
            <Badge badgeContent={cartTotalQuantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
