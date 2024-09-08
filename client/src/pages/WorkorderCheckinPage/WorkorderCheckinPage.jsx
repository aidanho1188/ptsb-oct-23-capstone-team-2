import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import CheckinPageLayout from '../../layouts/CheckinoutPageLayout/CheckinPageLayout'

import './workorderCheckinPage.css'

function WorkorderCheckinPage() {
  return (
    <div className='workorder-checkin-page-container'>
      <BackToDashboard />
      <h1 className='checkin-page-title'>Check-In</h1>
      <CheckinPageLayout />
    </div>
  )
}

export default WorkorderCheckinPage
