import * as React from 'react'

import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import axios from 'axios'
import './workorder.css'

export function WorkOrder() {
  const [workOrderId, setWorkOrderId] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [data, setData] = React.useState('')

  const handleWorkOrderIdChange = (e) => {
    setWorkOrderId(e.target.value)
  }

  const handleStatusChange = (e) => {
    console.log('status:', e.target.value)
    setStatus(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const url = `http://localhost:8080/api/workorders/updateStatus/${workOrderId}`
    console.log('status:', status)
    console.log('workOrderId:', workOrderId)
    try {
      const response = await axios.patch(url, {
        status: status,
      })
      setData(response.data.value)
      console.log(response.data.value)
    } catch (error) {
      console.error(`Error fetching data from ${url}: `, error)
    }
  }

  return (
    <Card className='w-[350px]'>
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
                  <Select>
                    <SelectTrigger id='status'>
                      <SelectValue value='Select Status' placeholder='Select Status' onChange={handleStatusChange} />
                    </SelectTrigger>
                    <SelectContent position='Select'>
                      <SelectItem value='In Progress/Dispatch Confirmed'>IN PROGRESS / DISPATCHED CONFIRMED</SelectItem>
                      <SelectItem value='In Progress/On Site'>IN PROGRESS / ON SITE</SelectItem>
                      <SelectItem value='In Progress/Parts On Order'>IN PROGRESS / PARTS ON ORDER</SelectItem>
                      <SelectItem value='In Progress/Incomplete'>IN PROGRESS / INCOMPLETE</SelectItem>
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
                  <Button type='submit' className='submit'>
                    Submit
                  </Button>
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
