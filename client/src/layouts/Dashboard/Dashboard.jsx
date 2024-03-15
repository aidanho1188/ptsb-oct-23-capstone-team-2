import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <TablePlaceholder className='table' />
      <TablePlaceholder className='table' />
      <TablePlaceholder className='table' />
      <TablePlaceholder className='table' />
      <TablePlaceholder className='table' />
      <TablePlaceholder className='table' />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
