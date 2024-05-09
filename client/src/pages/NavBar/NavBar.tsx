import { useState, useRef } from 'react';
import { NavBarContainer, HomeButton, Search, Profile, StyledPopover, Selection } from './NavBarStyles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';

// redux
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTicker } from '../../components/features/SearchTicker/tickerSlice';
import { selectLogin, userLogout } from '../../components/features/Login/loginSlice';
import { updateFavourites } from '../../components/features/Profile/profileSlice';

const NavBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState(false)
  const iconRef = useRef(null)
  const navigate = useNavigate();

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const account = useSelector(selectLogin);

  const handlePaper = () => {
      setAnchorEl(iconRef.current)
      setOpenPopover(true)
  }

  const handleSearchTicker = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(fetchTicker(searchValue.replace(/\s/g, ''))).unwrap();
      navigate('/search');
    }
  };

  const handleProfileSelection = () => {
    navigate('/profile')
    setOpenPopover(false)
  }
  const handleFavouritesSelection = () => {
    navigate('/favourites')
    setOpenPopover(false)
  }
  const logOutSelection = () => {
    dispatch(updateFavourites({username: account.username, favourites: account.favourites}))
    dispatch(userLogout())
    setOpenPopover(false)
  }

  return (
    <NavBarContainer>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <HomeButton>Home</HomeButton>
      </Link>
      <Search
        value={searchValue}
        placeholder='Try searching for a ticker here!'
        variant='standard'
        size='medium'
        InputProps={{
          startAdornment: <SearchIcon style={{ marginRight: '5px' }} />,
          endAdornment: searchValue !== '' && (
            <CloseIcon
              style={{ cursor: 'pointer' }}
              onClick={() => setSearchValue('')}
            />
          ),
          style: {
            width: '400px',
          },
        }}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearchTicker}
      />
      <div style={{display: 'flex', alignItems: 'center'}}>
        {/* {account.loggedIn ? <LoggedInText>Logged In as {account.username} </LoggedInText> : <></>} */}
        {account.loggedIn ? (
          <div ref={iconRef}>
            <Profile onClick={handlePaper}/>
            <StyledPopover
              open={openPopover}
              anchorEl={anchorEl}
              onClose={() => setOpenPopover(false)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <Selection onClick={handleProfileSelection}>Profile</Selection>
              <Selection onClick={handleFavouritesSelection}>Favourites</Selection>
              <Selection onClick={logOutSelection}>Log Out</Selection>
            </StyledPopover>
          </div>
        ) : (
          <>
            <Link to='/profile'>
              <Profile />
            </Link>
          </>
        )}
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
