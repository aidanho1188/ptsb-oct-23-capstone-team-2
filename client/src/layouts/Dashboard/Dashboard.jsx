import './dashboard.css'
import DashboardPlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'

function Dashboard() {
  return (
    <div className='dashboard'>
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
