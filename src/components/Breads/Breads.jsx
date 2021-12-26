import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { PrimaryBlue } from 'theme';

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    color: PrimaryBlue,
    width: '100%',
    justifyContent: 'center',
    display: 'flex'
  },
  link: {
    fontSize: theme.typography.h3.fontSize
  }
}));

export default function Breads({ category, title }) {
  const classes = useStyles();
  return (
    <Box className={classes.breadcrumbs}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/" className={classes.link}>
          Home
        </Link>
        {title && (
          <Link color="inherit" className={classes.link} to={`/category/${category}`}>
            {category.charAt(0).toUpperCase().replace('/category/', '') +
              category.slice(1).replace('%20', ' ')}
          </Link>
        )}

        <Typography color="textPrimary" className={classes.link}>
          {title
            ? title.substring(0, 20)
            : `${category.charAt(0).toUpperCase() + category.slice(1).replace('%20', ' ')}`}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
