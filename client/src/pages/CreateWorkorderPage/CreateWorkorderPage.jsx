import CreateWorkorder from '../../components/CreateWorkorder/CreateWorkorder'
import './CreateWorkorderPage.css'
import NavBar from '../../layouts/Navbar/NavBar'
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'

function CreateWorkorderPage() {
  return (
    <div className='Workorder-container'>
      <NavBar />
      <BackToDashboard />
      <div className='form'>
        <CreateWorkorder />
      </div>
    </div>
  )
}

export default CreateWorkorderPage
