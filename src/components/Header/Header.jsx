import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SideBar from 'components/SideBar/SideBar';
import Search from 'components/Search/Search';
import IconButton from '@material-ui/core/IconButton';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
  position: 'fixed',
  top: 0,
  right: 0,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.white,
  maxWidth: '100vw'
}));

const StyledTypography = styled(Typography)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  fontFamily: 'Montserrat'
});

export default function Header() {
  const { data: products } = useQuery('products', () =>
    fetch('https://fakestoreapi.com/products').then((res) => res.json())
  );

  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  return (
    <StyledAppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between', zIndex: 10 }}>
        <SideBar products={products} />
        <StyledTypography variant="h2">
          <Link to="/">BuyDirect</Link>
        </StyledTypography>
        <Box>
          {products && <Search products={products} />}
          <IconButton component={Link} to="/cart">
            <Badge badgeContent={cartTotalQuantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
