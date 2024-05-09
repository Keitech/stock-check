import React from 'react';
import { DeleteIcon, FavouritesContainer } from './FavouritesPageStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {
  selectLogin,
  removeFavourite,
} from '../../components/features/Login/loginSlice';
import { useDispatch } from 'react-redux';
import { fetchTicker } from '../../components/features/SearchTicker/tickerSlice';

const FavouritesPage: React.FC = () => {
  const account = useSelector(selectLogin);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleRemove = (val: string) => {
    dispatch(removeFavourite(val));
  };

  const handleSelectFavourite = (val: string) => {
    dispatch(fetchTicker(val));
    navigate('/search');
  };

  return (
    <FavouritesContainer>
      <h2>Favourites</h2>
      <TableContainer
        component={Paper}
        style={{ width: '700px', height: 'fit-content' }}
      >
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '18px', fontWeight: 600 }}>
                Name
              </TableCell>
              <TableCell
                align='right'
                style={{ fontSize: '18px', fontWeight: 600 }}
              >
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {account.favourites.map((val: string, i: number) => (
              <TableRow key={i}>
                <TableCell
                  component='th'
                  scope='row'
                  onClick={() => handleSelectFavourite(val)}
                  style={{cursor: 'pointer'}}
                >
                  {val}
                </TableCell>
                <TableCell align='right'>
                  <DeleteIcon onClick={() => handleRemove(val)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </FavouritesContainer>
  );
};

export default FavouritesPage;
