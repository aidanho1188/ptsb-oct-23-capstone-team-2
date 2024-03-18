import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import OpenWorkorders from '../../components/OpenWorkorders/OpenWorkorders'
import OnSiteStatus from '../../components/OnSiteStatus/OnSiteStatus'
import './dashboard.css'
import IncompleteStatus from '../../components/IncompleteStatus/IncompleteStatus'

function Dashboard() {
  return (
    <div className='dashboard'>
      <OpenWorkorders />
      <OnSiteStatus />
      <IncompleteStatus />
      <TablePlaceholder />
      <TablePlaceholder />
      <TablePlaceholder />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
