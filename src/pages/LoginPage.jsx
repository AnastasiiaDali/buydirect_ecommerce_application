import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextDarkGrey, PrimaryBlue } from 'theme';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    alignItems: 'center'
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
  const user = useSelector((state) => state.account.user);

  const onSubmit = (data) => {
    console.log('Data:', data);

    if (data.email === user.email && data.password === user.password) {
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
    </Box>
  );
}
