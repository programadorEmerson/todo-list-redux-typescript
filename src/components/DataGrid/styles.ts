import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const CustomDataGrid = styled(DataGrid)`
  &.MuiCheckbox-colorPrimary.Mui-checked {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  border-color: transparent;
  .grey {
    background-color: #ebebeb;
  }
  .white {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;
