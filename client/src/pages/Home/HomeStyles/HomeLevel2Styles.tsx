import { styled } from '@mui/material/styles'
import MoneySymbol from '@mui/icons-material/MonetizationOn';
import stockImg1 from '../../../assets/img1.jpg'

export const Level2Container = styled('div')(({ theme }) => ({
  background: '#EEF2F8',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'space-around',
  justifyContent: 'center',
  gap: '75px',
  alignItems: 'center',
  padding: '70px 30px',
  flexWrap: 'wrap'
}));

// Card Styles

export const CardContainer = styled('div')(({ theme }) => ({
  height: '350px',
  width: '450px',
  borderRadius: '30px',
  background: 'white',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}));

export const CardIcon = styled(MoneySymbol)(({ theme }) => ({
  fontSize: '40px',
  marginBottom: '25px'
}));

type CardInterface = {
  titleColor: string
}

export const CardTitle = styled('div', {
  shouldForwardProp: prop => prop !== 'titleColor'
})<CardInterface>(({ theme, titleColor }) => ({
  fontSize: '30px',
  marginBottom: '30px',
  fontWeight: '600',
  color: titleColor
}))

export const CardDescription = styled('div')(({ theme }) => ({
  width: '80%',
  fontSize: '14px'
}))

export const TestImg = styled('img')(({ theme }) => ({

}))