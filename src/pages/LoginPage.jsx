import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextDarkGrey, PrimaryBlue } from 'theme';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogIn } from 'features/account/accountSlice';
import { Link } from 'react-router-dom';

import * as yup from 'yup';

const useStyles = makeStyles(() => ({
  accountContainer: {
    width: '100vw',
    marginTop: '200px'
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
    email: yup.string().email().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  })
  .required();

export default function LoginPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.user);

  const handleUserLogIn = () => {
    dispatch(userLogIn());
  };

  const onSubmit = (data) => {
    if (data.email === user.email && data.password === user.password) {
      handleUserLogIn();
      navigate('/account');
      console.log('User:', user.email, user.password);
    } else {
      navigate('/register');
      console.log('User:', user.email, user.password);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Box className={classes.accountContainer}>
      <Typography variant="h3" align="center" paragraph>
        Log In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <input className={classes.input} type="email" {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input
          className={classes.input}
          type="password"
          {...register('password')}
          placeholder="password"
        />
        <p>{errors.password?.message}</p>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
      <Typography variant="h4" paragraph align="center">
        Do not have account yet?{' '}
        <Link to={'/register'} className={classes.link}>
          Register here
        </Link>
      </Typography>
    </Box>
  );
}
