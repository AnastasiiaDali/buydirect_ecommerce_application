import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { store } from './store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import WebFont from 'webfontloader';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

WebFont.load({
  google: {
    families: ['Lato', 'Montserrat', 'Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
  }
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        preventDuplicate
        hideIconVariant
        TransitionComponent={Slide}>
        <CssBaseline />
        <BrowserRouter>
          <Provider store={store}>
            <ScrollToTop />
            <Header />
            <App />
            <Footer />
          </Provider>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);
