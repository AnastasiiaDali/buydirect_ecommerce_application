import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextDarkGrey, PrimaryBlue } from 'theme';
import { useDispatch } from 'react-redux';
import { addUser } from 'features/account/accountSlice';
import { useNavigate } from 'react-router-dom';

import * as yup from 'yup';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  accountContainer: {
    width: '100vw',
    marginTop: '100px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '3px',
    alignItems: 'center',
    marginBottom: '30px'
  },
  input: {
    width: '80vw',
    maxWidth: '500px',
    padding: '16px',
    border: `1px solid ${TextDarkGrey}`,
    borderRadius: '5px',
    '&:focus-visible': {
      borderColor: PrimaryBlue
    }
  },
  link: {
    color: PrimaryBlue,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

let schema = yup
  .object()
  .shape({
    firstName: yup.string().max(15).required(),
    lastName: yup.string().max(15).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match')
  })
  .required();

export default function RegisterPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = (data) => {
    dispatch(addUser(data));
  };

  const onSubmit = (data) => {
    handleAddUser(data);
    navigate('/login');
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  return (
    <Box className={classes.accountContainer}>
      <Typography variant="h3" align="center" paragraph>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <input
          className={classes.input}
          type="text"
          {...register('firstName')}
          placeholder="First name"
        />
        <p>{errors.firstName?.message}</p>
        <input
          className={classes.input}
          type="text"
          {...register('lastName')}
          placeholder="Last name"
        />
        <p>{errors.lastName?.message}</p>
        <input className={classes.input} type="email" {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input
          className={classes.input}
          type="password"
          {...register('password')}
          placeholder="password"
        />
        <p>{errors.password?.message}</p>
        <input
          className={classes.input}
          type="password"
          {...register('confirmPassword')}
          placeholder="confirm password"
        />
        <p>{errors.confirmPassword?.message}</p>
        <Button variant="contained" type="submit">
          REGISTER
        </Button>
      </form>
      <Typography variant="h4" paragraph align="center">
        Already have an account?{' '}
        <Link to={'/login'} className={classes.link}>
          Log in here
        </Link>
      </Typography>
    </Box>
  );
}
