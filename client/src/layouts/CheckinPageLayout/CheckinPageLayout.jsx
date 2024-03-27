import './checkinPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'
import GpsForm from '../../components/Gps/GpsForm'

function CheckinPageLayout() {
  return (
    <div className='checkin-page-layout'>
      <WorkorderSearch />
      <div className='popup-form'>
        <div className='form-response' style={{ width: '50%' }}>
          {/* 50% */}
          <FormResponse />
        </div>

        {/* this will be a component with 50%*/}
        <div className='gps-form' style={{ width: '50%' }}>
          <GpsForm  />
        </div>
      </div>
    </div>
  )
}

export default CheckinPageLayout
