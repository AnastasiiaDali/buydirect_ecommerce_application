/**
 * RegisterPage
 * @description register
 * @returns {node} RegisterPage component
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'store/slices/account/accountSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextDarkGrey, PrimaryBlue } from 'theme';

import * as yup from 'yup';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  accountContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '100px 16px 0',
    maxWidth: '1000px',
    margin: '0 auto 10px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 100,
      padding: '0 24px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '90vw'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
    height: 'auto',
    margin: '0 auto 30px',
    border: `1px solid ${TextDarkGrey}`,
    borderRadius: '16px',
    [theme.breakpoints.down('xs')]: {
      border: 'none'
    }
  },
  inputGroup: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '4px'
  },
  input: {
    display: 'flex',
    minWidth: '350px',
    maxWidth: '350px',
    padding: '16px',
    border: `1px solid ${TextDarkGrey}`,
    borderRadius: '5px',
    '&:focus-visible': {
      borderColor: PrimaryBlue
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '300px',
      maxWidth: '300px'
    }
  },
  label: {
    fontSize: theme.typography.body1.fontSize
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
      <Typography variant="h2" align="center" paragraph>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Box className={classes.inputGroup}>
          <Box className={classes.inputBox}>
            <label className={classes.label} htmlFor="name">
              First Name
            </label>
            <input
              className={classes.input}
              type="text"
              {...register('firstName')}
              placeholder="James"
            />
            <Typography color="error" variant="body2" paragraph>
              {errors.firstName?.message}
            </Typography>
          </Box>

          <Box className={classes.inputBox}>
            <label className={classes.label} htmlFor="name">
              Surname
            </label>
            <input
              className={classes.input}
              type="text"
              {...register('lastName')}
              placeholder="Bond"
            />
            <Typography color="error" variant="body2" paragraph>
              {errors.lastName?.message}
            </Typography>
          </Box>

          <Box className={classes.inputBox}>
            <label className={classes.label} htmlFor="name">
              Email address
            </label>
            <input
              className={classes.input}
              type="email"
              {...register('email')}
              placeholder="email@example.com"
            />
            <Typography color="error" variant="body2" paragraph>
              {errors.email?.message}
            </Typography>
          </Box>

          <Box className={classes.inputBox}>
            <label className={classes.label} htmlFor="name">
              Password
            </label>
            <input
              className={classes.input}
              type="password"
              {...register('password')}
              placeholder="********"
            />
            <Typography color="error" variant="body2" paragraph>
              {errors.password?.message}
            </Typography>
          </Box>

          <Box className={classes.inputBox}>
            <label className={classes.label} htmlFor="name">
              Confirm Password
            </label>
            <input
              className={classes.input}
              type="password"
              {...register('confirmPassword')}
              placeholder="********"
            />
            <Typography color="error" variant="body2" paragraph>
              {errors.confirmPassword?.message}
            </Typography>
          </Box>
          <Box marginTop="20px" width="100%">
            <Button fullWidth variant="contained" type="submit">
              REGISTER
            </Button>
          </Box>
        </Box>
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
