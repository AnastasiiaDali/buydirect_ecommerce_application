/**
 * CategoryList
 * @description list of categories for SideBar component and header category navigation
 * @return {node} category list
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

import { makeStyles } from '@material-ui/core/styles';
import { White } from 'theme';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      height: 'auto',
      width: 'min-content'
    }
  },
  itemBorder: {
    textAlign: 'center',
    paddingBottom: 8,
    borderBottom: '1px solid grey',
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.up('md')]: {
      borderBottom: 'none',
      paddingBottom: 0,
      whiteSpace: 'nowrap'
    }
  },
  button: {
    display: 'flex',
    gridGap: '8px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: 300,
    backgroundColor: '#007399',
    color: '#fff',
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  icon: {
    fill: White,
    width: '24px',
    height: '24px'
  }
}));

export default function CategoryList() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleRouting = (url) => {
    navigate(`/category/${url}`);
  };

  return (
    <List className={classes.list}>
      <ListItem button onClick={() => handleRouting('all')}>
        <ListItemText disableTypography inset primary="All" className={classes.itemBorder} />
      </ListItem>
      <ListItem button onClick={() => handleRouting("men's%20clothing")}>
        <ListItemText
          disableTypography
          inset
          primary="Men's clothing"
          className={classes.itemBorder}
        />
      </ListItem>
      <ListItem button onClick={() => handleRouting("women's%20clothing")}>
        <ListItemText
          disableTypography
          inset
          primary="Women's clothing"
          className={classes.itemBorder}
        />
      </ListItem>
      <ListItem button onClick={() => handleRouting('jewelery')}>
        <ListItemText disableTypography inset primary="Jewelery" className={classes.itemBorder} />
      </ListItem>
      <Box>
        <Button
          className={classes.button}
          variant="text"
          component={Link}
          to={'/register'}
          endIcon={<AccountBoxOutlinedIcon className={classes.icon} />}>
          Account
        </Button>
      </Box>
    </List>
  );
}
