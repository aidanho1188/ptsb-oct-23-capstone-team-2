import {useState} from 'react'
import WorkOrder from '../../components/WorkOrder/WorkOrder'
import FormResponse from '../../components/FormResponse/UpdateStatusFormResponse.jsx'
import Summary from '../../components/Summary/Summary'
import './updateStatusLayout.css'

function UpdateStatusLayout() {
  const [formState, setFormState] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='update-status-layout'>
      <div className='left-column'>
        <WorkOrder onFormStateChange={setFormState} onLoading={setIsLoading} />
        <FormResponse formState={formState} isLoading={isLoading} />
      </div>
      <div className='right-column'>
        <Summary isResponseLoading={isLoading} />
      </div>
    </div>
  )
}

export default UpdateStatusLayout
