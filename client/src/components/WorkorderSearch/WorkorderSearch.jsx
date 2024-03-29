import {useState} from 'react'
import axios from 'axios'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'

import './workorderSearch.css'

function WorkorderSearch({setWorkorderInfo, setIsLoading}) {
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
        }
      }
      setWorkorderInfo(data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching work order:', error)
    }
  }

  return (
    <div className='search-form-container'>
      <h4 className='search-form-title'>Work Order: </h4>
      <form className='form-container space-y-8' onSubmit={handleSubmit}>
        <Input placeholder='Enter work order ID...' onChange={handleInputChange} className='search-input' required />
        <Button type='search' className='search-btn'>
          Search
        </Button>
      </form>
    </div>
  )
}

export default WorkorderSearch
