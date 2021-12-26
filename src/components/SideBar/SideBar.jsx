import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Drawer } from '@material-ui/core';
import CategoryList from 'components/CategoryList/CategoryList';

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Box display={{ xs: 'block', md: 'none' }}>
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
            <CategoryList />
          </div>
        </Drawer>
      </Box>
    </>
  );
}