import WorkActivity from '../../components/WorkActivity/WorkActivity'
import SearchID from '../../components/SearchID/SearchID'
import './WorkActivityPageLayout.css'

function WorkActivityPage() {
  return (
    <div className='activity-layout'>
      {/* <div className='search-component'> */}
      <SearchID />
      {/* </div> */}
      {/* <div className='activity-component'> */}
      <WorkActivity />
      {/* </div> */}
    </div>
  )
}

export default WorkActivityPage
