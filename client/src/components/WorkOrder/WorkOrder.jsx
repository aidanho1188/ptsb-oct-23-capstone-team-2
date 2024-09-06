import * as React from 'react'

import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import axios from 'axios'
import {toast} from 'react-toastify'
import './workorder.css'
import PropTypes from 'prop-types'

export function WorkOrder({onFormStateChange, onLoading}) {
  WorkOrder.propTypes = {
    onFormStateChange: PropTypes.func.isRequired,
    onLoading: PropTypes.func.isRequired,
  }
  const [workOrderId, setWorkOrderId] = React.useState('')
  const [status, setStatus] = React.useState('')

  const handleWorkOrderIdChange = (evt) => {
    setWorkOrderId(evt.target.value)
  }

  const handleStatusChange = (selectItem) => {
    setStatus(selectItem)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    onLoading(true)
    const apiUrl = import.meta.env.VITE_API_URL
    const url = `${apiUrl}/api/workorders/updateStatus/${workOrderId}`
    try {
      console.log('getting data from:', url)

      const response = await axios.patch(url, {
        status: status,
      })
      if (typeof response.data !== 'string') {
        console.log('response result:', response.data)
        onFormStateChange(response)
        onLoading(false)
      }

      console.log('response:', response)
      // console.log('response:', Object.prototype.hasOwnProperty.call(response.data, 'ErrorCode'))
      // console.log('response:', typeof response.data !== 'string')
      // if (Object.prototype.hasOwnProperty.call(response.data, 'ErrorCode') === true || typeof response.data === 'string') {
      //   console.log('response error:', response.data)
      //   onFormStateChange(response)
      //   onLoading(false)
      // }
    } catch (error) {
      console.error(`Error fetching data from ${url}: `, error)
      toast.error(`Error fetching data: ${error.message}`, {autoClose: 5000})

      const errorWithData = {
        ...error,
        data: {
          ErrorMessage: error.message,
        },
      }
      onFormStateChange(errorWithData)
      onLoading(false)
    }
  }

  return (
    <Card className='rounded-md w-[350px]'>
      <div className='order-layout'>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='work-order-layout'>
              <div className='flex flex-col space-y-3'>
                <Label htmlFor='workorder'>Work Order ID </Label>
                <div className='form-input'>
                  <Input id='name' placeholder='Enter work order ID' onChange={handleWorkOrderIdChange} required />
                  {/* <Button className='search-btn' variant='outline'></Button> */}
                </div>
              </div>
              <div className='flex flex-col space-y-3'>
                <Label htmlFor='status'>Status</Label>
                <div className='form-input'>
                  <Select onValueChange={handleStatusChange} required>
                    <SelectTrigger id='status'>
                      <SelectValue placeholder='Select Status' />
                    </SelectTrigger>
                    <SelectContent position='Select'>
                      <SelectItem value='In Progress/Dispatch Confirmed'>IN PROGRESS / DISPATCHED CONFIRMED</SelectItem>
                      <SelectItem value='In Progress/On Site'>IN PROGRESS / ON SITE</SelectItem>
                      <SelectItem value='In Progress/Parts On Order'>IN PROGRESS / PARTS ON ORDER</SelectItem>
                      <SelectItem value='IN PROGRESS/INCOMPLETE'>IN PROGRESS / INCOMPLETE</SelectItem>
                      <SelectItem value='In Progress/Unsatisfactory'>IN PROGRESS / UNSATISFACTORY</SelectItem>
                      <SelectItem value='In Progress/Waiting for Quote'>IN PROGRESS / WAITING FOR QUOTE</SelectItem>
                      <SelectItem value='In Progress/Proposal Approved'>IN PROGRESS / PROPOSAL APPROVED</SelectItem>
                      <SelectItem value='Completed/Confirmed'>COMPLETED / CONFIRMED</SelectItem>
                      <SelectItem value='Completed/Pending Confirmation'>COMPLETED / PENDING CONFIRMATION</SelectItem>
                      <SelectItem value='Completed/Cancelled'>COMPLETED / CANCELLED</SelectItem>
                      <SelectItem value='Completed/No Charge'>COMPLETED / NO CHARGE</SelectItem>
                      <SelectItem value='Invoiced'>INVOICED</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className='submit'>Submit</Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </div>
    </Card>
  )
}

export default WorkOrder
