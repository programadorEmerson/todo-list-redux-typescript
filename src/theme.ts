import { createTheme } from '@mui/material/styles';
import { ptBR as dataGridPtBr } from '@mui/x-data-grid';
import { ptBR as dateTimePtBr } from '@mui/x-date-pickers/locales';

const theme = createTheme(
  {
    palette: {
      error: {
        light: '#ff4d4d',
        main: '#ff3838',
        dark: ' #b33939'
      },
      success: {
        light: '#1dd1a1',
        main: '#10ac84',
        dark: '#01a3a4'
      },
      warning: {
        light: '#feca57',
        main: '#ff9f43',
        dark: '#ff7f50'
      }
    },
  },
  dateTimePtBr,
  dataGridPtBr
);

export default theme;
