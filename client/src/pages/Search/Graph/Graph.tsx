import React, { PureComponent, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { selectAllTickerInfo } from '../../../components/features/SearchTicker/tickerSlice';

interface GraphInterface {
  viewTimeSelect: string;
}

const Graph: React.FC<GraphInterface> = ({ viewTimeSelect }) => {
  const tickerInfo = useSelector(selectAllTickerInfo);
  // const [currData, setCurrData] = useState(tickerInfo.oneDayData || [])
  let min = 5;
  let max = 95;

  if (viewTimeSelect === '1D' && tickerInfo.oneDayData) {
    min = Math.min(...tickerInfo.oneDayData.map((item: any) => item['Close']));
    max = Math.max(...tickerInfo.oneDayData.map((item: any) => item['Close']));
  } else if (viewTimeSelect === '5D' && tickerInfo.fiveDayData) {
    min = Math.min(...tickerInfo.fiveDayData.map((item: any) => item['Close']));
    max = Math.max(...tickerInfo.fiveDayData.map((item: any) => item['Close']));
  } else if (viewTimeSelect === '1M' && tickerInfo.oneMonthData) {
    min = Math.min(...tickerInfo.oneMonthData.map((item: any) => item['Close']));
    max = Math.max(...tickerInfo.oneMonthData.map((item: any) => item['Close']));
  } else if (viewTimeSelect === '6M' && tickerInfo.sixMonthData) {
    min = Math.min(...tickerInfo.sixMonthData.map((item: any) => item['Close']));
    max = Math.max(...tickerInfo.sixMonthData.map((item: any) => item['Close']));
  } else if (viewTimeSelect === '1Y' && tickerInfo.oneYearData) {
    min = Math.min(...tickerInfo.oneYearData.map((item: any) => item['Close']));
    max = Math.max(...tickerInfo.oneYearData.map((item: any) => item['Close']));
  } else if (viewTimeSelect === '5Y' && tickerInfo.fiveYearData) {
    min = Math.min(...tickerInfo.fiveYearData.map((item: any) => item['Close']));
    max = Math.max(...tickerInfo.fiveYearData.map((item: any) => item['Close']));
  }

  const currData = () => {
    if (viewTimeSelect === '1D') {
      return tickerInfo.oneDayData;
    } else if (viewTimeSelect === '5D') {
      return tickerInfo.fiveDayData;
    } else if (viewTimeSelect === '1M') {
      return tickerInfo.oneMonthData;
    } else if (viewTimeSelect === '6M') {
      return tickerInfo.sixMonthData;
    } else if (viewTimeSelect === '1Y') {
      return tickerInfo.oneYearData;
    } else if (viewTimeSelect === '5Y') {
      return tickerInfo.fiveYearData;
    }
  };

  return (
    <ResponsiveContainer width='100%' height={'100%'} aspect={3}>
      <AreaChart data={currData()}>
        <CartesianGrid strokeDasharray='3 5' />
        <XAxis
          dataKey='Date'
          style={{ fontSize: '12px' }}
          minTickGap={50}
        />
        {/* find a better ratio for domain */}
        <YAxis
          domain={[min - 0.5, max + 0.5]}
          style={{ fontSize: '14px' }}
          width={50}
        />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='Close'
          stroke={tickerInfo.percentage > 0 ? '#228B22' : '#DC143C'}
          fill={tickerInfo.percentage > 0 ? '#228B22' : '#DC143C'}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
