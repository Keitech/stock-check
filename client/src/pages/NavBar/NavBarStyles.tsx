import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Popover from '@mui/material/Popover';

export const NavBarContainer = styled('div')(({ theme }) => ({
  height: '10vh',
  width: '100vw',
  // background: 'pink',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const HomeButton = styled('div')(({ theme }) => ({
  marginLeft: '30px',
  fontSize: '18px'
}))

export const Search = styled(TextField)(({ theme }) => ({

}));

export const Profile = styled(AccountCircleIcon)(({ theme }) => ({
  marginRight: '30px',
  fontSize: '40px',
  cursor: 'pointer',
  color: 'blue'
}))

export const StyledPopover = styled(Popover)({
  
})

export const LoggedInText = styled('div')(({ theme }) => ({
  marginRight: '15px',

}))

export const Selection = styled('div')(({ theme }) => ({
  padding: '10px 25px',
  cursor: 'pointer',
  '&:hover': {
    background: 'lightgray'
  }
}))
