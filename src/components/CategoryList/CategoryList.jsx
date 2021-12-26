import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';

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
    [theme.breakpoints.up('md')]: {
      borderBottom: 'none',
      paddingBottom: 0,
      whiteSpace: 'nowrap'
    }
  },
  menuItem: {
    textAlign: 'center',
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  button: {
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
        <ListItemText inset primary="ALL" className={classes.itemBorder} />
      </ListItem>
      <ListItem button onClick={() => handleRouting("men's%20clothing")}>
        <ListItemText inset primary="MEN'S CLOTHING" className={classes.itemBorder} />
      </ListItem>
      <ListItem button onClick={() => handleRouting("women's%20clothing")}>
        <ListItemText inset primary="WOMEN'S CLOTHING" className={classes.itemBorder} />
      </ListItem>
      <ListItem button onClick={() => handleRouting('jewelery')}>
        <ListItemText inset primary="JEWELERY" className={classes.itemBorder} />
      </ListItem>
      <Button className={classes.button} variant="text" component={Link} to={'/register'}>
        Account
      </Button>
    </List>
  );
}
