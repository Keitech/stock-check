import { styled } from '@mui/material/styles'

export const Level3Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: 'fit-content',
  padding: '30px'
}));

export const LeftContainer = styled('div')(({ theme }) => ({
  width: '60%',
}))

export const RightContainter = styled('div')(({ theme }) => ({
  marginLeft: '30px',
  display: 'flex',
  flexDirection: 'column',
  
}))