import { Box, styled } from '@mui/material';

export const ItemGrid = styled(Box) <{ justify: 'flex-end' | 'center' | 'flex-start' }>`
  padding: ${({ theme }) => theme.spacing(0.6)};
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;
