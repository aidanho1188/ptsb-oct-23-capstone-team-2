import NavBar from '../../layouts/Navbar/NavBar'
import UpdateStatusLayout from '../../layouts/UpdateStatusLayout/UpdateStatusLayout'
import './updateStatusPage.css'

function UpdateStatus() {
  return (
    <div className='update-status-container'>
      <NavBar />
      <UpdateStatusLayout />
    </div>
  )
}

export default UpdateStatus
