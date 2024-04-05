import './checkoutPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'
import GpsCheckoutForm from '../../components/Gps/GpsCheckoutForm'
import axios from 'axios'
import {useState} from 'react'

function CheckoutPageLayout() {
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
      const response = await axios.get(`http://localhost:8080/api/workorders/${workorderId}`)
      let data = {workorder: response, location: null, userId: null}

      // if success, fetch longitude and latitude and userID
      if (!response.data.ErrorCode && typeof response.data !== 'string') {
        console.log('Work order info:', response.data)
        const [locationData, userID] = await Promise.all([axios.get(`http://localhost:8080/api/workorders/locations/${response.data.LocationId}`), axios.get(`http://localhost:8080/api/userId`)])
        data = {
          workorder: response,
          location: locationData,
          userId: userID,
          success: 'Work order found!',
        }
      }
      setWorkorderInfo(data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching work order:', error)
    }
  }

  return (
    <div className='checkout-page-layout'>
      <WorkorderSearch setWorkorderInfo={setWorkorderInfo} setIsLoading={setIsLoading} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <div className='popup-form'>
        <div className='form-response' style={{width: '50%'}}>
          <FormResponse formState={workorderInfo} isLoading={isLoading} />
        </div>

        <div className='gps-form' style={{width: '50%'}}>
          {/* create & use a separate GPSCheckoutForm */}
          <GpsCheckoutForm btnName={'Check Out'} formState={workorderInfo} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPageLayout
