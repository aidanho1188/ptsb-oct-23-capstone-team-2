import Summary from '../components/Summary/Summary'
import './updatestatus.css'
import Form from '../components/ResponseForm/ResponseForm'

function UpdateStatus() {
  return (
    <div className='update-status-container'>
      <h1 className='homepage-title'>Update Status</h1>
      <Form />
      <Summary />
    </div>
  )
}

export default UpdateStatus
