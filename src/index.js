import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import WebFont from 'webfontloader';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

WebFont.load({
  google: {
    families: ['Lato', 'Montserrat', 'Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
