import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    display: 'flex',
    flexDirection: 'column'
  },
  closeOutlinedIcon: {
    height: '48px',
    width: '48px',
    position: 'absolute',
    right: '0',
    top: '-5px',
    zIndex: 10,
    padding: 10
  },
  itemBorder: {
    borderBottom: '1px solid grey'
  },
  menuItem: {
    textAlign: 'center',
    marginTop: '10px'
  },
  button: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: 300,
    backgroundColor: '#007399',
    color: '#fff',
    borderRadius: 0
  }
}));

export default function SideBar() {
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleRouting = (url) => {
    navigate(`/category/${url}`);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <IconButton onClick={toggleSidebar} aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <div
          className={classes.root}
          role="presentation"
          onClick={toggleSidebar}
          onKeyDown={toggleSidebar}>
          <CloseOutlinedIcon onClick={toggleSidebar} className={classes.closeOutlinedIcon} />
          <List height={400} width={300} position="relative">
            <ListItem button>
              <ListItemText primary="MENU" className={classes.menuItem} />
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
        </div>
      </Drawer>
    </>
  );
}
