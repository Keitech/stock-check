import { styled } from '@mui/material/styles'

export const TickerSummaryContainer = styled('div')(({ theme }) => ({
  marginTop: '15px'
}));

export const TickerSummaryTitle = styled('div')({
  fontSize: '22px',
  fontWeight: 600
})

export const TickerSummary = styled('div')(({ theme }) => ({
  marginTop: '10px'
}))