import {Button} from '../ui/button'
import {Input} from '../ui/input'
import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import axios from 'axios'
import './GpsForm.css'

function GpsForm({btnName, formState, isLoading, setIsLoading}) {
  const {register, handleSubmit, reset} = useForm({
    defaultValues: {workTypeId: 1, userId: '', techsCount: 1, latitude: '', longitude: ''},
  })

  const onSubmit = async (event) => {
    event.preventDefault
    // send workorder id in the url params
    // localhost:8080/api/workorders/checkIn/:workorderId
    const workorderId = formState.workorder.data.Id
    // send these data with the body
    const {workTypeId, userId, techsCount, latitude, longitude} = event
    setIsLoading(true)
    const response = await axios.post(
      `http://localhost:8080/api/workorders/checkIn/${workorderId}`,
      {
        workTypeId: workTypeId.value,
        userId: userId.value,
        techsCount: techsCount.value,
        latitude: latitude.value,
        longitude: longitude.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        responsetype: 'json',
      },
    )
    console.log(' check in response:', response)
    if (response.data.success === true) {
      formState.success = `Check In Successful ${response.MechanicId}`
    } else {
      formState.workorder = response.data
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (formState && formState.userId && formState.location) {
      console.log('location:', formState.location.data)
      reset({
        workTypeId: 1,
        userId: formState.userId.data,
        techsCount: 1,
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
          <label htmlFor='userId'>User ID</label>
          <Input placeholder='Enter User ID' {...register('userId')} required />
        </div>

        <div>
          <label htmlFor='techsCount'>Number of Technicians Present</label>
          <Input placeholder='Number of Technicians Present' {...register('techsCount')} required />
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
export default GpsForm
