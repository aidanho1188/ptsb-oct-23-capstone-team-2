//TODO: import checkin component
//TODO: import checkin search response component
import './checkinPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'

function CheckinPageLayout() {
  return (
    <div className='checkin-page-layout'>
        <div>
        <WorkorderSearch />
        </div>
        {/* div for checkin search response component */}
    </div>
  )
}

export default CheckinPageLayout