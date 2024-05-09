import { useState } from 'react';
import {
  ProfileContainer,
  LoginDialogContainer,
  UsernameTextField,
  PasswordTextField,
  IconDiv,
  StyledLockIcon,
  StyledButton,
  LoginFooter,
  FooterText,
  VisibleIcon,
  VisibleOffIcon,
} from './ProfileStyles';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfiles } from '../../components/features/Profile/profileSlice';
import { Link } from 'react-router-dom';
import {
  selectLogin,
  userLogin,
} from '../../components/features/Login/loginSlice';
import LoggedIn from './LoggedIn';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const logins = useSelector(selectProfiles);
  const account = useSelector(selectLogin);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameError(false);
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordError(false);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // check if profile is real
    const user = logins.find((profile: any) => profile.username === username);

    if (user) {
      // check if password matches
      if (user.password === password) {
        dispatch(
          userLogin({
            username: username,
            password: password,
            favourites: user.favourites,
          })
        );
      } else {
        setPasswordError(true);
      }
    } else {
      setUsernameError(true);
    }
  };

  return (
    <ProfileContainer>
      {account.loggedIn ? (
        <LoggedIn />
      ) : (
        <LoginDialogContainer>
          <IconDiv>
            <StyledLockIcon />
          </IconDiv>
          <div style={{ marginBottom: '25px', fontSize: '24px' }}>Log In</div>
          <UsernameTextField
            value={username}
            name='username'
            required
            fullWidth
            id='username'
            label='username'
            onChange={handleUsername}
          />
          {usernameError && <div>USERNAME ERROR</div>}
          <PasswordTextField
            name='password'
            value={password}
            onChange={handlePassword}
            required
            fullWidth
            id='password'
            label='password'
            type={visible ? 'text' : 'password'}
            InputProps={{
              endAdornment: visible ? (
                <VisibleIcon onClick={() => setVisible(!visible)} />
              ) : (
                <VisibleOffIcon onClick={() => setVisible(!visible)} />
              ),
            }}
          />
          {passwordError && <div>PASSWORD ERROR</div>}
          <StyledButton variant='contained' onClick={handleLogin}>
            Log In
          </StyledButton>
          <LoginFooter>
            <FooterText>Forgot password?</FooterText>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
              <FooterText>Don't have an account? Sign up</FooterText>
            </Link>
          </LoginFooter>
        </LoginDialogContainer>
      )}
    </ProfileContainer>
  );
};

export default Profile;
