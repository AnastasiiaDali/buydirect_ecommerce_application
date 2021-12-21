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
    border: {
      main: LightGreyBg
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      '"Montserrat"',
      '"Oswald"',
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: 30
    },
    h2: {
      fontSize: 28
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.3
    },
    h4: {
      fontSize: 16,
      lineHeight: 1.3
    },
    body1: {
      fontSize: 14
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
      }
    },
    MuiDivider: {
      flexItem: {
        height: 1
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
          '@media (hover: none)': {
            backgroundColor: PrimaryBlueHover,
            color: White
          }
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
