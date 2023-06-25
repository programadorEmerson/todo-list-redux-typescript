import { Box, Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const CustomDataGrid = styled(DataGrid)`
  border-color: transparent;
  .yellow {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.palette.warning.light};
    color: ${({ theme }) => theme.palette.warning.contrastText};
  }
  .green {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.palette.success.light};
    color: ${({ theme }) => theme.palette.success.contrastText};
  }
`;

export const StyledButtonContainer = styled(Box)`
  display: flex;
  width: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1)};

  button {
    background: transparent;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    i {
      font-size: 14px;
      padding-top: 8px;
      transition: 0.3s;

      :not(:disabled):hover {
        color: ${({ theme }) => theme.palette.info.main};
      }
    }
  }
`;

export const TooltipCustom = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main
  }
}));
