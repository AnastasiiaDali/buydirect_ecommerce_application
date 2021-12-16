import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

export default function Breads({ category, title }) {
  return (
    <Box width="100%" justifyContent="center" display="flex">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/">
          Home
        </Link>
        {title && (
          <Link color="inherit" to={`/category/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        )}

        <Typography color="textPrimary">
          {title
            ? title.substring(0, 20)
            : `${category.charAt(0).toUpperCase() + category.slice(1)}`}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
