import { useEffect, useState } from 'react';
import {
  InnerL1Container,
  Level1Container,
  QuoteSubText,
  QuoteText,
} from './HomeStyles/HomeLevel1Styles';
import FadeIn from 'react-fade-in';

const HomeLevel1 = () => {
  interface QuotesInterface {
    [key: string]: { quote: string; next: string };
  }

  const quotes: QuotesInterface = {
    '1': {
      quote: `Time in the market, beats timing the market. - Ken Fisher`,
      next: '2',
    },
    '2': {
      quote: `In many ways, the stock market is like the weather, 
      in that if you do not like the current conditions, all you have to do is wait. - Low Simpson`,
      next: '3',
    },
    '3': {
      quote: `An investment in knowledge pays the best interest. - Benjamin Franklin`,
      next: '1',
    },
  };

  const [display, setDisplay] = useState<string>('1');

  useEffect(() => {
    const { next } = quotes[display];

    const timerId = setTimeout(() => {
      setDisplay(next);
    }, 7000);

    return () => {
      clearTimeout(timerId);
    };
  }, [display]);

  const FadeText = () => {
    return (
      <div style={{minHeight: '150px', height: 'fit-content'}}>
      <FadeIn>
        <QuoteText>{quotes[display].quote}</QuoteText>
      </FadeIn>
      </div>
    );
  };

  return (
    <Level1Container>
      <InnerL1Container>
        <FadeText />
        <QuoteSubText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </QuoteSubText>
      </InnerL1Container>
    </Level1Container>
  );
};

export default HomeLevel1;
