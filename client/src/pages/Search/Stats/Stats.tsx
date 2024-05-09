import { useState } from 'react';

import { TableContainer, TableRow, TableCell } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllTickerInfo } from '../../../components/features/SearchTicker/tickerSlice';
import {
  StatsContainer,
  StatsTitleContainer,
  StatsTitle,
  StatsOptionContainer,
  StatsOption,
} from './StatsStyles/StatsStyles';
import SimpleStats from './SimpleStats';
import AdvancedStats from './AdvancedStats';

const Chart: React.FC = () => {
  const tickerInfo = useSelector(selectAllTickerInfo);
  const [selectedOption, setSelectedOption] = useState('simple');

  return (
    <StatsContainer>
      <StatsTitleContainer>
        <StatsTitle>Statistics</StatsTitle>
        <StatsOptionContainer>
          <StatsOption
            onClick={() => setSelectedOption('simple')}
            active={selectedOption === 'simple'}
          >
            Simple
          </StatsOption>
          <div style={{ cursor: 'default', fontSize: '20px', padding: '10px 0' }}>|</div>
          <StatsOption
            onClick={() => setSelectedOption('advanced')}
            active={selectedOption === 'advanced'}
          >
            Advanced
          </StatsOption>
        </StatsOptionContainer>
      </StatsTitleContainer>
      {selectedOption === 'simple' ? <SimpleStats /> : <AdvancedStats />}
    </StatsContainer>
  );
};

export default Chart;
