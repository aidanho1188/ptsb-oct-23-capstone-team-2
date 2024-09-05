import CreateWorkorder from '../../components/CreateWorkorder/CreateWorkorder'
import './CreateWorkorderPage.css'
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'

function CreateWorkorderPage() {
  return (
    <div className='Workorder-container'>
      <BackToDashboard />
      <div className='form'>
        <CreateWorkorder />
      </div>
    </div>
  )
}

export default CreateWorkorderPage
