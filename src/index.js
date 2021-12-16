import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import WebFont from 'webfontloader';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

WebFont.load({
  google: {
    families: ['Lato', 'Montserrat', 'Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
  }
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      initialStale: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);
