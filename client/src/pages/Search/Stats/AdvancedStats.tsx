import { useSelector } from 'react-redux'
import { selectAllTickerInfo } from '../../../components/features/SearchTicker/tickerSlice'
import { valuationData } from './StatsStyles/AdvancedStatsData'
import { AdvancedContainer, StyledTableContainer } from './StatsStyles/AdvancedStatsStyles'

const AdvancedStats = () => {
  const tickerInfo = useSelector(selectAllTickerInfo)

  const valuationDataArr = valuationData(tickerInfo.entry_info)

  return (
    <AdvancedContainer>
      coming soon!
    </AdvancedContainer>
  )
}

export default AdvancedStats