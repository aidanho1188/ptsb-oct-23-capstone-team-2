import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import NavBar from '../../layouts/Navbar/NavBar'
import UpdateStatusLayout from '../../layouts/UpdateStatusLayout/UpdateStatusLayout'
import './updateStatusPage.css'

function UpdateStatus() {
  return (
    <div className='update-status-container'>
      <NavBar />
      <BackToDashboard />
      <UpdateStatusLayout />
    </div>
  )
}

export default UpdateStatus
