import { styled } from '@mui/material/styles'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Carousel Styles

export const CarouselCard = styled('div')(({ theme }) => ({
  height: '75px',
  width: 'auto',
  display: 'flex',
  // justifyContent: 'space-between'
  // background: 'pink',
}));

export const CarouselCardLeft = styled('div')(({ theme }) => ({
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const TickerTitle = styled('div')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
}));

export const TickerPrice = styled('div')(({ theme }) => ({
  fontWeight: 500,
}));

interface TickerProps {
  diff: boolean;
}

export const TickerDiff = styled('div', {
  shouldForwardProp: (props) => props !== 'diff',
})<TickerProps>(({ theme, diff }) => ({
  fontSize: '14px',
  color: diff ? theme.palette.secondary.light : theme.palette.secondary.main
}));

export const CarouselCardRight = styled('div')(({ theme }) => ({}));

export const StyledUpArrow = styled(ArrowDropUpIcon)(({ theme }) => ({
  fontSize: '40px',
  marginTop: '10px',
  color: theme.palette.secondary.main,
}));

export const StyledDownArrow = styled(ArrowDropDownIcon)(({ theme }) => ({
  fontSize: '40px',
  marginTop: '10px',
  color: theme.palette.secondary.light,
}));

export const CarouselContainer = styled('div')(({ theme }) => ({
  '--speed': '35s',
  '--gap': '3rem',
  borderTop: '1px #cdd3d9 solid',
  borderBottom: '1px #cdd3d9 solid',
  display: 'flex',
  flexWrap: 'nowrap',
  overflow: 'hidden',
  gap: 'var(--gap)',
  padding: '5px 0',
  border: '1px solid black',
}));

export const TickerMap = styled('div')(({ theme }) => ({
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'nowrap',
  gap: '3rem',
  minWidth: '100%',
  animation: 'Slide var(--speed) linear infinite',

  '@keyframes Slide': {
    '0%': {
      transform: 'translateX(calc(var(--gap) * -1))',
    },
    '100%': {
      transform: 'translateX(calc(-100% - var(--gap) * 2))',
    },
  },
}));