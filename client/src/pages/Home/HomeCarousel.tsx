import { useEffect, FC } from 'react';

import {
  CarouselCard,
  CarouselCardLeft,
  CarouselCardRight,
  CarouselContainer,
  TickerMap,
  TickerTitle,
  TickerPrice,
  TickerDiff,
  StyledUpArrow,
  StyledDownArrow,
} from './HomeStyles/HomeCarouselStyles';
import { useSelector, useDispatch } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { fetchCarousel, getCarouselStatus, selectAllCarousel } from '../../components/features/HomeCarousel/carouselSlice';


const HomeCarousel: React.FC = () => {
  // const [currentTopTickers, setCurrentTopTickers] = useState<any[]>([]);
  // const [recall, setRecall] = useState<boolean>(false)

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const carousel = useSelector(selectAllCarousel)
  const status = useSelector(getCarouselStatus)
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCarousel())
    }
    // const timer = setTimeout(() => {
    //   dispatch(fetchCarousel())
    //   setRecall(!recall)
    // }, 15000)

    // return () => {
    //   clearTimeout(timer)
    // }
  }, [dispatch, status]);

  type TickerProps = {
    name: string;
    dayDiff: number;
    currPrice: number;
    percent: number;
  };

  const TickerCard: FC<TickerProps> = ({
    name,
    dayDiff,
    currPrice,
    percent,
  }: TickerProps) => {
    return (
      <CarouselCard>
        <CarouselCardLeft>
          <TickerTitle>{name}</TickerTitle>
          <TickerPrice>{currPrice}</TickerPrice>
          <TickerDiff diff={dayDiff < 0}>
            {dayDiff} ({dayDiff < 0 ? -1 * percent : percent}%)
          </TickerDiff>
        </CarouselCardLeft>
        <CarouselCardRight>
          {dayDiff < 0 ? <StyledDownArrow /> : <StyledUpArrow />}
        </CarouselCardRight>
      </CarouselCard>
    );
  };

  return (
    <CarouselContainer>
      <TickerMap>
        {carousel?.map((value:any) => (
          <TickerCard
            name={value.name}
            dayDiff={value.day_diff}
            currPrice={value.current_price}
            percent={value.percentage}
          />
        ))}
      </TickerMap>
      <TickerMap>
        {carousel?.map((value:any) => (
          <TickerCard
            name={value.name}
            dayDiff={value.day_diff}
            currPrice={value.current_price}
            percent={value.percentage}
          />
        ))}
      </TickerMap>
    </CarouselContainer>
  );
};

export default HomeCarousel;
