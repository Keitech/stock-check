import { styled } from '@mui/material/styles';

export const StatsContainer = styled('div')(({ theme }) => ({
  marginTop: '15px',
}));

export const StatsTitleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const StatsTitle = styled('div')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  marginRight: '25px',
}));

export const StatsOptionContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
}));

interface StatsProps {
  active: boolean;
}

export const StatsOption = styled('div', {
  shouldForwardProp: (props) => props !== 'active',
})<StatsProps>(({ theme, active }) => ({
  cursor: 'pointer',
  fontSize: '20px',
  color: active ? '#0000CD' : 'black',
  background: active ? '#F8F8F8' : 'none',
  borderRadius: '5px',
  fontWeight: 600,
  padding: '10px',
  '&: hover': {
    background: '#F8F8F8',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}));
