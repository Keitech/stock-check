import { styled } from '@mui/material/styles';
import { TableContainer, TableRow, TableCell } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '30px 0'
});

export const StyledTableCell = styled(TableCell)({
  fontSize: '16px',
  width: '175px',
});
