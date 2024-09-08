import './checkinoutPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'
import GpsCheckinForm from '../../components/Gps/GpsCheckinForm'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useState} from 'react'

function CheckinPageLayout() {
  const [workorderInfo, setWorkorderInfo] = useState(null) //state to store workorder info
  const [isLoading, setIsLoading] = useState(false)

  const [workorderId, setWorkorderId] = useState('') //state to store workorder id

  const handleInputChange = (event) => {
    setWorkorderId(event.target.value) //update workorderId state with input value
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log('Getting work order info... with id: ', workorderId)
    setIsLoading(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await axios.get(`${apiUrl}/api/workorders/${workorderId}`)
      let data = {workorder: response, location: null, userId: null}

      // if success, fetch longitude and latitude and userID
      if (!response.data.ErrorCode && typeof response.data !== 'string') {
        console.log('Work order info:', response.data)
        const [locationData, userID] = await Promise.all([axios.get(`${apiUrl}/api/workorders/locations/${response.data.LocationId}`), axios.get(`${apiUrl}/api/userId`)])
        console.log('Location data:', locationData.data)
        console.log('User ID:', userID.data)

        data = {
          workorder: response,
          location: locationData,
          userId: userID,
          success: 'Work order found!',
        }
      }
      console.log(data)

      setWorkorderInfo(data)
      setIsLoading(false)
    } catch (error) {
      // setWorkorderInfo(error)
      // setIsLoading(false)
      console.error('Error fetching work order:', error)
      toast.error(`Error fetching work order: ${error.message}`, {autoClose: 5000})
    }
  }

  return (
    <div className='checkin-page-layout'>
      <WorkorderSearch setWorkorderInfo={setWorkorderInfo} setIsLoading={setIsLoading} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
      <div className='popup-form'>
        <div className='form-response' style={{width: '50%'}}>
          <FormResponse formState={workorderInfo} isLoading={isLoading} />
        </div>

        <div className='gps-form' style={{width: '50%'}}>
          <GpsCheckinForm btnName={'Check In'} formState={workorderInfo} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  )
}

export default CheckinPageLayout
