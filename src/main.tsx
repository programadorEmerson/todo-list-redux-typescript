import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import App from './pages/Home.tsx';

import store from './redux/store/tasks.store.ts';

import theme from './theme.ts';

import 'dayjs/locale/pt-br';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <CssBaseline />
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
