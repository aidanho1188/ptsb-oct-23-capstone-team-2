import './dashboard.css'
import DashboardPlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'

function Dashboard() {
  return (
    <div className='dashboard'>
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />
      <DashboardPlaceholder className='table' />

      <DashboardPlaceholder className='graph' />
    </div>
  )
}

export default Dashboard
