/**
 * LoginPage
 * @description log in
 * @returns {node} LoginPage component
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogIn } from 'store/slices/account/accountSlice';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextDarkGrey, PrimaryBlue } from 'theme';

import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  accountContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '100px 16px 0',
    maxWidth: '1000px',
    minHeight: 'calc(100vh - 210px)',
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
  },
  snackBar: {
    backgroundColor: '#465839'
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
  const { enqueueSnackbar } = useSnackbar();
  const { state } = useLocation();

  const user = useSelector((state) => state.account.user);

  const handleUserLogIn = () => {
    dispatch(userLogIn());
  };

  const onSubmit = (data) => {
    if (data.email === user.email && data.password === user.password) {
      handleUserLogIn();
      navigate(state?.prevPath ? state.prevPath : '/account');
    } else {
      enqueueSnackbar('Seems like you do not have an account yet, please go to register', {
        variant: 'info',
        autoHideDuration: 3000
      });
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
      <Typography variant="h2" align="center" paragraph>
        Log In
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Box className={classes.inputGroup}>
          <Box className={classes.inputBox}>
            <label className={classes.label} htmlFor="name">
              Email
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
          <Box marginTop="20px" width="100%">
            <Button fullWidth variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </Box>
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
