import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '30%',
    cursor: 'pointer',
    minWidth: '300px',
    height: '250px',
    margin: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid #007399',
    borderRadius: '8px',
    [theme.breakpoints.down('md')]: {
      minWidth: '280px',
      height: '110px'
    }
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '20px',
    marginBottom: '10px',
    paddingBottom: '0px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 'auto 0'
    }
  },
  img: {
    width: '70px',
    height: '70px'
  },
  color: {
    fill: '#346723'
  }
}));
