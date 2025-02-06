import '@/styles/custom.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const theme = createTheme({
  palette: {
    primary: { main: '#FF7409' },
    secondary: { main: '#333' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Toaster/>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
