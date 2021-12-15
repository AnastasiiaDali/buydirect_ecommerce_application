import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
    height: 250,
    maxWidth: 300,
    top: 56,
    left: 0,
    paddingTop: 20,
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    transition: '1s cubic-bezier(.81,-0.71,.49,1.43)'
  },
  inAnimation: {
    '0%': {
      opacity: '0',
      visibility: 'hidden'
    },
    '100%': {
      opacity: '1',
      visibility: 'visible'
    }
  },

  outAnimation: {
    '0%': {
      opacity: '1'
    },
    '100%': {
      opacity: '0',
      visibility: 'hidden'
    }
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
  }
}));

export default function SideBar() {
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  console.log('isSidebarOpen', isSidebarOpen);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleRouting = (url) => {
    navigate(`/category/${url}`);
  };
  const handleClickAway = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <IconButton onClick={toggleSidebar} aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <div
            className={classes.root}
            style={{
              transform: `${isSidebarOpen ? 'translateY(0%)' : 'translateY(-200%)'}`
            }}>
            <CloseOutlinedIcon onClick={toggleSidebar} className={classes.closeOutlinedIcon} />
            <List height={400} width={300} itemSize={46} position="relative">
              <ListItem button>
                <ListItemText primary="MENU" className={classes.menuItem} />
              </ListItem>
              <ListItem button onClick={() => handleRouting('jewelery')}>
                <ListItemText inset primary="MEN'S CLOTHING" className={classes.itemBorder} />
              </ListItem>
              <ListItem button onClick={() => handleRouting('electronics')}>
                <ListItemText inset primary="WOMEN'S CLOTHING" className={classes.itemBorder} />
              </ListItem>
              <ListItem button onClick={() => handleRouting('jewelery')}>
                <ListItemText inset primary="JEWELLERY" className={classes.itemBorder} />
              </ListItem>
            </List>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}
