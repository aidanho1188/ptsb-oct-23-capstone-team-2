import {Button} from '../ui/button'
import {Input} from '../ui/input'
import {useForm} from 'react-hook-form'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {Select, SelectTrigger, SelectContent, SelectItem, SelectValue} from '@/components/ui/select'
import './GpsCheckoutForm.css'

function GpsCheckoutForm({btnName, formState, isLoading, setIsLoading}) {
  const {register, handleSubmit, reset} = useForm({
    defaultValues: {workTypeId: 1, primaryStatus: 'NoStatusChange', extendedStatus: '', actionStatus: 'Complete', resolution: '', userId: 0, latitude: 0, longitude: 0},
  })
  const [primaryStatus, setPrimaryStatus] = useState('NoStatusChange')

  const handlePrimaryStatusChange = (event) => {
    setPrimaryStatus(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault

    try {
      const workorderId = formState.workorder.data.Id
      // send these data with the body
      const {workTypeId, extendedStatus, actionStatus, resolution, userId, latitude, longitude} = event
      setIsLoading(true)
      const response = await axios.post(
        `http://localhost:8080/api/workorders/checkOut/${workorderId}`,
        {
          WorkTypeId: workTypeId,
          PrimaryStatus: primaryStatus,
          ExtendedStatus: extendedStatus,
          ActionStatus: actionStatus,
          Resolution: resolution,
          UserId: userId,
          Latitude: latitude,
          Longitude: longitude,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          responseType: 'json',
        },
      )
      console.log(' check out response:', response)
      if (response.data.success === true) {
        formState.success = `Check Out Successful!`
      } else {
        formState.workorder = response.data
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      toast.error(`Error checking out: ${error.message}`, {autoClose: 5000})
    }
  }

  useEffect(() => {
    if (formState && formState.userId && formState.location) {
      reset({
        workTypeId: 1,
        userId: formState.userId.data,
        latitude: formState.location.data.Latitude,
        longitude: formState.location.data.Longitude,
      })
    }
  }, [isLoading])

  return (
    <div className='gps-layout'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='workTypeId'>Work Type ID</label>
          <Input placeholder='Enter Work Type ID' {...register('workTypeId')} required />
        </div>

        <div>
          <label htmlFor='primaryStatus'>Primary Status</label>
          <Select id='primaryStatus' onChange={handlePrimaryStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='NoStatuschange'>No Status change</SelectItem>
              <SelectItem value='InProgress'>In Progress</SelectItem>
              <SelectItem value='WaitingForQuote'>Waiting For Quote</SelectItem>
              <SelectItem value='PartsOnOrder'>Parts On Order</SelectItem>
              <SelectItem value='Incomplete'>Incomplete</SelectItem>
              <SelectItem value='Completed'>Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor='extendedStatus'>Extended Status</label>
          <Input placeholder="Work Order's Extended Status" {...register('extendedStatus')} />
        </div>

        <div>
          <label htmlFor='actionStatus'>Action Status</label>
          <Input placeholder='Current Action Status' {...register('actionStatus')} />
        </div>

        <div>
          <label htmlFor='resolution'>Resolution</label>
          <Input placeholder="Work Order's Resolution" {...register('resolution')} />
        </div>

        <div>
          <label htmlFor='userId'>User ID</label>
          <Input placeholder='Enter User ID' {...register('userId')} required />
        </div>

        <div>
          <label htmlFor='latitude'>Latitude</label>
          <Input placeholder='Latitude' {...register('latitude')} required />
        </div>

        <div>
          <label htmlFor='longitude'>Longitude</label>
          <Input placeholder='Longitude' {...register('longitude')} required />
        </div>

        <br></br>
        <Button type='submit'>{btnName}</Button>
      </form>
    </div>
  )
}
export default GpsCheckoutForm
