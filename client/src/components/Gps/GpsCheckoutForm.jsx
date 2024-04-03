import {Button} from '../ui/button'
import {Input} from '../ui/input'
import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import axios from 'axios'
import './GpsCheckoutForm.css'

function GpsCheckoutForm({btnName, formState, isLoading, setIsLoading}) {
  const {register, handleSubmit, reset} = useForm({
    defaultValues: {workTypeId: 1, PrimaryStatus: '', ExtendedStatus: '', ActionStatus: '', Resolution: '', UserId: '', Latitude: '', Longitude: ''},
  })

  const onSubmit = async (event) => {
    event.preventDefault
    // send workorder id in the url params
    // localhost:8080/api/workorders/checkOut/:workorderId
    const workorderId = formState.workorder.data.Id
    // send these data with the body
    const {workTypeId, primaryStatus, extendedStatus, actionStatus, resolution, userId, latitude, longitude} = event
    setIsLoading(true)
    const response = await axios.post(
      `http://localhost:8080/api/workorders/checkOut/${workorderId}`,
      {
        workTypeId: workTypeId.value,
        PrimaryStatus: primaryStatus.value,
        ExtendedStatus: extendedStatus.value,
        ActionStatus: actionStatus.value,
        Resolution: resolution.value,
        UserId: userId.value,
        Latitude: latitude.value,
        Longitude: longitude.value,
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
      formState.success = `Check Out Successful ${response.MechanicId}`
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
        PrimaryStatus: formState.primaryStatus.data,
        ExtendedStatus: formState.extendedStatus.data,
        ActionStatus: formState.actionStatus.data,
        Resolution: formState.resolution.data,
        UserId: formState.userId.data,
        Latitude: formState.location.data.latitude,
        Longitude: formState.location.data.longitude,
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
          <Input placeholder="Work Order's Primary Status" {...register('primaryStatus')} required />
        </div>

        <div>
          <label htmlFor='extendedStatus'>Extended Status</label>
          <Input placeholder="Work Order's Extended Status" {...register('extendedStatus')} />
        </div>

        <div>
          <label htmlFor='actionStatus'>Action Status</label>
          <Input placeholder="Current Action Status" {...register('actionStatus')} />
        </div>

        <div>
          <label htmlFor='resolution'>Resolution</label>
          <Input placeholder="Work Order's Resolution" {...register('resolution')} />
        </div>

        <div>
          <label htmlFor='userId'>User ID</label>
          <Input placeholder='Enter User ID' {...register('userID')} required />
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
