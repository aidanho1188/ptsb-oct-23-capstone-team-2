import Summary from '../components/Summary/Summary'
import WorkOrder from '../components/WorkOrder/WorkOrder'
import './updatestatus.css'

function UpdateStatus() {
  return (
    <div className='update-status-container'>
      <h1 className='homepage-title'>Update Status</h1>
      <Summary />
      <WorkOrder />
    </div>
  )
}

export default UpdateStatus
