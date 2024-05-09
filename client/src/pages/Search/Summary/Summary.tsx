import { useSelector } from 'react-redux';
import { selectAllTickerInfo } from '../../../components/features/SearchTicker/tickerSlice';
import {
  TickerSummaryContainer,
  TickerSummaryTitle,
  TickerSummary,
} from './SummaryStyles';

const Summary = () => {
  const tickerInfo = useSelector(selectAllTickerInfo);

  return (
    <TickerSummaryContainer>
      <TickerSummaryTitle>Business Summary</TickerSummaryTitle>
      <TickerSummary>
        {tickerInfo.entry_info?.longBusinessSummary
          ? tickerInfo.entry_info?.longBusinessSummary
          : 'Looks like this business has no story to share!'}
      </TickerSummary>
    </TickerSummaryContainer>
  );
};

export default Summary;
