import { useState } from 'react';
import {
  SignupContainer,
  SignupDialogContainer,
  IconDiv,
  StyledLockIcon,
  UsernameTextField,
  PasswordTextField,
  StyledButton,
  VisibleIcon, 
  VisibleOffIcon
} from './SignupStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfiles, createProfile } from '../../components/features/Profile/profileSlice';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);

  const handleSignup = () => {
    const checkUser = profiles.find(
      (profile: any) => profile.username === username
    );
    if (!checkUser) {
      dispatch(createProfile({username: username, password: password}))
    }
  };

  return (
    <SignupContainer>
      <SignupDialogContainer>
        <IconDiv>
          <StyledLockIcon />
        </IconDiv>
        <div style={{ marginBottom: '25px', fontSize: '24px' }}>Sign Up</div>
        <UsernameTextField
          name='username'
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
          id='username'
          label='username'
          autoFocus
        />
        <PasswordTextField
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          id='password'
          label='password'
          type={visible ? '' : 'password'}
          InputProps={{
            endAdornment: visible ? (
              <VisibleIcon onClick={() => setVisible(!visible)} />
            ) : (
              <VisibleOffIcon onClick={() => setVisible(!visible)} />
            ),
          }}
          autoFocus
        />
        <StyledButton variant='contained' onClick={handleSignup}>
          Sign Up
        </StyledButton>
      </SignupDialogContainer>
    </SignupContainer>
  );
};

export default Signup;
