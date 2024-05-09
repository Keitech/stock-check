import { Button } from '@mui/material'
import { selectLogin, userLogout } from '../../components/features/Login/loginSlice'
import { LoginDialogContainer } from './ProfileStyles'
import { useSelector, useDispatch } from 'react-redux'
import { updateFavourites } from '../../components/features/Profile/profileSlice'

const LoggedIn = () => {

  const account = useSelector(selectLogin)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(updateFavourites({username: account.username, favourites: account.favourites}))
    dispatch(userLogout())
  }

  return (
    <LoginDialogContainer>
      <p style={{}}>Logged in as {account.username}</p>
      <Button onClick={handleLogout}>
        Log Out
      </Button>
    </LoginDialogContainer>
  )
}

export default LoggedIn