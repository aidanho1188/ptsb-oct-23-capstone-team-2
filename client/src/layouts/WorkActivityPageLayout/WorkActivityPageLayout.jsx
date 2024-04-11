import WorkActivity from '../../components/WorkActivity/WorkActivity'
import SearchID from '../../components/SearchID/SearchID'
import {useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import './WorkActivityPageLayout.css'

function WorkActivityPage() {
  const [workorderActivity, setWorkorderActivity] = useState()

  const handleSearch = async (workorderID) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/workorders/activities/${workorderID}`)
      setWorkorderActivity(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.error(error)
      toast.error(`Error fetching workorder activity data: ${error.message}`)
    }
  }

  return (
    <div className='activity-layout'>
      <SearchID handleSearch={handleSearch} />
      <WorkActivity workorderActivity={workorderActivity} />
    </div>
  )
}

export default WorkActivityPage
