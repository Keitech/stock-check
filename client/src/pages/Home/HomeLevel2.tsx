import {
  CardContainer,
  Level2Container,
  CardIcon,
  CardTitle,
  CardDescription,
} from './HomeStyles/HomeLevel2Styles';

import stockImg1 from '../../assets/img1.jpg'
import stockImg2 from '../../assets/invest2.avif'
import stockImg3 from '../../assets/invest3.avif'

const HomeLevel2 = () => {
  type CardInterface = {
    title: string;
    description: string;
    icon: JSX.Element;
    color: string;
    img: any;
  };

  const cardData: Array<CardInterface> = [
    {
      title: 'Investment',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      icon: <CardIcon />,
      color: 'blue',
      img: stockImg1,
    },
    {
      title: 'Banking',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      icon: <CardIcon />,
      color: 'orange',
      img: stockImg2
    },
    {
      title: 'Secured Funds',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      icon: <CardIcon />,
      color: 'purple',
      img: stockImg3,
    },
  ];

  return (
    <Level2Container>
      {cardData.map((value) => (
        <CardContainer>
          <img src={value.img} alt='temp' style={{width: '200px', height: '150px', marginBottom: '10px'}}/>
          <CardTitle titleColor={value.color}>{value.title}</CardTitle>
          <CardDescription>{value.description}</CardDescription>
        </CardContainer>
      ))}
    </Level2Container>
  );
};

export default HomeLevel2;
