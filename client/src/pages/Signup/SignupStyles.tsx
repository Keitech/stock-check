import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import LockIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const SignupContainer = styled('div')(({ theme }) => ({
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  // background: 'pink'
}));

export const SignupDialogContainer = styled('div')(({ theme }) => ({
  padding: '20px',
  // background: 'lightgray',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  marginBottom: '10px'
}));

export const IconDiv = styled('div')(({ theme }) => ({
  borderRadius: '50%',
  background: 'lightblue',
  width: 'fit-content',
  padding: '10px',
  marginBottom: '5px'
}))

export const StyledLockIcon = styled(LockIcon)({

})

export const UsernameTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '20px',
  width: '500px'
}))

export const PasswordTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '20px',
  width: '500px'
}))

export const StyledButton = styled(Button)({
  width: '100%',
  marginBottom: '15px'
});

export const VisibleIcon = styled(VisibilityOutlinedIcon)({
  cursor: 'pointer'
})

export const VisibleOffIcon = styled(VisibilityOffOutlinedIcon)({
  cursor: 'pointer'
})