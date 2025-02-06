import '@/styles/custom.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Head from 'next/head';
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
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
