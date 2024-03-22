//TODO: import checkin component
//TODO: import checkin search response component
import './checkinPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'

function CheckinPageLayout() {
  return (
    <div className='checkin-page-layout'>
      <WorkorderSearch />
      <div className='popup-form'>
        {/* 50% */}
        <FormResponse />

        {/* this will be a component with 50%*/}
        <div className=''>gps checkin form</div>
      </div>
    </div>
  )
}

export default CheckinPageLayout
