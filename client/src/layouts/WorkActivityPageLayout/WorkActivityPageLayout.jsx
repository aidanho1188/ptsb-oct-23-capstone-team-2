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
      let response = await axios.get(`${apiUrl}/api/workorders/activities/${workorderID}`)
      const data = response.data.data
      if (data && typeof data === 'object' && Object.keys(data).length > 0) {
        setWorkorderActivity(data)
        console.log(data)
      } else {
        setWorkorderActivity({value: []})
        toast.error(`No workorder activity data found for workorder ID: ${workorderID}`)
      }
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
