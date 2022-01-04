import { createTheme } from '@material-ui/core/styles';

export const PrimaryBlue = '#007399';
export const PrimaryBlueHover = '#0099cc';
export const LightBlue = '#cce0ff';
export const PrimaryWhite = '#fff';
export const TextDarkGrey = '#202020';
export const TextLightGrey = '#696969';
export const BlackBg = '#161616';
export const White = '#fff';
export const LightGreyBg = '#f2f2f2';
export const Red = '#cc0000';

const theme = createTheme({
  palette: {
    primary: {
      main: PrimaryBlue,
      light: LightBlue,
      white: PrimaryWhite
    },
    secondary: {
      main: BlackBg
    },
    background: {
      black: BlackBg,
      white: White,
      default: White
    },
    text: {
      primary: TextDarkGrey,
      secondary: TextLightGrey
    },
    error: {
      main: Red
    },
    border: {
      main: LightGreyBg
    }
  },
  typography: {
    fontFamily: ['"Lato"', '"Montserrat"', '"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(
      ','
    ),
    h1: {
      fontSize: '1.875rem',
      lineHeight: 1.2,
      letterSpacing: '0.05rem'
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.06rem'
    },
    h3: {
      fontSize: '1.313rem',
      lineHeight: 1.2,
      letterSpacing: '-0.06rem'
    },
    h4: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      fontWeight: 300
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 300
    },
    body2: {
      fontSize: '0.75rem'
    },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 300,
      color: Red,
      textDecoration: 'line-through'
    },
    button: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.4
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        body: {
          margin: 0,
          boxSizing: 'border-box'
        }
      }
    },
    input: {
      root: {
        '&:focus': {
          borderColor: PrimaryBlue
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fill: TextDarkGrey
      },
      colorPrimary: {
        fill: 'red'
      },
      colorSecondary: {
        fill: '#fff'
      }
    },
    MuiDivider: {
      flexItem: {
        height: 1
      }
    },
    MuiListItemText: {
      inset: {
        paddingLeft: 0
      }
    },
    MuiButton: {
      root: {
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '16px',
        color: LightGreyBg,
        minWidth: 64
      },
      contained: {
        color: White,
        padding: '10px 15px',
        minWidth: 64,
        backgroundColor: PrimaryBlue,
        '&:hover': {
          backgroundColor: PrimaryBlueHover
        }
      },
      outlined: {
        color: PrimaryBlue,
        padding: '10px 15px',
        minWidth: 64,
        borderColor: PrimaryBlue,
        backgroundColor: LightGreyBg,
        '&:hover': {
          '@media (hover: none)': {
            backgroundColor: PrimaryBlueHover,
            color: PrimaryBlue
          }
        }
      },
      text: {
        color: PrimaryBlue,
        padding: '10px 15px',
        minWidth: 64,
        backgroundColor: White,
        '&:hover': {
          '@media (hover: none)': {
            backgroundColor: White,
            color: PrimaryBlue
          }
        }
      }
    }
  }
});

export default theme;
