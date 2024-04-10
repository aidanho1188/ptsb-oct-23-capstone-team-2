import WorkActivity from '../../components/WorkActivity/WorkActivity'
import SearchID from '../../components/SearchID/SearchID'
import {useState} from 'react'
import './WorkActivityPageLayout.css'

function WorkActivityPage() {
  const [workorderActivity, setWorkorderActivity] = useState([])
  async function fetchWorkorderActivity() {
    // fetch workorder activity data
  }

  const handleSearch = (workorderID) => {
    // handle search for workorderID
    // fetch workorder activity data
  }

  return (
    <div className='activity-layout'>
      <SearchID handleSearch={handleSearch} />
      <WorkActivity workorderActivity={workorderActivity} />
    </div>
  )
}

export default WorkActivityPage
