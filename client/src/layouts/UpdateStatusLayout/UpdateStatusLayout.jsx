import React, {useState, useEffect} from 'react'
import WorkOrder from '../../components/WorkOrder/WorkOrder'
import FormResponse from '../../components/FormResponse/FormResponse'
import Summary from '../../components/Summary/Summary'
import './updateStatusLayout.css'

function UpdateStatusLayout() {
  const [formState, setFormState] = React.useState(null)
  return (
    <div className='update-status-layout'>
      <div className='left-column'>
        <WorkOrder onFormStateChange={setFormState} />
        <FormResponse formState={formState} />
      </div>
      <div className='right-column'>
        <Summary />
      </div>
    </div>
  )
}

export default UpdateStatusLayout
