import { TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllTickerInfo } from '../../../components/features/SearchTicker/tickerSlice';
import {
  StyledTableCell,
  StyledTableContainer,
} from './StatsStyles/SimpleStatsStyles';
import { convertData } from './StatsFunctions';

const SimpleStats: React.FC = () => {
  const tickerInfo = useSelector(selectAllTickerInfo);

  const simpleData = [
    {
      cellName: 'Previous Close',
      cellData: tickerInfo.entry_info?.previousClose,
    },
    { cellName: 'Open', cellData: tickerInfo.entry_info?.open },
    { cellName: 'Bid', cellData: tickerInfo.entry_info?.bid },
    { cellName: 'Ask', cellData: tickerInfo.entry_info?.ask },
    {
      cellName: `Day's Range`,
      cellData: `${tickerInfo.entry_info?.dayLow} - ${tickerInfo.entry_info?.dayHigh}`,
    },
    {
      cellName: '52 Week Range',
      cellData: `${tickerInfo.entry_info?.fiftyTwoWeekLow} - ${tickerInfo.entry_info?.fiftyTwoWeekHigh}`,
    },
    {
      cellName: 'Volume',
      cellData: tickerInfo.entry_info?.volume,
    },
    {
      cellName: 'Avg. Volume',
      cellData: tickerInfo.entry_info?.averageVolume,
    },
    {
      cellName: 'Market Cap',
      cellData: tickerInfo.entry_info?.marketCap,
    },
    { cellName: 'Beta', cellData: tickerInfo.entry_info?.beta },
    { cellName: 'PE Ratio', cellData: tickerInfo.entry_info?.trailingPE },
    { cellName: 'EPS', cellData: tickerInfo.entry_info?.trailingEps },
    { cellName: 'Earnings Date', cellData: undefined },
    {
      cellName: 'Dividend & Yield',
      cellData: `${tickerInfo.entry_info?.dividendRate} (${
        (tickerInfo.entry_info?.dividendYield * 100).toFixed(2)
      }%)`,
    },
    {
      cellName: 'Ex-dividend Date',
      cellData: new Date(
        tickerInfo.entry_info?.exDividendDate * 1000
      ).toLocaleDateString('en-US'),
    },
    {
      cellName: '1Y target Est',
      cellData: tickerInfo.entry_info?.targetMeanPrice,
    },
  ];

  return (
    <StyledTableContainer>
      {simpleData.map((val, key) => (
        <TableRow key={key} sx={{ width: '400px' }}>
          <StyledTableCell>{val.cellName}</StyledTableCell>
          <StyledTableCell sx={{fontWeight: 'bold'}}>
            {val.cellData
              ? convertData(val.cellData)
              : 'N/A'}
          </StyledTableCell>
        </TableRow>
      ))}
    </StyledTableContainer>
  );
};

export default SimpleStats;
