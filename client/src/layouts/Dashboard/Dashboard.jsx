import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import OpenWorkorders from '../../components/OpenWorkorders/OpenWorkorders'
import OnSiteStatus from '../../components/OnSiteStatus/OnSiteStatus'
import CompletednWO from '../../components/CompletedWO/CompletedWO'
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <OpenWorkorders />
      <OnSiteStatus />
      <TablePlaceholder />
      <TablePlaceholder />
      <TablePlaceholder />
      <CompletednWO />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
