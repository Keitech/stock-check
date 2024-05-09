import { Routes, BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import HomePage from './Home/HomePage';
import About from './About/AboutPage';
import Profile from './Profile/Profile';
import SearchPage from './Search/SearchPage';
import SignUp from './Signup/Signup';
import FavouritesPage from './Favourites/FavouritesPage';

const Layout = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
