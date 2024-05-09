import React, { useState } from 'react';
import Graph from './Graph/Graph';
import Chart from './Stats/Stats';
import {
  SearchContainer,
  TitleContainer,
  TimeContainer,
  TickerName,
  TickerPrice,
  CurrencyText,
  TickerPercentage,
  StyledUpArrow,
  StyledDownArrow,
  TimeSelector,
  Separator,
  NotFavourited,
  Favourited,
} from './SearchPageStyles';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTickerInfo } from '../../components/features/SearchTicker/tickerSlice';
import Summary from './Summary/Summary';
import Footer from '../Footer/Footer';
import {
  selectLogin,
  addFavourite,
  removeFavourite,
} from '../../components/features/Login/loginSlice';

const SearchPage: React.FC = () => {
  const [viewTimeSelect, setViewTimeSelect] = useState<string>('1D');

  const dispatch = useDispatch();

  const tickerInfo = useSelector(selectAllTickerInfo);
  const account = useSelector(selectLogin);
  const currency = Object.keys(tickerInfo).length
    ? tickerInfo.entry_info?.country === 'United States'
      ? 'USD'
      : tickerInfo.entry_info?.country === 'Canada'
      ? 'CAD'
      : ''
    : '';

  const dateRanges = ['1D', '5D', '1M', '6M', '1Y', '5Y'];

  const handleFavourite = () => {
    dispatch(addFavourite(tickerInfo.name?.toUpperCase()));
  };

  const handleRemoveFavourite = () => {
    dispatch(removeFavourite(tickerInfo.name?.toUpperCase()));
  };

  if (tickerInfo === 'unknown ticker') {
    return (
      <h4
        style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
      >
        We couldn't find that ticker. Please check the spelling of the ticker
        and try again!
      </h4>
    );
  }

  return (
    <SearchContainer>
      {!Object.keys(tickerInfo).length ? (
        <div>Search for a ticker!</div>
      ) : (
        <>
          <TitleContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TickerName>{tickerInfo.name?.toUpperCase()}</TickerName>
              {account.loggedIn && (
                <>
                  {account.favourites.includes(
                    tickerInfo.name?.toUpperCase()
                  ) ? (
                    <Favourited onClick={handleRemoveFavourite} />
                  ) : (
                    <NotFavourited onClick={handleFavourite} />
                  )}
                </>
              )}
            </div>
            <TickerPrice>
              {tickerInfo.entry_info?.currentPrice.toFixed(2)}
              <CurrencyText>{currency}</CurrencyText>
            </TickerPrice>
            {tickerInfo.percentage > 0 ? (
              <div style={{ display: 'flex' }}>
                <TickerPercentage
                  net={tickerInfo.percentage > 0}
                  style={{ marginRight: '5px' }}
                >
                  +{tickerInfo.day_diff}
                </TickerPercentage>
                <TickerPercentage net={tickerInfo.percentage > 0}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledUpArrow />
                    (+{tickerInfo.percentage}%)
                  </div>
                </TickerPercentage>
              </div>
            ) : (
              <div style={{ display: 'flex' }}>
                <TickerPercentage
                  net={tickerInfo.percentage > 0}
                  style={{ marginRight: '5px' }}
                >
                  {tickerInfo.day_diff}
                </TickerPercentage>
                <TickerPercentage net={tickerInfo.percentage > 0}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledDownArrow />({tickerInfo.percentage}%)
                  </div>
                </TickerPercentage>
              </div>
            )}
          </TitleContainer>
          <TimeContainer>
            <div style={{ padding: '5px', fontWeight: 500, fontSize: '18px' }}>
              Date Range
            </div>
            {dateRanges.map((val, key) => (
              <>
                <TimeSelector
                  active={viewTimeSelect === val}
                  onClick={() => setViewTimeSelect(val)}
                >
                  {val}
                </TimeSelector>
                {val !== '5Y' && <Separator>|</Separator>}
              </>
            ))}
          </TimeContainer>
          <div style={{ margin: '10px 0' }}>
            <Graph viewTimeSelect={viewTimeSelect} />
          </div>
          <Chart />
          <Summary />
        </>
      )}
      <Footer />
    </SearchContainer>
  );
};

export default SearchPage;
