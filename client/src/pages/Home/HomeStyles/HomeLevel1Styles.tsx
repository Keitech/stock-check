import { styled } from '@mui/material/styles';

// Level 1 Styles

export const Level1Container = styled('div')(({ theme }) => ({
  // background: 'lightblue',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '100px 0'
}));

export const InnerL1Container = styled('div')(({ theme }) => ({
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
}))

export const QuoteText = styled('div')(({ theme }) =>({
  fontSize: '40px',
  textAlign: 'center',
  fontWeight: 600,
}))

export const QuoteSubText = styled('div')(({ theme }) => ({
  fontSize: '16px',
  marginTop: '60px',
  textAlign: 'center'
}))