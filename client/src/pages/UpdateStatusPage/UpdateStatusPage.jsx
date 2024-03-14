import NavBar from '../../layouts/Navbar/NavBar'
import UpdateStatusLayout from '../../layouts/UpdateStatusLayout/UpdateStatusLayout'
import './updateStatusPage.css'
import {FaceIcon, ImageIcon, SunIcon} from '@radix-ui/react-icons'

function MyComponent() {
  return (
    <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  )
}

function UpdateStatus() {
  const goBackToHomePage = () => {
    window.location.href = '/'
  }
  return (
    <div className='update-status-container'>
      <NavBar />
      <UpdateStatusLayout />
    </div>
  )
}

export default UpdateStatus
