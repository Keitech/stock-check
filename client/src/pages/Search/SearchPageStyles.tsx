import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export const SearchContainer = styled('div')(({ theme }) => ({
  height: '100%',
  padding: '0 30px',
  marginTop: '10px',
}));

export const TitleContainer = styled('div')(({ theme }) => ({}));

interface TimeProps {
  active: boolean
}

export const TimeSelector = styled('div', {
  shouldForwardProp: prop => prop !== 'active'
})<TimeProps>(({ theme, active }) => ({
  color: active ? '#0000CD' : 'black',
  background: active ? '#F0F0F0' : 'none',
  borderRadius: '5px',
  fontWeight: 600,
  padding: '5px',
  '&: hover': {
    background: '#F0F0F0',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}))

export const Separator = styled('div')(({ theme }) => ({
padding: '3px',
cursor: 'default'
}))

export const TickerName = styled('div')(({ theme }) => ({
  fontSize: '50px',
  margin: '15px 0'
}));

export const TickerPrice = styled('div')(({ theme }) => ({
  fontSize: '25px',
  display: 'flex',
}));

export const CurrencyText = styled('div')(({ theme }) => ({
  fontSize: '25px',
  marginLeft: '5px',
  color: 'gray',
}));

export const StyledUpArrow = styled(ArrowUpwardIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '18px'
}))

export const StyledDownArrow = styled(ArrowDownwardIcon)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '16px'
}))

type PercentageProps = {
  net: boolean;
};
export const TickerPercentage = styled('div', {
  shouldForwardProp: (props) => props !== 'net',
})<PercentageProps>(({ theme, net }) => ({
  color: net ? theme.palette.secondary.main : theme.palette.secondary.light,
  fontSize: '18px',
  marginTop: '5px'
}));

export const TextContainer = styled('div')(({ theme }) => ({}));

export const TimeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  margin: '15px 0',
  alignItems: 'center'
}));

export const VisualContainer = styled('div')(({ theme }) => ({
  marginTop: '25px',
  width: '100%',
  // display: 'flex',
  // flexDirection: 'row',
}));

export const NotFavourited = styled(StarOutlineIcon)({
  marginLeft: '10px',
  width: '40px',
})

export const Favourited = styled(StarIcon)({
  marginLeft: '10px',
  width: '40px',
  color: '#FFDF00'
})