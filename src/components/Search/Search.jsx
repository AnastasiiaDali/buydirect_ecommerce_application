import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { White, TextDarkGrey } from 'theme';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles(() => ({
  input: {
    backgroundColor: White,
    width: '100%',
    color: TextDarkGrey,
    padding: '10px'
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
  }
}));

export default function Search({ products }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

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
        : [];
    setInputValue(searchInput);
    setFilteredProducts(searchData);
  };

  const handleClearInput = () => {
    setInputValue('');
    setFilteredProducts([]);
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
          <IconButton onClick={handleClick}>
            <SearchOutlinedIcon />
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
                {filteredProducts === [] ? (
                  <Box>empty search</Box>
                ) : (
                  filteredProducts.map((product) => (
                    <Box
                      component={Link}
                      to={`/products/${product.id}`}
                      key={product.id}
                      p={1}
                      display="block">
                      {product.title}
                    </Box>
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