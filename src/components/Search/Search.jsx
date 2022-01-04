/**
 * Search
 * @description search on the header
 * @param {array} products product that match search input
 * @returns {node} Search component
 */

import React, { useState } from 'react';
import isEmpty from 'helpers/isEmpty';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Popper from '@material-ui/core/Popper';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { White, TextDarkGrey } from 'theme';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
    color: TextDarkGrey
  },
  autocomplete: {
    padding: '5px 10px',
    backgroundColor: White,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
    top: '20px',
    width: 300
  },
  searchResults: {
    overflow: 'scroll',
    maxHeight: 200
  },
  noItemsFound: {
    margin: '12px auto',
    textAlign: 'center',
    fontSize: theme.typography.body1
  },
  searchLabel: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      padding: '10px'
    }
  },
  popper: {
    display: 'block',
    [theme.breakpoints.up('md')]: {}
  }
}));

export default function Search({ products }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleSearch = (event) => {
    const searchInput = event.target.value;
    const searchData =
      searchInput !== ''
        ? products.filter((product) =>
            product.title.toLowerCase().includes(searchInput.toLowerCase())
          )
        : null;
    setInputValue(searchInput);
    setFilteredProducts(searchData);
  };

  const handleClearInput = () => {
    setInputValue('');
    setFilteredProducts(null);
  };

  const handleClickAway = () => {
    setAnchorEl(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div style={{ display: 'initial' }}>
          <IconButton aria-label="search" onClick={handleClick}>
            <SearchOutlinedIcon />
            <Typography variant="h4" className={classes.searchLabel}>
              Search
            </Typography>
          </IconButton>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="bottom-end"
            className={classes.popper}>
            <div className={classes.autocomplete}>
              <TextField
                className={classes.input}
                label="Search input"
                margin="normal"
                variant="outlined"
                onChange={handleSearch}
                value={inputValue}
                InputProps={{
                  endAdornment: inputValue !== '' && (
                    <IconButton>
                      <CloseOutlinedIcon onClick={handleClearInput} />
                    </IconButton>
                  )
                }}
              />
              <Box className={classes.searchResults}>
                {isEmpty(filteredProducts) ? (
                  <Typography className={classes.noItemsFound}>No products found</Typography>
                ) : (
                  filteredProducts?.map((product) => (
                    <Typography
                      onClick={handleClickAway}
                      component={Link}
                      to={`/products/${product.id}`}
                      key={product.id}
                      paragraph
                      variant="body1"
                      display="block">
                      {product.title}
                    </Typography>
                  ))
                )}
              </Box>
            </div>
          </Popper>
        </div>
      </ClickAwayListener>
    </>
  );
}

Search.propTypes = {
  isLoading: PropTypes.bool,
  products: PropTypes.arrayOf(
    PropTypes.exact({
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
    })
  )
};
