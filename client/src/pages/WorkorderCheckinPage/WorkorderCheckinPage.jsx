import NavBar from '../../layouts/Navbar/NavBar'
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import CheckinPageLayout from '../../layouts/CheckinPageLayout/CheckinPageLayout'

import './workorderCheckinPage.css'

function WorkorderCheckinPage() {
  return (
    <div className='workorder-checkin-page-container'>
      <NavBar />
      <BackToDashboard />
      <h1 className='checkin-page-title'>Check-In</h1>
      <CheckinPageLayout />
    </div>
  )
}

export default WorkorderCheckinPage
