import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '30%',
    minWidth: '370px',
    height: '500px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #007399',
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      height: 'fit-content',
      marginRight: '0'
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      marginRight: '0'
    }
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '10px',
    marginBottom: '10px'
  },
  btn: {
    marginTop: 'auto',
    marginBottom: 16,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px'
    }
  }
}));
