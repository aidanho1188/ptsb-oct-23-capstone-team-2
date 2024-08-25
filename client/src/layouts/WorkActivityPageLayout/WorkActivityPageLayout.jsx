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
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await axios.get(`${apiUrl}/api/workorders/activities/${workorderID}`)
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
