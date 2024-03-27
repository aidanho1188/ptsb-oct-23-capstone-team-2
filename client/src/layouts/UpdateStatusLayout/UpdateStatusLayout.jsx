import React, {useState, useEffect} from 'react'
import WorkOrder from '../../components/WorkOrder/WorkOrder'
import FormResponse from '../../components/FormResponse/FormResponse'
import Summary from '../../components/Summary/Summary'
import './updateStatusLayout.css'

function UpdateStatusLayout() {
  const [formState, setFormState] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

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
