import './checkinPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'
import GpsForm from '../../components/Gps/GpsForm'
import {useState} from 'react'

function CheckinPageLayout() {
  const [workorderInfo, setWorkorderInfo] = useState(null) //state to store workorder info
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='checkin-page-layout'>
      <WorkorderSearch setWorkorderInfo={setWorkorderInfo} setIsLoading={setIsLoading} />
      <div className='popup-form'>
        <div className='form-response' style={{width: '50%'}}>
          <FormResponse formState={workorderInfo} isLoading={isLoading} />
        </div>

        <div className='gps-form' style={{width: '50%'}}>
          <GpsForm btnName={'Check In'} formState={workorderInfo} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default CheckinPageLayout
