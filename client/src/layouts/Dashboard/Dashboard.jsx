import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import OpenWorkorders from '../../components/OpenWorkorders/OpenWorkorders'
import OnSiteStatus from '../../components/OnSiteStatus/OnSiteStatus'
import './dashboard.css'
import AwaitingQuoteTable from '../../components/AwaitingQuoteTable/AwaitingQuoteTable'

function Dashboard() {
  
  return (
    <div className='dashboard'>
      <OpenWorkorders />
      <OnSiteStatus />
      <TablePlaceholder />
      <TablePlaceholder />
      <AwaitingQuoteTable />
      <TablePlaceholder />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
