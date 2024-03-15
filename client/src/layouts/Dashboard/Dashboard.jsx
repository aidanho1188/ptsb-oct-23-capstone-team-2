import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import OpenWorkorders from '../../components/OpenWorkorders/OpenWorkorders'
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <OpenWorkorders />
      <TablePlaceholder />
      <TablePlaceholder />
      <TablePlaceholder />
      <TablePlaceholder />
      <TablePlaceholder />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
