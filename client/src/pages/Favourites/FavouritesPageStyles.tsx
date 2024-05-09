import { styled } from '@mui/material/styles'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const FavouritesContainer = styled('div')(({ theme }) => ({
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DeleteIcon = styled(DeleteOutlineIcon)({
  cursor: 'pointer'
});

