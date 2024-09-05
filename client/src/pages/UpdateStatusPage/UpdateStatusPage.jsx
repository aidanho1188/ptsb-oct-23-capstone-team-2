import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import UpdateStatusLayout from '../../layouts/UpdateStatusLayout/UpdateStatusLayout'
import './updateStatusPage.css'

function UpdateStatus() {
  return (
    <div className='update-status-container'>
      <BackToDashboard />
      <UpdateStatusLayout />
    </div>
  )
}

export default UpdateStatus
